(function() {
  'use strict';

  const STORAGE_KEYS = {
    FAVORITES: 'computer-english-favorites',
    LEARNED: 'computer-english-learned',
    LAST_VISIT: 'computer-english-last-visit',
    STREAK: 'computer-english-streak',
    THEME: 'computer-english-theme',
    SRS: 'computer-english-srs-v1',
    ACTIVITY: 'computer-english-activity-v1'
  };

  /**
   * Escape HTML special characters to prevent XSS when inserting
   * user-editable strings via innerHTML. Static content (category names
   * from data/content.js) is also escaped defensively.
   */
  function escapeHtml(value) {
    if (value === null || value === undefined) return '';
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  class ComputerEnglishApp {
    constructor() {
      this.data = computerEnglishData;
      this.allItems = this.flattenData();
      this.favorites = this.loadFavorites();
      this.learned = this.loadLearned();
      this.srsState = this.loadSrs();
      this.currentIndex = 0;
      this.currentCategory = 'all';
      this.currentItems = this.buildSrsQueue(this.allItems);
      this.synth = window.speechSynthesis;
      this.isSpeaking = false;
      this.currentMode = 'card'; // card | dictation | quiz
      this.dictation = { active: false, targetId: null, attempts: 0 };
      this.quizOptions = [];
      this.quizLocked = false;
      this.activity = this.loadActivity();

      this.init();
    }

    init() {
      this.updateStreak();
      this.initTheme();
      this.initNavigation();
      this.initLearnView();
      this.initBrowseView();
      this.initFavoritesView();
      this.initProgressView();
      this.initKeyboardShortcuts();
      this.initTouchGestures();
      this.loadCard();
    }

    flattenData() {
      const items = [];
      this.data.categories.forEach(cat => {
        cat.items.forEach(item => {
          items.push({
            ...item,
            categoryName: cat.name,
            categoryNameCN: cat.nameCN
          });
        });
      });
      return items;
    }

    loadFavorites() {
      try {
        const stored = localStorage.getItem(STORAGE_KEYS.FAVORITES);
        return stored ? JSON.parse(stored) : [];
      } catch (e) {
        return [];
      }
    }

    saveFavorites() {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(this.favorites));
    }

    loadLearned() {
      try {
        const stored = localStorage.getItem(STORAGE_KEYS.LEARNED);
        return stored ? JSON.parse(stored) : [];
      } catch (e) {
        return [];
      }
    }

    saveLearned() {
      localStorage.setItem(STORAGE_KEYS.LEARNED, JSON.stringify(this.learned));
    }

    loadSrs() {
      try {
        const stored = localStorage.getItem(STORAGE_KEYS.SRS);
        const parsed = stored ? JSON.parse(stored) : {};
        return (parsed && typeof parsed === 'object') ? parsed : {};
      } catch (e) {
        return {};
      }
    }

    saveSrs() {
      localStorage.setItem(STORAGE_KEYS.SRS, JSON.stringify(this.srsState));
    }

    /** Daily activity log for the heatmap: { 'YYYY-MM-DD': count } */
    loadActivity() {
      try {
        const stored = localStorage.getItem(STORAGE_KEYS.ACTIVITY);
        const parsed = stored ? JSON.parse(stored) : {};
        return (parsed && typeof parsed === 'object') ? parsed : {};
      } catch (e) {
        return {};
      }
    }

    recordActivity() {
      const d = new Date();
      const key = d.getFullYear() + '-' +
        String(d.getMonth() + 1).padStart(2, '0') + '-' +
        String(d.getDate()).padStart(2, '0');
      this.activity[key] = (this.activity[key] || 0) + 1;
      try {
        localStorage.setItem(STORAGE_KEYS.ACTIVITY, JSON.stringify(this.activity));
      } catch (e) { /* storage full is not fatal here */ }
    }

    /**
     * Render a GitHub-style contribution heatmap for the last 365 days.
     * Columns are weeks (oldest on the left), rows are weekdays
     * (Sun..Sat top to bottom). Color levels: 0 / 1-4 / 5-9 / 10-19 / 20+.
     */
    renderHeatmap() {
      const box = document.getElementById('heatmap');
      if (!box) return;

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // Start 52 weeks back, aligned to Sunday so the grid is complete.
      const start = new Date(today);
      start.setDate(start.getDate() - 364);
      start.setDate(start.getDate() - start.getDay());

      const totalDays = Math.round((today - start) / 86400000) + 1;
      let html = '';
      for (let i = 0; i < totalDays; i++) {
        const day = new Date(start);
        day.setDate(start.getDate() + i);
        const key = day.getFullYear() + '-' +
          String(day.getMonth() + 1).padStart(2, '0') + '-' +
          String(day.getDate()).padStart(2, '0');
        const count = this.activity[key] || 0;
        const level = count === 0 ? 0 : count < 5 ? 1 : count < 10 ? 2 : count < 20 ? 3 : 4;
        const label = day.toDateString();
        html += `<span class="hm-cell hm-${level}" title="${label}${count ? '：' + count + ' 次练习' : '：无记录'}"></span>`;
      }
      box.innerHTML = html;
    }

    /**
     * Order items so that due/new cards appear first and future-due cards
     * last, keeping a small amount of randomness within each bucket so
     * the queue doesn't feel mechanical.
     */
    buildSrsQueue(items) {
      if (!window.SRS) return items.slice();
      const ids = items.map(i => i.id);
      const prioritized = SRS.prioritize(ids, this.srsState, new Date());
      const byId = new Map(items.map(i => [i.id, i]));
      return prioritized.map(id => byId.get(id)).filter(Boolean);
    }

    /** Re-prioritize the current queue and keep currentIndex valid. */
    refreshQueue() {
      const cur = this.currentItems[this.currentIndex];
      this.currentItems = this.buildSrsQueue(this.currentItems);
      if (cur) {
        const newIdx = this.currentItems.findIndex(i => i.id === cur.id);
        this.currentIndex = newIdx >= 0 ? newIdx : 0;
      }
    }

    updateStreak() {
      // Use UTC midnight for day-difference calculation to avoid
      // timezone / DST drift across days.
      const todayUtc = new Date();
      const todayKey = Date.UTC(todayUtc.getUTCFullYear(), todayUtc.getUTCMonth(), todayUtc.getUTCDate());
      const lastVisit = localStorage.getItem(STORAGE_KEYS.LAST_VISIT);
      let streak = parseInt(localStorage.getItem(STORAGE_KEYS.STREAK) || '1');

      if (lastVisit) {
        const lastKey = parseInt(lastVisit, 10);
        if (!Number.isNaN(lastKey)) {
          const diffDays = Math.round((todayKey - lastKey) / (1000 * 60 * 60 * 24));
          if (diffDays === 0) {
            // same day, streak unchanged
          } else if (diffDays === 1) {
            streak++;
          } else if (diffDays > 1) {
            streak = 1;
          }
        }
      }

      localStorage.setItem(STORAGE_KEYS.LAST_VISIT, todayKey.toString());
      localStorage.setItem(STORAGE_KEYS.STREAK, streak.toString());
      this.streak = streak;
    }

    initTheme() {
      const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
      this.setTheme(savedTheme);
      
      document.getElementById('theme-toggle').addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
      });
    }

    setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(STORAGE_KEYS.THEME, theme);
      document.getElementById('theme-icon').textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    shuffleItems() {
      for (let i = this.currentItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.currentItems[i], this.currentItems[j]] = [this.currentItems[j], this.currentItems[i]];
      }
      this.currentIndex = 0;
    }

    initNavigation() {
      const navBtns = document.querySelectorAll('.nav-btn');
      const views = document.querySelectorAll('.view');

      navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const viewName = btn.dataset.view;
          
          navBtns.forEach(b => b.classList.remove('active'));
          views.forEach(v => v.classList.remove('active'));
          
          btn.classList.add('active');
          document.getElementById(`${viewName}-view`).classList.add('active');
          
          if (viewName === 'favorites') {
            this.renderFavorites();
          } else if (viewName === 'progress') {
            this.updateProgressView();
          }
        });
      });
    }

    initLearnView() {
      const categorySelect = document.getElementById('learn-category-select');
      
      this.data.categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat.id;
        option.textContent = cat.nameCN;
        categorySelect.appendChild(option);
      });

      categorySelect.addEventListener('change', (e) => {
        this.currentCategory = e.target.value;
        if (this.currentCategory === 'all') {
          this.currentItems = [...this.allItems];
        } else {
          this.currentItems = this.allItems.filter(item => {
            const category = this.data.categories.find(c => c.id === this.currentCategory);
            return category && category.items.some(i => i.id === item.id);
          });
        }
        this.currentItems = this.buildSrsQueue(this.currentItems);
        this.currentIndex = 0;
        this.loadCard();
      });

      document.getElementById('flip-btn').addEventListener('click', () => {
        const card = document.getElementById('learning-card');
        card.classList.toggle('flipped');
        this.syncRatingBar();
      });

      document.getElementById('learning-card').addEventListener('click', (e) => {
        if (this.currentMode !== 'card') return; // no flipping in dictation
        if (!e.target.closest('.speak-btn')) {
          const card = document.getElementById('learning-card');
          card.classList.toggle('flipped');
          this.syncRatingBar();
        }
      });

      document.getElementById('speak-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        this.speakCurrent();
      });

      document.getElementById('favorite-btn').addEventListener('click', () => {
        this.toggleFavorite();
      });

      document.getElementById('next-btn').addEventListener('click', () => {
        this.nextCard();
      });

      document.getElementById('prev-btn').addEventListener('click', () => {
        this.prevCard();
      });

      // Rating bar buttons (4-button Anki-style rating)
      document.querySelectorAll('#rating-bar .rating-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const q = parseInt(btn.dataset.rating, 10);
          if (!Number.isNaN(q)) this.rateCurrent(q);
        });
      });

      // Mode toggle: card / dictation
      document.querySelectorAll('.mode-toggle button').forEach(btn => {
        btn.addEventListener('click', () => {
          this.setMode(btn.dataset.mode);
        });
      });

      // Dictation controls
      const dictSpeak = document.getElementById('dictation-speak');
      const dictCheck = document.getElementById('dictation-check');
      const dictInput = document.getElementById('dictation-input');
      if (dictSpeak) {
        dictSpeak.addEventListener('click', () => this.speakCurrent());
      }
      if (dictCheck) {
        dictCheck.addEventListener('click', () => this.checkDictation());
      }
      if (dictInput) {
        dictInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            this.checkDictation();
          }
        });
      }
    }

    /**
     * Switch between flashcard / dictation / quiz modes. The card is rebuilt
     * so the new mode's UI is shown and any leftover rating/dictation state
     * is cleared.
     */
    setMode(mode) {
      if (mode !== 'card' && mode !== 'dictation' && mode !== 'quiz') return;
      this.currentMode = mode;
      document.querySelectorAll('.mode-toggle button').forEach(btn => {
        const active = btn.dataset.mode === mode;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      this.loadCard();
    }

    /**
     * Compare the user's typed answer with the canonical english field.
     * Whitespace, casing, parentheses, and a few common shorthand are tolerated
     * so the user isn't tripped up by minor format differences.
     */
    normalizeAnswer(s) {
      return String(s || '')
        .toLowerCase()
        .replace(/[()]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    checkDictation() {
      const item = this.currentItems[this.currentIndex];
      if (!item) return;
      const input = document.getElementById('dictation-input');
      const feedback = document.getElementById('dictation-feedback');
      if (!input || !feedback) return;

      const guess = this.normalizeAnswer(input.value);
      const target = this.normalizeAnswer(item.english);
      const correct = guess.length > 0 && guess === target;

      this.dictation.attempts++;
      input.classList.remove('correct', 'wrong');
      feedback.classList.remove('correct', 'wrong');
      feedback.hidden = false;

      if (correct) {
        input.classList.add('correct');
        feedback.classList.add('correct');
        feedback.textContent = `✓ 正确：${item.english}`;
        // SRS: rate as Good (q=4) — first-time correct with some effort.
        const q = this.dictation.attempts === 1 ? SRS.RATING.GOOD : SRS.RATING.EASY;
        this.rateCurrent(q);
        input.value = '';
      } else {
        input.classList.add('wrong');
        feedback.classList.add('wrong');
        if (guess.length === 0) {
          feedback.textContent = `✗ 请输入答案`;
        } else {
          feedback.textContent = `✗ 再试一次。提示：${item.chinese}`;
        }
        // If they have tried 3 times, mark as Forgot and reveal.
        if (this.dictation.attempts >= 3) {
          feedback.textContent = `正确答案：${item.english}`;
          feedback.classList.remove('wrong');
          feedback.classList.add('correct');
          input.value = '';
          this.rateCurrent(SRS.RATING.FORGOT);
        }
      }
    }

    /**
     * Show rating bar only after the card is flipped. Hide it whenever the
     * card is unflipped (i.e. on a fresh card or after a rating).
     */
    syncRatingBar() {
      const flipped = document.getElementById('learning-card').classList.contains('flipped');
      const bar = document.getElementById('rating-bar');
      if (this.currentMode !== 'card') {
        bar.hidden = true;
        return;
      }
      bar.hidden = !flipped;
    }

    /**
     * Apply SM-2 to the current item and advance. q is 1..5 (1=forgot,
     * 3=hard, 4=good, 5=easy). A "Good" or higher rating marks the item
     * as learned for the first time; a "Forgot" rating never marks it.
     */
    rateCurrent(q) {
      const item = this.currentItems[this.currentIndex];
      if (!item || !window.SRS) return;
      const prev = this.srsState[item.id];
      this.srsState[item.id] = SRS.review(prev, q, new Date());
      this.saveSrs();
      this.recordActivity();

      if (q >= 3 && !this.learned.includes(item.id)) {
        this.learned.push(item.id);
        this.saveLearned();
      }

      // Show a brief toast summarising the schedule.
      const ns = this.srsState[item.id];
      const nextDays = Math.max(0, Math.round((ns.due - SRS.todayKey()) / SRS.DAY_MS));
      const labels = { 1: '忘了', 3: '模糊', 4: '记得', 5: '轻松' };
      this.showToast(`${labels[q] || '已评'} | ${nextDays === 0 ? '今天再练' : nextDays + ' 天后复习'}`);

      // For "Forgot" cards, keep them at the front of the queue by
      // re-prioritizing and resetting the pointer.
      if (q < 3) {
        this.refreshQueue();
      } else {
        this.nextCard();
      }
    }

    loadCard() {
      if (this.currentItems.length === 0) {
        return;
      }

      const item = this.currentItems[this.currentIndex];

      // Hide rating bar and any dictation feedback while we are flipping
      // to a new card. The rating bar will be re-shown if the user flips.
      document.getElementById('rating-bar').hidden = true;
      const dictBar = document.getElementById('dictation-bar');
      if (dictBar) dictBar.hidden = this.currentMode !== 'dictation';
      const dictFb = document.getElementById('dictation-feedback');
      if (dictFb) dictFb.hidden = true;
      const quizBar = document.getElementById('quiz-bar');
      if (quizBar) quizBar.hidden = this.currentMode !== 'quiz';
      this.dictation = { active: this.currentMode === 'dictation', targetId: item.id, attempts: 0 };
      this.quizLocked = false;

      const card = document.getElementById('learning-card');
      card.classList.remove('flipped');

      setTimeout(() => {
        document.getElementById('card-category').textContent = item.categoryName;
        document.getElementById('card-english').textContent = item.english;
        document.getElementById('card-pronunciation').textContent = item.pronunciation;
        document.getElementById('card-chinese').textContent = item.chinese;
        document.getElementById('card-example').textContent = item.example;

        const favoriteBtn = document.getElementById('favorite-btn');
        if (this.favorites.includes(item.id)) {
          favoriteBtn.classList.add('active');
        } else {
          favoriteBtn.classList.remove('active');
        }
        
        this.updateProgressIndicator();
        // NOTE: do NOT auto-mark as learned here. A card is only counted
        // as "learned" after the user gives an explicit recall rating
        // (Hard / Good / Easy), or after a correct answer in dictation mode.
        // See markAsLearned() callers below.

        // In dictation mode, hide the english text so the user must
        // recall it. Show the chinese + pronunciation as hints, then
        // auto-play the audio so the user hears the word.
        if (this.currentMode === 'dictation') {
          document.getElementById('card-english').textContent = '? ? ?';
          this.speak(item.english);
          const di = document.getElementById('dictation-input');
          if (di) { di.value = ''; di.focus(); }
        }

        // In quiz mode the Chinese meaning is the question and the four
        // English options (one correct + three distractors) are shown below.
        if (this.currentMode === 'quiz') {
          document.getElementById('card-english').textContent = item.chinese;
          document.getElementById('card-pronunciation').textContent = '—— 选择正确答案 ——';
          this.renderQuizOptions(item);
        }
      }, 150);
    }

    /**
     * Build 4 options for the quiz: the correct item plus three random
     * distractors, preferably from the same category so the options are
     * plausible. Options are shuffled with Fisher-Yates.
     */
    renderQuizOptions(item) {
      const bar = document.getElementById('quiz-bar');
      const optsBox = document.getElementById('quiz-options');
      if (!bar || !optsBox) return;
      bar.hidden = false;

      const pool = this.allItems.filter(i =>
        i.categoryName === item.categoryName && i.id !== item.id
      );
      // Fisher-Yates shuffle the pool, then take the first three.
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      // Fallback: if the category is too small, fill from all items.
      while (pool.length < 3) {
        const extra = this.allItems[Math.floor(Math.random() * this.allItems.length)];
        if (extra.id !== item.id && !pool.some(p => p.id === extra.id)) pool.push(extra);
      }
      const options = [item, pool[0], pool[1], pool[2]];
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      this.quizOptions = options;

      optsBox.innerHTML = options.map((o, idx) => `
        <button class="quiz-option" data-id="${escapeHtml(o.id)}">
          <span class="quiz-option-key">${idx + 1}</span>
          <span class="quiz-option-text">${escapeHtml(o.english)}</span>
        </button>
      `).join('');

      optsBox.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => this.checkQuizAnswer(btn.dataset.id, btn));
      });
    }

    /**
     * Grade a quiz answer: correct -> SRS Good; wrong -> reveal the right
     * answer briefly, then SRS Forgot. The card advances after a short
     * delay so the user can see which option was correct.
     */
    checkQuizAnswer(selectedId, btn) {
      if (this.quizLocked) return;
      const item = this.currentItems[this.currentIndex];
      if (!item) return;
      this.quizLocked = true;

      const optionBtns = document.querySelectorAll('.quiz-option');
      optionBtns.forEach(b => {
        b.disabled = true;
        if (b.dataset.id === item.id) b.classList.add('correct');
      });

      const correct = selectedId === item.id;
      if (correct) {
        btn.classList.add('correct');
        setTimeout(() => this.rateCurrent(SRS.RATING.GOOD), 900);
      } else {
        btn.classList.add('wrong');
        this.showToast(`正确答案：${item.english}`);
        setTimeout(() => this.rateCurrent(SRS.RATING.FORGOT), 1600);
      }
    }

    updateProgressIndicator() {
      document.getElementById('progress-text').textContent = 
        `${this.currentIndex + 1} / ${this.currentItems.length}`;
      const progress = ((this.currentIndex + 1) / this.currentItems.length) * 100;
      document.getElementById('progress-fill').style.width = `${progress}%`;
    }

    markAsLearned(itemId) {
      if (!this.learned.includes(itemId)) {
        this.learned.push(itemId);
        this.saveLearned();
      }
    }

    speakCurrent() {
      const item = this.currentItems[this.currentIndex];
      this.speak(item.english);
    }

    speak(text) {
      if (this.isSpeaking) {
        this.synth.cancel();
        this.isSpeaking = false;
        document.querySelectorAll('.speak-btn').forEach(btn => {
          btn.classList.remove('speaking');
        });
        return;
      }

      if (!this.synth) {
        this.showToast('您的浏览器不支持语音功能');
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      utterance.pitch = 1;

      const voices = this.synth.getVoices();
      const englishVoice = voices.find(v => v.lang.startsWith('en'));
      if (englishVoice) {
        utterance.voice = englishVoice;
      }

      utterance.onstart = () => {
        this.isSpeaking = true;
        document.querySelectorAll('.speak-btn').forEach(btn => {
          if (btn.closest('.learning-card') || btn.closest('.item-card')) {
            btn.classList.add('speaking');
          }
        });
      };

      utterance.onend = () => {
        this.isSpeaking = false;
        document.querySelectorAll('.speak-btn').forEach(btn => {
          btn.classList.remove('speaking');
        });
      };

      utterance.onerror = () => {
        this.isSpeaking = false;
        document.querySelectorAll('.speak-btn').forEach(btn => {
          btn.classList.remove('speaking');
        });
      };

      this.synth.speak(utterance);
    }

    toggleFavorite() {
      const item = this.currentItems[this.currentIndex];
      const index = this.favorites.indexOf(item.id);
      const btn = document.getElementById('favorite-btn');
      
      if (index > -1) {
        this.favorites.splice(index, 1);
        btn.classList.remove('active');
        this.showToast('已取消收藏');
      } else {
        this.favorites.push(item.id);
        btn.classList.add('active');
        this.showToast('已添加到收藏');
      }
      
      this.saveFavorites();
    }

    nextCard() {
      this.currentIndex = (this.currentIndex + 1) % this.currentItems.length;
      this.loadCard();
    }

    prevCard() {
      this.currentIndex = (this.currentIndex - 1 + this.currentItems.length) % this.currentItems.length;
      this.loadCard();
    }

    initBrowseView() {
      const categoryTabs = document.getElementById('category-tabs');
      
      this.data.categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'tab-btn';
        btn.dataset.category = cat.id;
        btn.textContent = cat.nameCN;
        categoryTabs.appendChild(btn);
      });

      const tabBtns = categoryTabs.querySelectorAll('.tab-btn');
      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          tabBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.filterBrowseItems(btn.dataset.category);
        });
      });

      document.getElementById('search-input').addEventListener('input', (e) => {
        this.searchItems(e.target.value);
      });

      this.renderBrowseItems(this.allItems);
    }

    filterBrowseItems(category) {
      let items;
      if (category === 'all') {
        items = this.allItems;
      } else {
        const cat = this.data.categories.find(c => c.id === category);
        items = cat ? cat.items.map(item => ({
          ...item,
          categoryName: cat.name,
          categoryNameCN: cat.nameCN
        })) : [];
      }
      this.renderBrowseItems(items);
    }

    searchItems(query) {
      if (!query.trim()) {
        const activeTab = document.querySelector('.tab-btn.active');
        this.filterBrowseItems(activeTab ? activeTab.dataset.category : 'all');
        return;
      }

      const lowerQuery = query.toLowerCase();
      const filtered = this.allItems.filter(item => 
        item.english.toLowerCase().includes(lowerQuery) ||
        item.chinese.includes(query) ||
        item.pronunciation.toLowerCase().includes(lowerQuery)
      );
      this.renderBrowseItems(filtered);
    }

    renderBrowseItems(items) {
      const grid = document.getElementById('items-grid');
      
      if (items.length === 0) {
        grid.innerHTML = `
          <div class="empty-state">
            <span class="empty-icon">🔍</span>
            <p>没有找到匹配的内容</p>
          </div>
        `;
        return;
      }

      grid.innerHTML = items.map(item => `
        <div class="item-card" data-id="${escapeHtml(item.id)}">
          <div class="item-header">
            <span class="item-english">${escapeHtml(item.english)}</span>
            <button class="item-speak" data-id="${escapeHtml(item.id)}">🔊</button>
          </div>
          <div class="item-chinese">${escapeHtml(item.chinese)}</div>
          <div class="item-pronunciation">${escapeHtml(item.pronunciation)}</div>
          <span class="item-category">${escapeHtml(item.categoryNameCN)}</span>
        </div>
      `).join('');

      grid.querySelectorAll('.item-speak').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const item = this.allItems.find(i => i.id === btn.dataset.id);
          if (item) {
            this.speak(item.english);
          }
        });
      });

      grid.querySelectorAll('.item-card').forEach(card => {
        card.addEventListener('click', () => {
          const itemId = card.dataset.id;
          const item = this.allItems.find(i => i.id === itemId);
          if (item) {
            this.showItemDetails(item);
          }
        });
      });
    }

    showItemDetails(item) {
      const modal = document.createElement('div');
      modal.className = 'modal-overlay';
      modal.innerHTML = `
        <div class="modal-content">
          <button class="modal-close">&times;</button>
          <span class="category-badge">${escapeHtml(item.categoryName)}</span>
          <h2>${escapeHtml(item.english)}</h2>
          <p class="pronunciation">${escapeHtml(item.pronunciation)}</p>
          <p class="chinese">${escapeHtml(item.chinese)}</p>
          <div class="example">
            <span class="label">示例:</span>
            <code>${escapeHtml(item.example)}</code>
          </div>
          <button class="speak-btn-large" data-action="speak">
            <span>🔊</span> 朗读
          </button>
        </div>
      `;

      modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
      });

      const speakBtn = modal.querySelector('.speak-btn-large');
      speakBtn.addEventListener('click', () => {
        this.speak(item.english);
      });
      
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.remove();
        }
      });
      
      document.body.appendChild(modal);
    }

    initFavoritesView() {
    }

    renderFavorites() {
      const grid = document.getElementById('favorites-grid');
      const favoriteItems = this.allItems.filter(item => this.favorites.includes(item.id));
      
      document.getElementById('favorites-count').textContent = 
        `${favoriteItems.length} 个项目`;

      if (favoriteItems.length === 0) {
        grid.innerHTML = `
          <div class="empty-state">
            <span class="empty-icon">⭐</span>
            <p>还没有收藏任何内容</p>
            <p class="empty-hint">在学习模式下点击 ⭐ 收藏感兴趣的内容</p>
          </div>
        `;
        return;
      }

      grid.innerHTML = favoriteItems.map(item => `
        <div class="item-card" data-id="${escapeHtml(item.id)}">
          <div class="item-header">
            <span class="item-english">${escapeHtml(item.english)}</span>
            <button class="item-speak" data-id="${escapeHtml(item.id)}">🔊</button>
          </div>
          <div class="item-chinese">${escapeHtml(item.chinese)}</div>
          <div class="item-pronunciation">${escapeHtml(item.pronunciation)}</div>
          <span class="item-category">${escapeHtml(item.categoryNameCN)}</span>
          <button class="remove-favorite" data-id="${escapeHtml(item.id)}">❌</button>
        </div>
      `).join('');

      grid.querySelectorAll('.item-speak').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const item = this.allItems.find(i => i.id === btn.dataset.id);
          if (item) {
            this.speak(item.english);
          }
        });
      });

      grid.querySelectorAll('.remove-favorite').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.dataset.id;
          const index = this.favorites.indexOf(id);
          if (index > -1) {
            this.favorites.splice(index, 1);
            this.saveFavorites();
            this.renderFavorites();
            this.showToast('已取消收藏');
          }
        });
      });

      grid.querySelectorAll('.item-card').forEach(card => {
        card.addEventListener('click', () => {
          const itemId = card.dataset.id;
          const item = this.allItems.find(i => i.id === itemId);
          if (item) {
            this.showItemDetails(item);
          }
        });
      });
    }

    initProgressView() {
      document.getElementById('reset-progress-btn').addEventListener('click', () => {
        if (confirm('确定要重置所有学习进度和收藏吗？此操作不可撤销。')) {
          this.favorites = [];
          this.learned = [];
          this.srsState = {};
          this.activity = {};
          this.saveFavorites();
          this.saveLearned();
          this.saveSrs();
          try {
            localStorage.setItem(STORAGE_KEYS.ACTIVITY, JSON.stringify(this.activity));
          } catch (e) { /* ignore */ }
          this.updateProgressView();
          this.showToast('已重置所有进度');
        }
      });

      // Data backup: export all learning state to a JSON file, or
      // restore it from a previously exported file.
      const exportBtn = document.getElementById('export-data-btn');
      const importBtn = document.getElementById('import-data-btn');
      const importInput = document.getElementById('import-data-input');
      if (exportBtn) exportBtn.addEventListener('click', () => this.exportData());
      if (importBtn) {
        importBtn.addEventListener('click', () => importInput.click());
      }
      if (importInput) {
        importInput.addEventListener('change', () => {
          const file = importInput.files && importInput.files[0];
          if (file) this.importData(file);
          importInput.value = '';
        });
      }
    }

    /**
     * Collect every persisted learning state into one portable object.
     * Format: { app, version, exportedAt, data: { favorites, learned,
     * srs, activity, streak, lastVisit, theme } }
     */
    buildBackupObject() {
      return {
        app: 'computer-english-learning',
        version: 1,
        exportedAt: new Date().toISOString(),
        data: {
          favorites: this.favorites,
          learned: this.learned,
          srs: this.srsState,
          activity: this.activity,
          streak: this.streak,
          lastVisit: localStorage.getItem(STORAGE_KEYS.LAST_VISIT),
          theme: localStorage.getItem(STORAGE_KEYS.THEME) || 'light'
        }
      };
    }

    exportData() {
      try {
        const backup = this.buildBackupObject();
        const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const d = new Date();
        const stamp = d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
        a.href = url;
        a.download = `computer-english-backup-${stamp}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        this.showToast('备份文件已导出');
      } catch (e) {
        this.showToast('导出失败：' + e.message);
      }
    }

    /**
     * Restore state from a backup file. The file must carry our app
     * marker and a valid data object; the user must confirm the
     * overwrite before anything is written.
     */
    importData(file) {
      const reader = new FileReader();
      reader.onerror = () => this.showToast('无法读取文件');
      reader.onload = () => {
        let backup;
        try {
          backup = JSON.parse(reader.result);
        } catch (e) {
          this.showToast('导入失败：文件不是有效的 JSON');
          return;
        }
        if (!backup || backup.app !== 'computer-english-learning' ||
            !backup.data || typeof backup.data !== 'object') {
          this.showToast('导入失败：不是本应用的备份文件');
          return;
        }
        const d = backup.data;
        const isValidArray = v => Array.isArray(v);
        if (!isValidArray(d.favorites) || !isValidArray(d.learned) ||
            typeof d.srs !== 'object' || d.srs === null) {
          this.showToast('导入失败：备份数据结构不完整');
          return;
        }

        const msg = `确定要导入这份备份吗？\n\n导出时间：${backup.exportedAt || '未知'}\n已学：${d.learned.length} 词 | 收藏：${d.favorites.length} 词\n\n当前的所有进度将被覆盖。`;
        if (!confirm(msg)) return;

        try {
          this.favorites = d.favorites.filter(id => typeof id === 'string');
          this.learned = d.learned.filter(id => typeof id === 'string');
          this.srsState = d.srs;
          this.activity = (d.activity && typeof d.activity === 'object') ? d.activity : {};

          this.saveFavorites();
          this.saveLearned();
          this.saveSrs();
          localStorage.setItem(STORAGE_KEYS.ACTIVITY, JSON.stringify(this.activity));
          if (typeof d.lastVisit === 'string') localStorage.setItem(STORAGE_KEYS.LAST_VISIT, d.lastVisit);
          if (d.streak && !isNaN(parseInt(d.streak, 10))) {
            localStorage.setItem(STORAGE_KEYS.STREAK, String(parseInt(d.streak, 10)));
          }
          if (d.theme === 'light' || d.theme === 'dark') this.setTheme(d.theme);

          // Rebuild the study queue with the imported SRS state.
          this.currentItems = this.buildSrsQueue(this.allItems);
          this.currentIndex = 0;
          this.updateProgressView();
          this.loadCard();
          this.showToast('数据导入成功');
        } catch (e) {
          this.showToast('导入失败：' + e.message);
        }
      };
      reader.readAsText(file);
    }

    updateProgressView() {
      document.getElementById('total-learned').textContent = this.learned.length;
      document.getElementById('total-favorites').textContent = this.favorites.length;
      document.getElementById('streak-days').textContent = this.streak;

      const completionRate = Math.round((this.learned.length / this.allItems.length) * 100);
      document.getElementById('completion-rate').textContent = `${completionRate}%`;

      if (window.SRS) {
        const stats = SRS.summarize(this.srsState, new Date());
        document.getElementById('srs-due').textContent = stats.due;
        document.getElementById('srs-new').textContent = stats.newCards;
        document.getElementById('srs-learning').textContent = stats.learning;
        document.getElementById('srs-mastered').textContent = stats.mastered;
      }

      this.renderHeatmap();

      const categoryBars = document.getElementById('category-bars');
      categoryBars.innerHTML = this.data.categories.map(cat => {
        const catItems = cat.items.map(i => i.id);
        const learnedInCategory = this.learned.filter(id => catItems.includes(id)).length;
        const progress = Math.round((learnedInCategory / cat.items.length) * 100);

        return `
          <div class="category-bar">
            <div class="category-bar-header">
              <span class="category-bar-name">${escapeHtml(cat.nameCN)}</span>
              <span class="category-bar-value">${learnedInCategory}/${cat.items.length}</span>
            </div>
            <div class="category-bar-track">
              <div class="category-bar-fill" style="width: ${progress}%"></div>
            </div>
          </div>
        `;
      }).join('');
    }

    showToast(message) {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.classList.add('show');

      setTimeout(() => {
        toast.classList.remove('show');
      }, 2000);
    }

    /**
     * Keyboard shortcuts:
     *   Space / Enter    flip card (card mode) | submit (dictation mode)
     *   ArrowRight       next card
     *   ArrowLeft        prev card
     *   f                toggle favorite
     *   s                speak current
     *   1/2/3/4          rate Forgot/Hard/Good/Easy (card mode, after flip)
     *
     * Shortcuts are suppressed when focus is in an input/textarea or when
     * a modal is open.
     */
    initKeyboardShortcuts() {
      document.addEventListener('keydown', (e) => {
        const target = e.target;
        if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
          return;
        }
        if (document.querySelector('.modal-overlay')) return;

        // Only react when the learn view is active.
        const learnView = document.getElementById('learn-view');
        if (!learnView || !learnView.classList.contains('active')) return;

        const key = e.key;
        const lower = typeof key === 'string' ? key.toLowerCase() : key;

        if (key === ' ' || key === 'Enter') {
          e.preventDefault();
          if (this.currentMode === 'dictation') {
            this.checkDictation();
          } else {
            const card = document.getElementById('learning-card');
            card.classList.toggle('flipped');
            this.syncRatingBar();
          }
          return;
        }
        if (key === 'ArrowRight') {
          e.preventDefault();
          this.nextCard();
          return;
        }
        if (key === 'ArrowLeft') {
          e.preventDefault();
          this.prevCard();
          return;
        }
        if (lower === 'f') {
          e.preventDefault();
          this.toggleFavorite();
          return;
        }
        if (lower === 's') {
          e.preventDefault();
          this.speakCurrent();
          return;
        }
        if (this.currentMode === 'card' &&
            document.getElementById('learning-card').classList.contains('flipped')) {
          const ratingKeyMap = { '1': 1, '2': 3, '3': 4, '4': 5 };
          if (Object.prototype.hasOwnProperty.call(ratingKeyMap, key)) {
            e.preventDefault();
            this.rateCurrent(ratingKeyMap[key]);
            return;
          }
        }
        if (this.currentMode === 'quiz' && ['1', '2', '3', '4'].indexOf(key) !== -1) {
          e.preventDefault();
          const idx = parseInt(key, 10) - 1;
          const btn = document.querySelectorAll('#quiz-options .quiz-option')[idx];
          if (btn && !btn.disabled) this.checkQuizAnswer(btn.dataset.id, btn);
          return;
        }
      });
    }

    /**
     * Touch gestures: swipe left -> next, swipe right -> prev.
     * Implemented with simple pointer events so it works on both touch
     * screens and trackpads without depending on a library.
     */
    initTouchGestures() {
      const card = document.getElementById('learning-card');
      if (!card) return;
      let startX = 0;
      let startY = 0;
      let active = false;
      const SWIPE_THRESHOLD = 50;
      const VERTICAL_LIMIT = 80;

      card.addEventListener('pointerdown', (ev) => {
        if (this.currentMode !== 'card') return;
        startX = ev.clientX;
        startY = ev.clientY;
        active = true;
      });

      card.addEventListener('pointerup', (ev) => {
        if (!active) return;
        active = false;
        const dx = ev.clientX - startX;
        const dy = ev.clientY - startY;
        if (Math.abs(dx) < SWIPE_THRESHOLD) return;
        if (Math.abs(dy) > VERTICAL_LIMIT) return; // mostly vertical -> not swipe
        if (dx < 0) this.nextCard();
        else this.prevCard();
      });

      card.addEventListener('pointercancel', () => { active = false; });
    }
  }

  const style = document.createElement('style');
  style.textContent = `
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.2s ease;
    }
    
    .modal-content {
      background: var(--surface);
      border-radius: 1rem;
      padding: 2rem;
      max-width: 500px;
      width: 90%;
      position: relative;
      animation: slideUp 0.3s ease;
    }
    
    .modal-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--text-secondary);
    }
    
    .modal-content h2 {
      font-size: 2rem;
      margin: 1rem 0 0.5rem;
      color: var(--text-primary);
    }
    
    .modal-content .pronunciation {
      color: var(--text-secondary);
      font-style: italic;
      margin-bottom: 1rem;
    }
    
    .modal-content .chinese {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }
    
    .modal-content .example {
      background: var(--background);
      padding: 1rem;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
    }
    
    .modal-content .example code {
      color: var(--secondary);
      font-family: monospace;
    }
    
    .speak-btn-large {
      width: 100%;
      padding: 1rem;
      background: var(--primary);
      color: white;
      border: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
    
    .speak-btn-large:hover {
      background: var(--primary-dark);
    }
    
    @keyframes slideUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    
    .remove-favorite {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: none;
      border: none;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
    
    .item-card {
      position: relative;
    }
    
    .item-card:hover .remove-favorite {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);

  window.app = new ComputerEnglishApp();
})();

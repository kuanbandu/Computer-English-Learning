(function() {
  const STORAGE_KEYS = {
    FAVORITES: 'computer-english-favorites',
    LEARNED: 'computer-english-learned',
    LAST_VISIT: 'computer-english-last-visit',
    STREAK: 'computer-english-streak',
    THEME: 'computer-english-theme'
  };

  class ComputerEnglishApp {
    constructor() {
      this.data = computerEnglishData;
      this.allItems = this.flattenData();
      this.favorites = this.loadFavorites();
      this.learned = this.loadLearned();
      this.currentIndex = 0;
      this.currentCategory = 'all';
      this.currentItems = [...this.allItems];
      this.synth = window.speechSynthesis;
      this.isSpeaking = false;
      
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
      this.shuffleItems();
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

    updateStreak() {
      const today = new Date().toDateString();
      const lastVisit = localStorage.getItem(STORAGE_KEYS.LAST_VISIT);
      let streak = parseInt(localStorage.getItem(STORAGE_KEYS.STREAK) || '1');

      if (lastVisit) {
        const lastDate = new Date(lastVisit);
        const todayDate = new Date();
        const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
        } else if (diffDays === 1) {
          streak++;
        } else {
          streak = 1;
        }
      }

      localStorage.setItem(STORAGE_KEYS.LAST_VISIT, today);
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
        this.shuffleItems();
        this.loadCard();
      });

      document.getElementById('flip-btn').addEventListener('click', () => {
        document.getElementById('learning-card').classList.toggle('flipped');
      });

      document.getElementById('learning-card').addEventListener('click', (e) => {
        if (!e.target.closest('.speak-btn')) {
          document.getElementById('learning-card').classList.toggle('flipped');
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
    }

    loadCard() {
      if (this.currentItems.length === 0) {
        return;
      }

      const item = this.currentItems[this.currentIndex];
      
      document.getElementById('learning-card').classList.remove('flipped');
      
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
        this.markAsLearned(item.id);
      }, 150);
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
        <div class="item-card" data-id="${item.id}">
          <div class="item-header">
            <span class="item-english">${item.english}</span>
            <button class="item-speak" data-id="${item.id}">🔊</button>
          </div>
          <div class="item-chinese">${item.chinese}</div>
          <div class="item-pronunciation">${item.pronunciation}</div>
          <span class="item-category">${item.categoryNameCN}</span>
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
          <span class="category-badge">${item.categoryName}</span>
          <h2>${item.english}</h2>
          <p class="pronunciation">${item.pronunciation}</p>
          <p class="chinese">${item.chinese}</p>
          <div class="example">
            <span class="label">示例:</span>
            <code>${item.example}</code>
          </div>
          <button class="speak-btn-large" onclick="app.speak('${item.english.replace(/'/g, "\\'")}')">
            <span>🔊</span> 朗读
          </button>
        </div>
      `;
      
      modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
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
        <div class="item-card" data-id="${item.id}">
          <div class="item-header">
            <span class="item-english">${item.english}</span>
            <button class="item-speak" data-id="${item.id}">🔊</button>
          </div>
          <div class="item-chinese">${item.chinese}</div>
          <div class="item-pronunciation">${item.pronunciation}</div>
          <span class="item-category">${item.categoryNameCN}</span>
          <button class="remove-favorite" data-id="${item.id}">❌</button>
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
          this.saveFavorites();
          this.saveLearned();
          this.updateProgressView();
          this.showToast('已重置所有进度');
        }
      });
    }

    updateProgressView() {
      document.getElementById('total-learned').textContent = this.learned.length;
      document.getElementById('total-favorites').textContent = this.favorites.length;
      document.getElementById('streak-days').textContent = this.streak;
      
      const completionRate = Math.round((this.learned.length / this.allItems.length) * 100);
      document.getElementById('completion-rate').textContent = `${completionRate}%`;

      const categoryBars = document.getElementById('category-bars');
      categoryBars.innerHTML = this.data.categories.map(cat => {
        const catItems = cat.items.map(i => i.id);
        const learnedInCategory = this.learned.filter(id => catItems.includes(id)).length;
        const progress = Math.round((learnedInCategory / cat.items.length) * 100);
        
        return `
          <div class="category-bar">
            <div class="category-bar-header">
              <span class="category-bar-name">${cat.nameCN}</span>
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

# AGENTS.md

Agent instructions for the Computer English Learning project.

## Project Overview

A pure frontend PWA for learning computer English vocabulary. No build tools, frameworks, or package managers.

**Tech Stack**: HTML5, CSS3, Vanilla JavaScript (ES6+), Web Speech API, LocalStorage, Service Worker

## Build/Lint/Test Commands

```bash
# Serve locally (any static server)
python -m http.server 8000
# or simply open index.html in a browser
```

**Tests**: `node scripts/validate-data.js` (data + asset integrity) and `node scripts/test-srs.js` (SRS unit tests). CI also runs `node --check` on all JS files.

## Project Structure

```
├── index.html          # Main HTML (single-page app)
├── css/style.css       # Styles (CSS custom properties)
├── js/app.js           # Core logic
├── data/content.js     # Learning content data
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker
└── README.md
```

## Code Style Guidelines

### JavaScript

**Module Pattern**: IIFE encapsulation:
```javascript
(function() {
  const STORAGE_KEYS = { ... };
  class MyApp { ... }
  window.app = new MyApp();
})();
```

**ES6+ Features**: `class`, arrow functions, template literals, destructuring, spread, `const`/`let`, optional chaining, array methods (`map`, `filter`, `find`, `forEach`)

**Naming Conventions**:
- Classes: PascalCase (`ComputerEnglishApp`)
- Methods: camelCase (`loadCard`, `updateStreak`)
- Constants: UPPER_SNAKE_CASE (`STORAGE_KEYS`)
- DOM IDs: kebab-case (`learn-view`, `card-english`)
- Data attributes: `data-view`, `data-category`, `data-id`

**LocalStorage Pattern**:
```javascript
loadFavorites() {
  try {
    const stored = localStorage.getItem(KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) { return []; }
}

saveFavorites() {
  localStorage.setItem(KEY, JSON.stringify(this.favorites));
}
```

**Error Handling**: Wrap JSON.parse in try-catch; check API availability before use; use early returns for guard clauses

### CSS

**CSS Custom Properties**:
```css
:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --background: #f8fafc;
  --surface: #ffffff;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --border: #e2e8f0;
  --radius: 0.5rem;
}
```

**Naming**: Semantic (`.header`, `.card-front`), state-based (`.active`, `.flipped`), utility-like (`.nav-btn`)

**Responsive**: `@media (max-width: 768px)` for mobile

**Animations**: Use `@keyframes` with fade/slide transitions

### HTML

- `lang="zh-CN"` on `<html>`
- View sections with `.view` class, `.active` for visible
- **Script order**: `content.js` before `app.js`

### Data Structure (content.js)

```javascript
const computerEnglishData = {
  categories: [{
    id: "terminal-commands",    // kebab-case
    name: "Terminal Commands",
    nameCN: "终端命令",
    items: [{
      id: "t001",               // Unique ID with prefix
      english: "cd",
      chinese: "切换目录",
      pronunciation: "/siː diː/",
      example: "cd /home/user",
      category: "navigation",
      // Optional "programmer context" fields — see CONTRIBUTING.md
      imagery: "一条走廊，你只能沿着它走到某个房间。",
      scenarios: [{ name: "场景名", text: "这个场景下它指什么" }],
      codeContext: "cd /home/user",
      wordFamily: ["pwd", "ls"]
    }]
  }]
};
```

## Key Patterns

### Adding Features
- **New view**: Add `<section class="view">` in HTML, nav button with `data-view`
- **New data**: Add to `computerEnglishData.categories` in `content.js`

### Programmer-context insights
- `hasInsight(item)` checks the optional `imagery` / `scenarios` fields
- `applyInsightFilter(items)` implements the shared "意象精选" toggle (`this.insightOnly`) in both learn and browse views
- `syncInsightPanel()` reveals `#insight-panel` only when a card is flipped in card mode
- `lookupErrorText(raw)` tokenizes pasted errors (including camelCase identifiers) and ranks terms in the browse grid

### State Management
- Class instance properties: `this.favorites`, `this.learned`, `this.insightOnly`
- Persist to LocalStorage with JSON
- No external state libraries

### Web Speech API
```javascript
speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.9;
  this.synth.speak(utterance);
}
```

### Service Worker Updates
When changing cached files, increment `CACHE_NAME` in `sw.js`:
```javascript
const CACHE_NAME = 'computer-english-v2';
```

## Constraints

- **No frameworks** - Vanilla JavaScript only
- **No build step** - Code runs directly in browsers
- **No npm/bower** - No package management
- **No TypeScript** - Pure JavaScript
- **PWA required** - Maintain Service Worker for offline
- **Browser support** - Modern evergreen browsers (Chrome, Firefox, Safari, Edge)

## Internationalization

- UI is bilingual (Chinese primary, English terms)
- User-facing text in Chinese
- Learning content has both languages

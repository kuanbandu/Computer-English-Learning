/**
 * Spaced Repetition System (SM-2 algorithm).
 *
 * Each item keeps:
 *   ef          ease factor (>= 1.6), default 2.7
 *   interval    days until next review
 *   reps        consecutive successful reviews (>= 0)
 *   due         UTC midnight ms when this card becomes due
 *   lapses      total times the user forgot (q < 3)
 *
 * Rating scale used here is the simplified 3-button SM-2:
 *   Hard  -> q = 3  (recall was effortful; small ef penalty, short interval)
 *   Good  -> q = 4  (recalled correctly with effort; normal progression)
 *   Easy  -> q = 5  (recalled instantly; ef boost, longer interval)
 *
 * Rating "Forgot" (q < 3) is also handled: reset reps, interval becomes 1 day,
 * ef takes a bigger hit, and the card is reinserted into today's queue.
 *
 * Reference: Wozniak, P. A. (1990). Optimization of repetition spacing
 * in the practice of learning. Acta Neurobiologiae Experimentalis 50.
 */
(function (global) {
  'use strict';

  const DAY_MS = 24 * 60 * 60 * 1000;
  const DEFAULT_EF = 2.7;
  const MIN_EF = 1.6;

  function todayKey(now) {
    const d = now || new Date();
    return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  }

  function newCardState(now) {
    return {
      ef: DEFAULT_EF,
      interval: 0,
      reps: 0,
      lapses: 0,
      due: todayKey(now),
      lastReview: 0
    };
  }

  /**
   * Apply one review to a card state.
   * @param {object} state  current SRS state (or undefined -> new card)
   * @param {number} q      rating 1..5 (use RATING constants)
   * @param {Date}   now      optional; defaults to new Date()
   * @returns {object} new state
   */
  function review(state, q, now) {
    const s = state ? Object.assign({}, state) : newCardState(now);
    const nowDate = now || new Date();
    const nowKey = todayKey(nowDate);

    if (q < 3) {
      // Lapse: re-show this card soon and again later today.
      s.lapses = (s.lapses || 0) + 1;
      s.reps = 0;
      s.interval = 0; // will be re-queued today
      s.ef = Math.max(MIN_EF, s.ef - 0.20);
      // Show again in 10 minutes for in-session re-queue; due stays today
      // for next-day scheduling.
      s.due = nowKey;
    } else {
      s.reps = (s.reps || 0) + 1;
      // SM-2 ef formula adapted for our 3-5 scale.
      s.ef = Math.max(MIN_EF, s.ef + (0.10 - (5 - q) * (0.08 + (5 - q) * 0.02)));
      if (s.reps === 1) {
        s.interval = 1;
      } else if (s.reps === 2) {
        s.interval = 6;
      } else {
        s.interval = Math.max(1, Math.round(s.interval * s.ef));
      }
      // For Hard we cut it shorter, for Easy we add a 1.3x bonus.
      if (q === 3) s.interval = Math.max(1, Math.round(s.interval * 0.8));
      if (q === 5) s.interval = Math.max(1, Math.round(s.interval * 1.3));
      s.due = nowKey + s.interval * DAY_MS;
    }

    s.lastReview = nowKey;
    return s;
  }

  /** Summary stats for a map of cardId -> SRS state. */
  function summarize(map, now) {
    const nowKey = todayKey(now);
    let due = 0;
    let newCards = 0;
    let learning = 0;
    let mastered = 0;
    let lapsed = 0;
    Object.keys(map).forEach(function (id) {
      const s = map[id];
      if (!s) { newCards++; return; }
      if (s.reps === 0 && s.due <= nowKey) { newCards++; return; }
      if (s.due <= nowKey) { due++; return; }
      if (s.reps > 0 && s.interval >= 21) { mastered++; return; }
      learning++;
      if ((s.lapses || 0) > 0) lapsed++;
    });
    return { due: due, newCards: newCards, learning: learning, mastered: mastered, lapsed: lapsed };
  }

  /**
   * Sort a list of items so that due cards come first, then new cards,
   * then future-due cards in due-date ascending order.
   */
  function prioritize(itemIds, map, now) {
    const nowKey = todayKey(now);
    const score = function (id) {
      const s = map[id];
      if (!s) return 0;          // new: first
      if (s.due <= nowKey) return 1; // due: second
      return 2 + s.due / 1e13;   // future: order by due
    };
    return itemIds.slice().sort(function (a, b) {
      return score(a) - score(b);
    });
  }

  // Public constants for callers.
  const RATING = Object.freeze({
    FORGOT: 2,
    HARD: 3,
    GOOD: 4,
    EASY: 5
  });

  global.SRS = {
    review: review,
    summarize: summarize,
    prioritize: prioritize,
    newCardState: newCardState,
    todayKey: todayKey,
    RATING: RATING,
    DAY_MS: DAY_MS,
    DEFAULT_EF: DEFAULT_EF,
    MIN_EF: MIN_EF
  };
})(window);
/*
 * action types
 */

export const ADD_FOCUS_WORD = 'ADD_FOCUS_WORD';
export const CLEAR_FOCUS_WORD = 'CLEAR_FOCUS_WORDS';

/*
 * action creators
 */

export function addFocusWord(word_id) {
  return { type: ADD_FOCUS_WORD, word_id };
}

export function clearFocusWords() {
  return { type: CLEAR_FOCUS_WORD };
}


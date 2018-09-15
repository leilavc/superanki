/*
 * action types
 */

export const ADD_FOCUS_WORD = 'ADD_FOCUS_WORD';
export const CLEAR_FOCUS_WORD = 'CLEAR_FOCUS_WORDS';

export const SET_EDIT = 'SET_EDIT';
export const SET_MAIN = 'SET_MAIN';
export const SET_STUDY = 'SET_STUDY';

export const SET_SENTENCE = 'SET_SENTENCE';
export const CLEAR_SENTENCE = 'CLEAR_SENTENCE';

/*
 * action creators
 */

export function addFocusWord(word_id) {
  return { type: ADD_FOCUS_WORD, word_id };
}

export function clearFocusWords() {
  return { type: CLEAR_FOCUS_WORD };
}

export function setSentence(tokenized) {
  return { type: SET_SENTENCE, tokenized };
}

export function clearSentence() {
  return { type: CLEAR_SENTENCE };
}

export function setEdit() {
  return { type: SET_EDIT };
}

export function setStudy() {
  return { type: SET_STUDY };
}

export function setMain() {
  return { type: SET_MAIN };
}

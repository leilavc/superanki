const focusWords = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FOCUS_WORD':
    return [...state, action.word_id];
  case 'CLEAR_FOCUS_WORD':
    return [];
  default:
    return state;
  }
}

export default focusWords;


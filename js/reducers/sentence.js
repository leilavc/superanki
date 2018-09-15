const sentence = (state = [], action) => {
  switch (action.type) {
  case 'SET_SENTENCE':
    return action.tokenized;
  case 'CLEAR_SENTENCE':
    return [];
  default:
    return state;
  }
}

export default sentence;



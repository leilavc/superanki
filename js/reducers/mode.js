const mode = (state = 'main', action) => {
  switch (action.type) {
  case 'SET_EDIT':
    return 'edit';
  case 'SET_MAIN':
    return 'main';
  case 'SET_STUDY':
    return 'study';
  default:
    return state;
  }
}

export default mode;

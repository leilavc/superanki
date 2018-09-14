import { combineReducers } from 'redux';
import focusWords from './focusWords';

const wordApp = combineReducers({
  focusWords
});

export default wordApp;

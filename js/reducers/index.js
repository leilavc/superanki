import { combineReducers } from 'redux';
import focusWords from './focusWords';
import mode from './mode';
import sentence from './sentence';

const wordApp = combineReducers({
  focusWords,
  mode,
  sentence
});

export default wordApp;

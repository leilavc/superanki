import Hello from './Hello';
import React from 'react';
import { render } from 'react-dom';
import SentenceInput from './components/SentenceInput.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import wordApp from './reducers';

const store = createStore(
  wordApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

render(
  (<Provider store={store}>
     <SentenceInput />
   </Provider>)
  , document.getElementById('reactEntry')
)



import Hello from './Hello';
import React from 'react';
import { render } from 'react-dom';
import SentenceInput from './components/SentenceInput.js';
import Word from './components/Word.js';

render(
  (<div>
   <SentenceInput />
   </div>)
  , document.getElementById('reactEntry')
)



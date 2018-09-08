import Hello from './Hello';
import React from 'react';
import { render } from 'react-dom';
import SentenceInput from './components/SentenceInput.js';
import Word from './components/Word.js';

render(
  (<div>
   <SentenceInput />
   <Word word_id="5b92811db74e8eb4d6454866" />
   </div>)
  , document.getElementById('reactEntry')
)



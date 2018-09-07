import Hello from './Hello';
import React from 'react';
import { render } from 'react-dom';
import SentenceInput from './components/SentenceInput.js';

render(
  (<div>
   <Hello />
   <SentenceInput />
   </div>)
  , document.getElementById('reactEntry')
)



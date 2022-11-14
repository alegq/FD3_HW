import React from 'react';
import ReactDOM from 'react-dom';

import BR2JSX from './components/BR2JSX';

let text="первый<br>второй<br/>третий<br />последний";
//console.log(text.split(/(<br>)|(<br\/>)|(<br \/>)/))
//console.log(text.split((/<br ?\/?>/)));
let color = 'red'

ReactDOM.render(
  <BR2JSX
      text={text}
      color={color}
  />
  , document.getElementById('container')
);


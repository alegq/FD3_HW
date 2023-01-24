import React from 'react';
import ReactDOM from 'react-dom';

import Filter from './components/Filter';

var words=[ 'california', 'everything', 'aboveboard',
            'washington', 'basketball', 'weathering',
            'characters', 'literature', 'contraband',
            'appreciate'];

ReactDOM.render(
  <Filter fullWordsList={words} />
  , document.getElementById('container') 
);


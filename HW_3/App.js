import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './my_components/Shop';

let questionText='Список товаров';
let ProductArr=require('./answers.json');
//let defaultFreeAnswerText="???";

ReactDOM.render(
  React.createElement(Shop,{heading:questionText, product:ProductArr,
    //deffreeanswertext: defaultFreeAnswerText,
    //startWorkMode:1
  }),
  document.getElementById('container') 
);


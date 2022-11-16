import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/Shop';

let questionText='Список товаров';
let productArr=require('./answers.json');

ReactDOM.render(
    <Shop
        heading={questionText}
        product={productArr}
    />
    ,document.getElementById('container')
);


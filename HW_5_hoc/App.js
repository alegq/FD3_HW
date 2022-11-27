﻿import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';
import DoubleButton from './components/DoubleButton';

import { withRainbowFrame } from './components/withRainbowFrame';


let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let FramedDoubleButton=withRainbowFrame(colors)(DoubleButton);
ReactDOM.render(
      // <RainbowFrame colors={colors}>
      //   Hello!
      // </RainbowFrame>,
    <div>
        <DoubleButton caption1={'однажды'} caption2={'пору'} cbPressed={num => alert(num)}>
          в студеную зимнюю
        </DoubleButton>

        <br/>

        <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={ num => alert(num) }>
          вышел, был сильный
        </FramedDoubleButton>
    </div>
      , document.getElementById('container')
  );



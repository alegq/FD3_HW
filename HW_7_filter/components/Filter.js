import React, { useState } from 'react';

import Controls from './Controls';
import List from './List'

import "./Filter.css";

export default props => {

  const [age, setAge] = useState(25);

  return (
    <div>
        <Controls/>
        <List/>
    </div>
  );
};

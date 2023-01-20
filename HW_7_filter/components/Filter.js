import React, { useState } from 'react';

import "./Filter.css";

export default props => {

  const [age, setAge] = useState(25);

  return (
    <div>
      Возраст: {age}<br/>
      <button onClick={ () => setAge(16) }>установить 16</button>
      <button onClick={ () => setAge(prevAge => prevAge+1) }>увеличить н 1</button>
    </div>
  );
};

import React, { useState } from 'react';

import "./Filter.css";

export default props => {

    const [age, setAge] = useState(25);

    return (
        <div>
            <input type="checkbox"/>
            <input type="text"/>
            <button onClick={ () => setAge(prevAge => prevAge+1) }>сброс</button>
        </div>
    );
};
import React, { useState, useEffect } from 'react';

import "./Filter.css";

export default ({sort,cbSetSort,filter,cbSetFilter}) => {

    return (
        <div>
            <input type="checkbox" checked={sort} onClick={event => cbSetSort(event.target.checked)}/>
            <input type="text" value={filter} onChange={event => cbSetFilter(event.target.value)}/>
            <button onClick={()=>{cbSetSort(false);cbSetFilter("")}}>сброс</button>
        </div>
    );
};
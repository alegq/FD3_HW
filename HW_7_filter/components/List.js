import React, { useState } from 'react';

import "./Filter.css";

export default ({wordsList}) => {

    return (
        <div className={'contWords'}>
            {wordsList.map((v,i)=><span key={i} className={'word'}>{v}<br/></span>)}
        </div>
    );
};
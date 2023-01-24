import React, { useState } from 'react';

import Controls from './Controls';
import List from './List'

import "./Filter.css";

export default ({fullWordsList}) => {

    const [sort,setSort] = useState(false);
    const [filter,setFilter] = useState("");

    let wordsList = fullWordsList.slice();
    if (filter)
        wordsList = wordsList.filter(word => word.includes(filter));
    if (sort){
        wordsList.sort();
    }

    return (
    <div>
        <Controls
            sort={sort} cbSetSort={setSort}
            filter={filter} cbSetFilter={setFilter}
        />
        <List wordsList={wordsList}/>
    </div>
    );
};

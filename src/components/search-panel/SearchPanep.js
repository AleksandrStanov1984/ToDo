import React from 'react';
import './SearchPanel.css';

const SearchPanel = () => {
    const Search = '  Type to search';

    return (
        <div className="todo-Search search-radius">
            <input className='search-input radius' placeholder={Search}/>
        </div>
    );
};

export default SearchPanel;
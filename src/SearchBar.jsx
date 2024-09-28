import React from 'react';

function SearchBar({search, setSearch}) {

    return (
        <div className="search-bar">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..."/>
        </div>
    )

}

export default SearchBar;

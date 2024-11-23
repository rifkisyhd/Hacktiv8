import React from 'react';

const Search = ({ onSearch }) => {
    return (
        <input 
            className="Movie-search" 
            placeholder="Cari Film Anda..." 
            onChange={({ target }) => onSearch(target.value)} 
        />
    );
};

export default Search;
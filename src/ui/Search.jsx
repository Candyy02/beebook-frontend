import React from 'react';
import '../styles/Search.css';

const Search = () => {
    return (
        <div className="search">
            <form className="search-form">
                <input type="text" className="search-form--input" placeholder="Tên truyện, nội dung..." />
                <button type="submit" className='search-form--button'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    {/* <img className='search-form--button--icon' src="/images/search-icon.png" alt="search-icon" /> */}
                </button>
            </form>
        </div>
    );
};

export default Search;

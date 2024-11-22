import React from 'react';
import './Header.css'; 

const Header = ({ onSearch }) => {
    
    return (
        <header className="header">
            <h1 className="header-title">JalanTokek.</h1>
            <nav className="header-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/tentang">Movies</a></li>
                    <li><a href="/action">Action</a></li>
                    <li><a href="/seris">Series</a></li>
                    <li><a href="/anime">Anime</a></li>
                </ul>
            </nav>
                <input 
                className="Movie-search" 
                placeholder="Cari Film Anda..." 
                onChange={({ target }) => onSearch(target.value)} 
            />
        </header>
    );
};

export default Header;
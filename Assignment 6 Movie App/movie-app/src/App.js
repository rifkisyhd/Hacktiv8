import { useState, useEffect } from 'react';
import './App.css';
import { getMovieList, searchMovie } from './api';
import Header from './components/Header';
import Movies from './components/Movies';

const App = () => {
  const [MovieList, setMovieList] =
  useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setMovieList(result);
    });
  }, []);

  const search = async (query) => {
    const trimmedQuery = query.trim();
    if (trimmedQuery.length > 3) {
        try {
            const response = await searchMovie(trimmedQuery);
            setMovieList(response?.Search || []); // Pastikan untuk mengambil hasil pencarian yang benar
        } catch (error) {
            console.error('Error searching movie:', error);
        }
    } else {
        getMovieList().then(setMovieList);
    }
};

  return (
    <div className="App">
      <Header onSearch={search} />
      <div className="Movie-container">
        <Movies MovieList={MovieList} />
      </div>
    </div>
  );
};

export default App;

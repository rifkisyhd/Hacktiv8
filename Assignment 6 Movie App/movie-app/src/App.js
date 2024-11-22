import { useState, useEffect } from 'react';
import './App.css';
import { getMovieList, searchMovie } from './api';
import Header from './components/Header';
import Movies from './components/Movies';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (query) => {
    const trimmedQuery = query.trim();
    if (trimmedQuery.length > 3) {
      try {
        const response = await searchMovie(trimmedQuery);
        setPopularMovies(response?.results);
      } catch (error) {
        console.error('Error searching movie:', error);
      }
    } else {
      getMovieList().then(setPopularMovies);
    }
  };

  return (
    <div className="App">
      <Header onSearch={search} />
      <div className="Movie-container">
        <Movies popularMovies={popularMovies} />
      </div>
    </div>
  );
};

export default App;

import { useState, useEffect } from 'react';
import './App.css';
import { getMovieList, searchMovie } from "./api";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

 useEffect(() => {
  getMovieList().then((result) => {
setPopularMovies(result)
  })
 }, [])
    
   
const PopularMovieList = () => {
  if (!popularMovies || !Array.isArray(popularMovies)) return null;
  return popularMovies.map((movie, i) => (
    <div className="Movie-wrapper" key={i}>
      <div className="Movie-title">{movie.title}</div>
      <img className="Movie-image" src={`${process.env.REACT_APP_IMAGE_BASE_URL}${movie.poster_path}`} alt=""/>
      <div className="Movie-date">{movie.release_date}</div>
      <div className="Movie-rate">{movie.vote_average}</div>
    </div>
  ));
}

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
      {/* <header className="App-header">

        </header> */}
        <h1>TOKEK FILM</h1>
          <input className="Movie-search" placeholder="Cari Film Anda..." 
            onChange={({target}) => search(target.value)} />
        <div className="Movie-container">
          {/* <div>{PopularMovieList()}</div> */}
          < PopularMovieList />
        </div>
    </div>
  );
}

export default App;


import React from 'react';

const Movies = ({ popularMovies }) => {
  if (!popularMovies || !Array.isArray(popularMovies)) return null;
  return popularMovies.map((movie, i) => (
    <div className="Movie-wrapper" key={i}>
      <div className="Movie-title">{movie.title}</div>
      <img
        className="Movie-image"
        src={`${process.env.REACT_APP_IMAGE_BASE_URL}${movie.poster_path}`}
        alt=""
      />
      <div className="Movie-date">{movie.release_date}</div>
      <div className="Movie-rate">{movie.vote_average}</div>
    </div>
  ));
};

export default Movies;

import React from 'react';

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="#FFD43B"
    className="bi bi-star"
    viewBox="0 0 16 16"
  >
    <path d="M2.866 14.85c-.06.36.287.644.634.494l4.5-2.5 4.5 2.5c.347.15.694-.134.634-.494l-.857-5.002 3.64-3.14c.295-.245.143-.736-.243-.736H9.75L8 0 6.25 4.468H.643c-.386 0-.538.49-.243.736l3.64 3.14-.857 5.002z" />
  </svg>
);

const Movies = ({ MovieList }) => {
  if (!MovieList || !Array.isArray(MovieList)) return null;

console.log(MovieList);

  
  return MovieList.map((movie, i) => (
    <div className="Movie-list" key={i}>
      <img
        className="Movie-image"
        src={movie.Poster}
        alt={movie.Title}
      />
      <div className="Movie-info">
        <div className="Movie-title">{movie.Title}</div>
        <div className="Movie-year">{movie.Year}</div>
        {/* <div className="Movie-rate">
         <StarIcon /> {movie.imdbRating}
        </div> */}
      </div>
    </div>
  ));
};

export default Movies;
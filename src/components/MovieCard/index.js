import React from 'react';
import './index.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} className="movie-card-image" alt="Random Dog" />
      <h2 className="movie-card-title">{movie.title}</h2>
      <p className="movie-card-author">{movie.author}</p>
      <p className="movie-card-date">{movie.publicationDate}</p>
    </div>
  );
};

export default MovieCard;

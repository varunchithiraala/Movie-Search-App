import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import { fetchMovies, fetchRandomDogImage } from './api';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    setNotFound(false);
    setMovies([]);
    try {
      const movieResults = await fetchMovies(query);
      const filteredResults = movieResults.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      if (filteredResults.length === 0) {
        setNotFound(true);
      } else {
        const moviesWithImages = await Promise.all(filteredResults.map(async (movie) => ({
          ...movie,
          image: await fetchRandomDogImage()
        })));
        setMovies(moviesWithImages);
      }
    } catch (err) {
      setError('Failed to fetch movie data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Movie Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {error && <p className="error">{error}</p>}
      {notFound && (
        <div className="not-found-container">
          <h1 className="not-found-heading">404</h1>
          <p className="not-found-text">Oops! Movie is not found.</p>
          <p className="not-found-content">Search for another movie.</p>
        </div>
      )}
      <div className="movie-list">
        {!loading && !notFound && movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;

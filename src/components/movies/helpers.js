import movieTrailer from 'movie-trailer';
import { useState } from 'react';

const [movies, setMovies] = useState([]);

export const handleMovieUrl = (movie) => {
    setTrailerUrl();
    trailerUrl
      ? setTrailerUrl('')
      : movieTrailer(movie.title || movie.name || movie.original_name | '')
          .then((url) => {
            setTrailerUrl(url);
          })
          .catch((error) => {
            return <Error error={error} />;
          });
  };
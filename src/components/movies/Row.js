import movieTrailer from 'movie-trailer';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { getMovies, imageBaseUrl } from '../../api';
import Error from '../common/Error';
import Loading from '../common/Loading';

export default function Row({ name, title, path }) {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const size = 'w200/';

  const fetchMovies = async (path) => {
    setIsLoading(true);
    try {
      await getMovies(path).then((res) => {
        setMovies(res.results);
        setIsLoading(false);
      });
    } catch (error) {
      return <Error error={error} />;
    }
  };
  useEffect(() => {
    fetchMovies(path);
  }, [path]);

  const handleMovieUrl = (movie) => {
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      <div className="cards">
        {movies?.map((movie, i) => {
          return (
            <img
              className="poster"
              key={i}
              src={`${imageBaseUrl}${size}${movie.poster_path}`}
              alt={movie.name}
              onClick={() => handleMovieUrl(movie)}
            />
          );
        })}
      </div>
      {trailerUrl && <ReactPlayer url={trailerUrl} />}
    </div>
  );
}

import { useEffect, useState } from 'react';
import { getMovies } from '../../api';

const imageBaseUrl = 'https://image.tmdb.org/t/p/';
const size = 'w200/';

export default function Row({ name, title, path }) {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async (path) => {
    try {
      const data = await getMovies(path).then((res) => {
        setMovies(res.results);
      });
    } catch (error) {
      console.log('fetchMovies' + error);
    }
  };
  useEffect(() => {
    fetchMovies(path);
  }, [path]);

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
            />
          );
        })}
      </div>
    </div>
  );
}

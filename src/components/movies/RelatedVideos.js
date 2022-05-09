import React, { useEffect, useState } from 'react';
import { getSimilarMovies, imageBaseUrl } from '../../api';
import Error from '../common/Error';
import Loading from '../common/Loading';

export default function RelatedVideos({ id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const size = 'w300/';

  const fetchMovies = async (id) => {
    setIsLoading(true);
    try {
      setIsLoading(false);
      await getSimilarMovies(id).then((res) => {
        setMovies(res.results);
      });
    } catch (error) {
      return <Error error={error} />;
    }
  };
  useEffect(() => {
    fetchMovies(id);
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  console.log(movies);

  return (
    <div className="container">
      <h2 className="title">More Like This</h2>
      <div className="d-flex">
        {movies?.map((movie, i) => {
          return (
            <img
              className="more"
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

import React, { useEffect, useState } from 'react';
import { getSimilarMovies } from '../../api';
import Error from '../common/Error';
import Loading from '../common/Loading';

export default function RelatedVideos({ id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (id) => {
    setIsLoading(true);
    try {
      setIsLoading(false);
      await getSimilarMovies(id).then((res) => {
        setMovies(res.results);
        console.log(res.movies);
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
    <div style={{ color: 'white', background: 'black', width: '10rem' }}>
      <h2>show me more</h2>
    </div>
  );
}

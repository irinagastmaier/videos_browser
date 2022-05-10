import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player';
import categories, { getMovies, imageBaseUrl } from '../../api';
import Error from '../common/Error';

export default function Banner() {
  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState('');
  const size = 'w500/';
  const title = movie?.title || movie?.name || movie?.original_name;

  const fetchRandomMovie = async (path) => {
    try {
      await getMovies(
        categories.find((category) => category.name === 'trending').path,
      ).then((res) => {
        const random = Math.floor(Math.random() * res.results.length);
        setMovie(res?.results[random]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

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

  return (
    <>
      <Stack className="container" zIndex={1} m={2} p={0} w="100%">
        <img
          className="poster h"
          src={`${imageBaseUrl}${size}${movie.poster_path}`}
          alt={movie.name}
        />
      </Stack>
      <Flex justify={'left'} zIndex={0} w={['25rem', '30rem', '50%']}>
        <Box
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          bg="blackAlpha.800"
          pt={4}
          pl={4}
          pr={4}
          alignItems={'center'}
          ml={['0.5rem', 20, 20]}
          height={'auto'}
          maxH={['15rem', '13rem', '13rem']}
          mt={-60}
        >
          <Text
            fontSize={['1rem', '0.85rem', '0.95rem']}
            color="#79cadc"
            mb={2}
          >
            {title}{' '}
          </Text>
          <Button
            colorScheme="gray"
            ml={4}
            mb={2}
            variant="ghost"
            color="blue.300"
            fontSize={'0.85rem'}
            onClick={() => handleMovieUrl(movie)}
          >
            Play
          </Button>

          <Text fontSize={['xs', '0.75rem', '0.75rem']} color="white">
            {movie.overview}
          </Text>
        </Box>
      </Flex>
      {trailerUrl && <ReactPlayer url={trailerUrl} />}
    </>
  );
}

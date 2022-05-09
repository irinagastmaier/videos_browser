import { Box, Button, Flex } from '@chakra-ui/react';
import movieTrailer from 'movie-trailer';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { getMovies, imageBaseUrl } from '../../api';
import AddComment from '../comments/AddComment';
import Error from '../common/Error';
import Loading from '../common/Loading';
import RelatedVideos from './RelatedVideos';

export default function Row({ name, title, path }) {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [showAddComment, setShowAddComment] = useState(false);
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

  const handleMovieUrl = (movie, id) => {
    setTrailerUrl();
    setId(JSON.stringify(id).slice(6).replace('}', ''));
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
              onClick={(e) => {
                e.preventDefault();
                handleMovieUrl(movie, { id: movie.id });
              }}
            />
          );
        })}
      </div>
      {trailerUrl && (
        <Flex width="100%" direction={'row'} wrap={'wrap'}>
          <Box
            width="100%"
            maxW={'640px'}
            minW={'300px'}
            pt="2rem"
            position="relative"
          >
            <ReactPlayer
              url={trailerUrl}
              muted={true}
              controls={false}
              width="100%"
              height="100%"
              className="react-player"
            />
          </Box>
          <Box maxW={'640px'} minW={'150px'} alignSelf={'flex-end'}>
            <Button
              mt={'2rem'}
              bg="#79cadc"
              colorScheme="blue"
              color="white"
              onClick={() => setShowAddComment(true)}
            >
              Leave a comment
            </Button>
            {showAddComment && <AddComment id={id} />}
          </Box>
          <Box width={'50%'} maxW={'640px'} minW={'300px'}>
            <RelatedVideos id={id} />
          </Box>
        </Flex>
      )}
    </div>
  );
}

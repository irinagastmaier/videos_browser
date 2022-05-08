import axios from 'axios';

const categories = [
  {
    name: 'trending',
    title: 'Trending Now',
    path: `/trending/all/week?${process.env.REACT_APP_API_KEY}`,
  },
  {
    name: 'topRated',
    title: 'Top Rated',
    path: `/movie/top_rated?${process.env.REACT_APP_API_KEY}`,
  },
  {
    name: 'comedy',
    title: 'Comedy',
    path: `/discover/tv?${process.env.REACT_APP_API_KEY}&with_genres=35`,
  },
  {
    name: 'drama',
    title: 'Drama',
    path: `/discover/tv?${process.env.REACT_APP_API_KEY}&with_genres=18`,
  },
  {
    name: 'action',
    title: 'Action',
    path: `/discover/tv?${process.env.REACT_APP_API_KEY}&with_genres=28`,
  },
  {
    name: 'animation',
    title: 'Animation',
    path: `/discover/tv?${process.env.REACT_APP_API_KEY}&with_genres=16`,
  },
  {
    name: 'crime',
    title: 'Crime',
    path: `/discover/tv?${process.env.REACT_APP_API_KEY}&with_genres=80`,
  },
];

const similarMovies = {
  name: 'Similar Movies',
  title: 'More Like This',
  path: `/movie/${id}/similar?${process.env.REACT_APP_API_KEY}`,
};

export const getMovies = async (path) => {
  const url = `${process.env.REACT_APP_API_BASE_URL}${path}`;
  try {
    const res = await axios.get(url);
    console.log(res.data);
  } catch (error) {
    console.log(error + ':getMovies error');
  }
};

export const getSimilarMovies = async (id) => {
  const url = `${process.env.REACT_APP_API_BASE_URL} /movie/${id}/similar?${process.env.REACT_APP_API_KEY}`;
  try {
    const res = await axios.get(url);
    console.log(res.data);
  } catch (error) {
    console.log(error + ':getSimilarMovies error');
  }
};

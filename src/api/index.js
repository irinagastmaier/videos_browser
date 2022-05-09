import axios from 'axios';

export const imageBaseUrl = 'https://image.tmdb.org/t/p/';

const categories = [
  {
    name: 'trending',
    title: 'Trending Now',
    path: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`,
  },
  {
    name: 'topRated',
    title: 'Top Rated',
    path: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`,
  },
  {
    name: 'comedy',
    title: 'Comedy',
    path: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  },
  {
    name: 'drama',
    title: 'Drama',
    path: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=18`,
  },
  {
    name: 'animation',
    title: 'Animation',
    path: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`,
  },
  {
    name: 'crime',
    title: 'Crime',
    path: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=80`,
  },
];

export default categories;

// const similarMovies = {
//   name: 'Similar Movies',
//   title: 'More Like This',
//   path: `/movie/${id}/similar?${process.env.REACT_APP_API_KEY}`,
// };

export const getMovies = async (path) => {
  const url = `${process.env.REACT_APP_API_BASE_URL}${path}`;
  try {
    let res = await axios.get(url);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error + ':getMovies error');
  }
};

export const getSimilarMovies = async (id) => {
  const url = `${process.env.REACT_APP_API_BASE_URL}/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`;
  try {
    const res = await axios.get(url);
    if (res.status === 200) {
      return res.data;
      //console.log(res.data)
    }
  } catch (error) {
    console.log(error + ':getSimilarMovies error');
  }
};

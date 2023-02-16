import axios from 'axios';

const API_KEY = 'c887019741c8f0f75dbac80f70612516';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const ENDPOINTS = {
  trending: '/trending/get-trending',
  querySearch: '/search/search-movies',
  movieDetails: '/movies/get-movie-details',
  movieCredits: '/movies/get-movie-credits',
  movieReviews: '/movies/get-movie-reviews',
};

export const getMovies = async () => {
  const res = await axios.get(
    `${ENDPOINTS.trending}?api_key=${API_KEY}&language=en-US&include_adult=false`
  );
  return res.data.results;
};

export const fetchByQuery = async query => {
  const res = await axios.get(
    `${ENDPOINTS.querySearch}?api_key=${API_KEY}&query=${query}&language=en-US`
  );
  return res.data.results;
};

export const fetchMovieDetails = async query => {
  const res = await axios.get(
    `${ENDPOINTS.movieDetails}?api_key=${API_KEY}&language=en-US`
  );
  return res.data.results;
};

export const fetchMovieCredits = async query => {
  const res = await axios.get(
    `${ENDPOINTS.movieCredits}?api_key=${API_KEY}&language=en-US`
  );
  return res.data.results;
};

export const fetchMovieReviews = async query => {
  const res = await axios.get(
    `${ENDPOINTS.movieReviews}?api_key=${API_KEY}&language=en-US`
  );
  return res.data.results;
};

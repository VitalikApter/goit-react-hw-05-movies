import axios from 'axios';
import { toast } from 'react-toastify';

const instanseAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'c887019741c8f0f75dbac80f70612516',
  },
});

export const fetchData = (url, query) => {
  return instanseAxios({
    url,
    params: { query: query },
  })
    .then(({ data, status, statusText }) => ({ data, status, statusText }))
    .catch(err => {
      toast.error(err);
    });
};

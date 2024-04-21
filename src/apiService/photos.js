import axios from 'axios';

const API_KEY = 'YnMzlD3S7ehRdlZSWqklUKpP27CZfFkcf4FPyGctp4g2E0lKuubBtk8u';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);

  return data;
};

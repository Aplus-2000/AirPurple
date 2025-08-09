import axios from 'axios';

const API_KEY = import.meta.env.VITE_IQAIR_API_KEY;


export const getCityAirQuality = (country, state, city) => {
  return axios.get(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${API_KEY}`);
};

export const getNearestCityAirQuality = (lat, lon) => {
  return axios.get(`https://api.airvisual.com/v2/nearest_city?key=${API_KEY}`, {
    params: {
      lat,
      lon,
      key: API_KEY,
    },
  });
};

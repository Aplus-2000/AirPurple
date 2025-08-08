// src/services/airQualityService.js
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config({ path: '/frontend/.env' })
const API_KEY = import.meta.env.VITE_IQAIR_API_KEY;

// http://api.airvisual.com/v2/states?country={{COUNTRY_NAME}}&key={{YOUR_API_KEY}}

export const getCityAirQuality = (country, state, city) => {
  return axios.get(`http://api.airvisual.com/v2/stations?city=${city}&state=${state}&country=${country}&key=${API_KEY}`, {
    // params: {
    //   country,
    //   state,
    //   city,
    //   key: API_KEY,
    // },
  });
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

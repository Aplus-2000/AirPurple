import React from 'react';

const AQCard = ({ pollution, weather, location }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-md mx-auto text-center border border-blue-100">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">{location}</h2>
      <div className="space-y-2 text-gray-700">
        <p><span className="font-medium">AQI (US):</span> {pollution.aqius}</p>
        <p><span className="font-medium">Main Pollutant:</span> {pollution.mainus.toUpperCase()}</p>
        <p><span className="font-medium">Temperature:</span> {weather.tp}°C</p>
        <p><span className="font-medium">Humidity:</span> {weather.hu}%</p>
        <p><span className="font-medium">Wind Speed:</span> {weather.ws} m/s</p>
      </div>
    </div>
  );
};

export default AQCard;

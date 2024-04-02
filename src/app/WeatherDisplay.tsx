import React from 'react';
import { WeatherInfo } from './types';

interface Props {
  weatherInfo: WeatherInfo | null;
}

const WeatherDisplay: React.FC<Props> = ({ weatherInfo }) => {
  if (!weatherInfo) {
    return <p className="text-xl text-center text-gray-800 dark:text-white">Enter a city to get started.</p>;
  }

  if (weatherInfo.error) {
    return <p className="text-xl text-center text-red-600 dark:text-red-400">{weatherInfo.error}</p>;
  }

  // Helper function to convert temperature from Kelvin to Celsius
  const kelvinToCelsius = (kelvin?: number) => kelvin !== undefined ? (kelvin - 273.15).toFixed(2) : "N/A";

  return (
    <div className="text-lg text-gray-800 dark:text-gray-200 space-y-2">
      <p className="text-lg md:text-xl text-center">Temperature: {kelvinToCelsius(weatherInfo.main?.temp)}°C</p>
      <p className="text-lg md:text-xl text-center">Feels Like: {kelvinToCelsius(weatherInfo.main?.feels_like)}°C</p>
      <p className="text-lg md:text-xl text-center">Weather: {weatherInfo.weather && weatherInfo.weather.length > 0 ? `${weatherInfo.weather[0].main} - ${weatherInfo.weather[0].description}` : "N/A"}</p>
      <p className="text-lg md:text-xl text-center">Humidity: {weatherInfo.main?.humidity ? `${weatherInfo.main.humidity}%` : "N/A"}</p>
      <p className="text-lg md:text-xl text-center">Pressure: {weatherInfo.main?.pressure ? `${weatherInfo.main.pressure} hPa` : "N/A"}</p>
      <p className="text-lg md:text-xl text-center">Visibility: {weatherInfo.visibility ? `${weatherInfo.visibility / 1000} km` : "N/A"}</p>
    </div>
  );
};

export default WeatherDisplay;

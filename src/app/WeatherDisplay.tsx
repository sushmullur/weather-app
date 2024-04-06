"use client";
import React, { useState } from 'react';
import { WeatherInfo } from './types';

interface Props {
  weatherInfo: WeatherInfo | null;
}

const WeatherDisplay: React.FC<Props> = ({ weatherInfo }) => {
  const [isMetric, setIsMetric] = useState(true); // State for unit system

  if (!weatherInfo) {
    return <p className="text-xl text-center text-gray-800 dark:text-white">Enter a city to get started.</p>;
  }

  if (weatherInfo.error) {
    return <p className="text-xl text-center text-red-600 dark:text-red-400">{weatherInfo.error}</p>;
  }

  // Temperature conversion to either Celsius or Fahrenheit
  const convertTemperature = (kelvin?: number) =>
    kelvin !== undefined ? (isMetric ? `${(kelvin - 273.15).toFixed(2)}°C` : `${((kelvin - 273.15) * 9/5 + 32).toFixed(2)}°F`) : undefined;

  // Pressure conversion from hPa to inHg for imperial units
  const convertPressure = (hPa?: number) =>
    hPa !== undefined ? (isMetric ? `${hPa.toFixed(2)} hPa` : `${(hPa * 0.02953).toFixed(2)} inHg`) : undefined;

  // Visibility conversion from meters to kilometers or miles
  const convertVisibility = (meters?: number) =>
    meters !== undefined ? (isMetric ? `${(meters / 1000).toFixed(2)} km` : `${(meters / 1609).toFixed(2)} miles`) : undefined;

  return (
    <div className="text-lg text-gray-800 dark:text-gray-200 space-y-2">
      <div className="flex items-center justify-center mb-4">
        <span className="mr-2 text-gray-800 dark:text-gray-200">Metric</span>
        <div className="relative w-14 h-8 bg-gray-300 rounded-full shadow-inner cursor-pointer" onClick={() => setIsMetric(!isMetric)}>
          <input type="checkbox" id="toggle" className="sr-only" checked={isMetric} onChange={() => setIsMetric(!isMetric)} />
          <label htmlFor="toggle" className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full shadow transition-transform duration-300 ease-in-out ${isMetric ? 'translate-x-0' : 'translate-x-full'}`}></label>
          <div className={`absolute inset-0 rounded-full transition-colors duration-300 ease-in-out ${isMetric ? 'bg-gray-300' : 'bg-blue-500'}`}></div>
        </div>
        <span className="ml-2 text-gray-800 dark:text-gray-200">Imperial</span>
      </div>

      {weatherInfo.main?.temp !== undefined && <p>Temperature: {convertTemperature(weatherInfo.main.temp)}</p>}
      {weatherInfo.main?.feels_like !== undefined && <p>Feels Like: {convertTemperature(weatherInfo.main.feels_like)}</p>}
      {weatherInfo.weather?.[0] && <p>Weather: {weatherInfo.weather[0].main} - {weatherInfo.weather[0].description}</p>}
      {weatherInfo.main?.humidity !== undefined && <p>Humidity: {weatherInfo.main.humidity}%</p>}
      {weatherInfo.main?.pressure !== undefined && <p>Pressure: {convertPressure(weatherInfo.main.pressure)}</p>}
      {weatherInfo.visibility !== undefined && <p>Visibility: {convertVisibility(weatherInfo.visibility)}</p>}
    </div>
  );
};

export default WeatherDisplay;

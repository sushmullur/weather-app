"use client";
import React, { useState } from 'react';
import { WeatherInfo } from './types'; // Adjust the path as necessary
import UnitToggle from './UnitToggle';
import { useWeatherConversions } from './hooks/useWeatherConversions'; // Adjust the path as necessary

interface Props {
  weatherInfo: WeatherInfo | null;
}

const WeatherDisplay: React.FC<Props> = ({ weatherInfo }) => {
  const [isMetric, setIsMetric] = useState(true);
  const { convertTemperature, convertPressure, convertVisibility } = useWeatherConversions(isMetric);

  if (!weatherInfo) return <p className="text-xl text-center text-gray-800 dark:text-white">Enter a city to get started.</p>;
  if (weatherInfo.error) return <p className="text-xl text-center text-red-600 dark:text-red-400">{weatherInfo.error}</p>;

  return (
    <div className="text-lg text-gray-800 dark:text-gray-200 space-y-2">
      <UnitToggle isMetric={isMetric} setIsMetric={setIsMetric} />
      {weatherInfo.main?.temp !== undefined && <p>Temperature: {convertTemperature(weatherInfo.main.temp)}</p>}
      {weatherInfo.main?.feels_like !== undefined && <p>Feels Like: {convertTemperature(weatherInfo.main.feels_like)}</p>}
      {weatherInfo.weather?.[0] && <p>Weather: {`${weatherInfo.weather[0].main} - ${weatherInfo.weather[0].description}`}</p>}
      {weatherInfo.main?.humidity !== undefined && <p>Humidity: {`${weatherInfo.main.humidity}%`}</p>}
      {weatherInfo.main?.pressure !== undefined && <p>Pressure: {convertPressure(weatherInfo.main.pressure)}</p>}
      {weatherInfo.visibility !== undefined && <p>Visibility: {convertVisibility(weatherInfo.visibility)}</p>}
    </div>
  );
};

export default WeatherDisplay;

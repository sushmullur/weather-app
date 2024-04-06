"use client";
import React, { useState } from 'react';
import { fetchWeather } from './weatherService';
import WeatherDisplay from './WeatherDisplay';
import SearchForm from './SearchForm';
import { WeatherInfo } from './types';

const Home: React.FC = () => {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);

  const handleCitySubmit = async (city: string) => {
    const data = await fetchWeather(city);
    setWeatherInfo(data);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      {/* Title at the very top */}
      <header className="w-full py-5">
        <h1 className="text-4xl font-bold text-center sm:text-left px-4">Get Your Degree 🌡️</h1>
      </header>

      {/* Centered content */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-8">
        <SearchForm onSubmit={handleCitySubmit} />
        <div className="animate-scaleUp mt-8 p-8 max-w-4xl w-full bg-white/90 backdrop-blur-lg rounded-xl border border-gray-300 shadow-2xl dark:bg-gray-800/90 dark:border-gray-700 space-y-6">
          {weatherInfo ? <WeatherDisplay weatherInfo={weatherInfo} /> : <p>Weather info will be displayed here...</p>}
        </div>
      </div>
    </div>
  );
};

export default Home;

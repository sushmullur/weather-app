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
    <div className="min-h-screen bg-gradient-to-br from-cyan-300 to-blue-900 flex flex-col items-center justify-center text-gray-800 px-4 py-8">
      <div className="animate-scaleUp p-8 max-w-4xl bg-white/90 backdrop-blur-lg rounded-xl border border-gray-300 shadow-2xl dark:bg-gray-800/90 dark:border-gray-700 space-y-6">
        <h1 className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
          Get Your Degree <span>🌡️</span>
        </h1>
        <p className="text-xl mb-8 text-gray-800 dark:text-gray-200 text-center">
          Discover the weather in your city. Enter a city name below and get the current weather conditions in an instant.
        </p>
        <SearchForm onSubmit={handleCitySubmit} />
        <WeatherDisplay weatherInfo={weatherInfo} />
      </div>
    </div>
  );
};

export default Home;

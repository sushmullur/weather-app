import { WeatherInfo } from './types';

const apiUrl = process.env.NEXT_PUBLIC_API_KEY || ""; 

export const fetchWeather = async (city: string): Promise<WeatherInfo> => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: city,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch weather:", error);
    return { error: 'Failed to fetch weather information. Please try again.' };
  }
};

import { WeatherInfo } from './types';

const apiUrl = process.env.NEXT_PUBLIC_API_KEY || "";

export const fetchWeather = async (city: string): Promise<WeatherInfo> => {
  try {
    // Sanitize the city input
    const sanitizedCity = sanitizeCityInput(city);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: sanitizedCity,
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

// Utility function to sanitize city input
function sanitizeCityInput(city: string): string {
  // Trim whitespace
  let sanitized = city.trim();

  // Allow only letters, numbers, spaces, and common punctuation in city names
  sanitized = sanitized.replace(/[^a-zA-Z0-9 ,.'-]/g, '');

  // Check length, adjust to your needs
  if (sanitized.length > 50) {
    sanitized = sanitized.substring(0, 50);
  }

  return sanitized;
}

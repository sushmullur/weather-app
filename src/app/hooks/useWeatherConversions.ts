// hooks/useWeatherConversions.ts
export const useWeatherConversions = (isMetric: boolean) => {
    const convertTemperature = (kelvin?: number): string => 
      kelvin !== undefined ? (isMetric ? `${(kelvin - 273.15).toFixed(2)}°C` : `${((kelvin - 273.15) * 9/5 + 32).toFixed(2)}°F`) : "N/A";
  
    const convertPressure = (hPa?: number): string => 
      hPa !== undefined ? (isMetric ? `${hPa.toFixed(2)} hPa` : `${(hPa * 0.02953).toFixed(2)} inHg`) : "N/A";
  
    const convertVisibility = (meters?: number): string => 
      meters !== undefined ? (isMetric ? `${(meters / 1000).toFixed(2)} km` : `${(meters / 1609).toFixed(2)} miles`) : "N/A";
  
    return { convertTemperature, convertPressure, convertVisibility };
  };
  
export interface WeatherInfo {
    clouds?: {
      all: number;
    };
    dt?: number;
    dt_txt?: string;
    main?: {
      feels_like: number;
      humidity: number;
      pressure: number;
      temp: number;
    };
    weather?: Array<{
      description: string;
      icon: string;
      id: number;
      main: string;
    }>;
    wind?: {
      speed: number;
      deg: number;
    };
    visibility?: number;
    error?: string;
  }
  
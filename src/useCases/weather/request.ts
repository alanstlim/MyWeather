export type UnitsWeather = 'imperial' | 'metric';

export type Coords = {
  lat: number;
  long: number;
};

export type GetWeatherRequest = {
  currentLocation?: Coords;
  anotherLocation?: string;
};

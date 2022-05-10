import { API_URL, API_VERSION } from '@env';

type MethodTypes = 'GET' | 'POST' | 'PUT' | 'DELETE';

const generateEndpointPattern = (URL: string, METHOD: MethodTypes) => ({
  URL,
  METHOD,
});

const baseUrl = `${API_URL}/${API_VERSION}`;

const WEATHER_ENDPOINTS = {
  GET_WEATHER: generateEndpointPattern(`${baseUrl}/weather`, 'GET'),
};

export const ENDPOINTS = {
  WEATHER: WEATHER_ENDPOINTS,
};

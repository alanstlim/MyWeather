import { Storage, StorageKeys, StorageType } from 'repository';

import { AxiosResponse } from 'axios';
import { ENDPOINTS } from 'providers/endpoints';
import { GetWeatherRequest } from './request';
import { GetWeatherResponse } from './response';
import api from 'providers/api';

export const getWeather = async (
  props: GetWeatherRequest
): Promise<AxiosResponse<GetWeatherResponse>> => {
  const unit = await Storage.getItem<StorageType.IUnit>(StorageKeys.UNIT);
  const response = await api.request({
    url: ENDPOINTS.WEATHER.GET_WEATHER.URL,
    method: ENDPOINTS.WEATHER.GET_WEATHER.METHOD,
    params: {
      lat: props?.currentLocation?.lat,
      lon: props?.currentLocation?.long,
      q: props?.anotherLocation,
      units: unit?.unit ?? 'metric',
    },
  });
  return response;
};

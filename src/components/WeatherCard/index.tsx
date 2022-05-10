import * as St from './styles';

import React, { useMemo } from 'react';

import { Typographic } from 'components';
import { UnitsWeather } from 'useCases/weather/request';
import { removeUnitFromTheme } from 'utils/theme';
import { useTheme } from 'styled-components';

type Props = {
  unit: UnitsWeather;
  icon: string;
  address: {
    city: string;
    country: string;
  };
  weather: {
    temperature: number;
    temperatureMax: number;
    temperatureMin: number;
  };
};

const WeatherCard: React.FC<Props> = ({ address, weather, unit = 'metric', icon }) => {
  const theme = useTheme();

  const unitTemperature = useMemo(() => {
    if (unit === 'imperial') return 'F';
    return 'C';
  }, [unit]);

  const formattedTemperature = useMemo(() => {
    return {
      temperature: `${weather.temperature.toFixed(1)}°${unitTemperature}` ?? 'Unkown',
      temperatureMax: `${weather.temperatureMax.toFixed(1)}°${unitTemperature}` ?? 'Unkown',
      temperatureMin: `${weather.temperatureMin.toFixed(1)}°${unitTemperature}` ?? 'Unkown',
    };
  }, [unitTemperature, weather]);

  const urlIcon = useMemo(() => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }, []);

  return (
    <St.Container>
      <St.Content>
        <St.TextContent>
          <Typographic.Description color={theme.colors.secondary[100]} size="medium">
            {address.country}
          </Typographic.Description>
          <Typographic.Title color={theme.colors.secondary[100]} size="large">
            {address.city}
          </Typographic.Title>
        </St.TextContent>
        <St.TextContent>
          <St.Image source={{ uri: urlIcon }} resizeMode="contain" />
        </St.TextContent>
      </St.Content>
      <St.Content>
        <Typographic.Description
          color={theme.colors.secondary[100]}
          size="medium"
          style={{ marginRight: removeUnitFromTheme(theme.spacings.large) }}
        >
          Temperature: {formattedTemperature.temperature}
        </Typographic.Description>
        <St.TextContent>
          <Typographic.Description
            color={theme.colors.secondary[100]}
            size="medium"
            style={{ marginRight: removeUnitFromTheme(theme.spacings.large) }}
          >
            Min: {formattedTemperature.temperatureMin}
          </Typographic.Description>
          <Typographic.Description
            color={theme.colors.secondary[100]}
            size="medium"
            style={{ marginRight: removeUnitFromTheme(theme.spacings.large) }}
          >
            Max: {formattedTemperature.temperatureMax}
          </Typographic.Description>
        </St.TextContent>
      </St.Content>
    </St.Container>
  );
};

export default WeatherCard;

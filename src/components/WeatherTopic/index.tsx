import * as St from './styles';

import React, { useMemo } from 'react';

import { Typographic } from 'components';
import moment from 'moment';
import { useTheme } from 'styled-components';

type Props = {
  title: string;
  icon: string;
  detail?: string | number;
  timestamp?: number;
};

const WeatherTopic: React.FC<Props> = ({ title, icon, detail, timestamp }) => {
  const theme = useTheme();
  const formattedDate = useMemo(() => {
    if (timestamp) return moment(timestamp * 1000).format('DD/MM/YYYY - HH:MM');
    return '';
  }, []);

  const urlIcon = useMemo(() => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }, []);

  return (
    <St.Container>
      <Typographic.Title color={theme.colors.secondary[100]}>{title}</Typographic.Title>
      <St.Image source={{ uri: urlIcon }} resizeMode="contain" />
      {detail ? (
        <Typographic.Description size="medium" color={theme.colors.secondary[100]}>
          {detail}
        </Typographic.Description>
      ) : null}
      {timestamp ? (
        <Typographic.Description
          size="medium"
          style={{ textAlign: 'center', width: '80%' }}
          color={theme.colors.secondary[100]}
        >
          {formattedDate}
        </Typographic.Description>
      ) : null}
    </St.Container>
  );
};

export default WeatherTopic;

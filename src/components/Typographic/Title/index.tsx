import * as St from './styles';

import { StyleProp, TextStyle } from 'react-native';

import React from 'react';

type Props = {
  style?: StyleProp<TextStyle>;
  color?: string;
  size?: 'large' | 'extraLarge';
};

const Title: React.FC<Props> = ({ children, style, color, size = 'large' }) => {
  return (
    <St.Title style={style} color={color} size={size}>
      {children}
    </St.Title>
  );
};

export default Title;

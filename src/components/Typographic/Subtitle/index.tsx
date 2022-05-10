import * as St from './styles';

import { StyleProp, TextStyle } from 'react-native';

import React from 'react';

type Props = {
  style?: StyleProp<TextStyle>;
  color?: string;
  size?: 'medium' | 'large';
};

const Subtitle: React.FC<Props> = ({ children, style, color, size = 'medium' }) => {
  return (
    <St.Subtitle style={style} color={color} size={size}>
      {children}
    </St.Subtitle>
  );
};

export default Subtitle;

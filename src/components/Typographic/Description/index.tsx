import * as St from './styles';

import { StyleProp, TextStyle } from 'react-native';

import React from 'react';

type Props = {
  style?: StyleProp<TextStyle>;
  color?: string;
  size?: 'small' | 'medium';
};

const Description: React.FC<Props> = ({ children, style, color, size = 'small' }) => {
  return (
    <St.Description style={style} color={color} size={size}>
      {children}
    </St.Description>
  );
};

export default Description;

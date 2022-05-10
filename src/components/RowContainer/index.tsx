import * as St from './styles';

import { StyleProp, ViewStyle } from 'react-native';

import React from 'react';

type Props = {
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
};

const RowContainer: React.FC<Props> = ({ style, backgroundColor, children }) => {
  return <St.Content style={[{ backgroundColor }, style]}>{children}</St.Content>;
};

export default RowContainer;

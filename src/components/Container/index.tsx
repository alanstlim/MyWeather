import * as St from './styles';

import React, { useMemo } from 'react';
import { StatusBar, StyleProp, ViewStyle } from 'react-native';

import { useTheme } from 'styled-components';

type Props = {
  style?: StyleProp<ViewStyle>;
  scrollStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  statusBarColor?: string;
  withPadding?: boolean;
  statusBarStyle?: 'dark-content' | 'light-content';
};

const Container: React.FC<Props> = ({
  style,
  scrollStyle,
  backgroundColor,
  statusBarColor,
  statusBarStyle = 'light-content',
  withPadding = true,
  children,
}) => {
  const theme = useTheme();
  const alternativeStatusBarColor = useMemo(() => {
    return statusBarColor ?? theme.colors.primary[600];
  }, [statusBarColor, theme]);
  return (
    <St.Content
      style={[{ backgroundColor }, style]}
      contentContainerStyle={scrollStyle}
      withPadding={withPadding}
    >
      <StatusBar backgroundColor={alternativeStatusBarColor} barStyle={statusBarStyle} />
      {children}
    </St.Content>
  );
};

export default Container;

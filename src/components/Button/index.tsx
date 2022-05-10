import * as St from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { removeUnitFromTheme } from 'utils/theme';
import { useTheme } from 'styled-components';

type Props = {
  disabled?: boolean;
  outlined?: boolean;
  onPress?: () => void;
  label: string;
  icon?: string;
  iconColor?: string;
};

const Button: React.FC<Props> = ({ disabled, outlined, onPress, label, icon, iconColor }) => {
  const theme = useTheme();
  return (
    <St.Button
      disabled={disabled}
      outlined={outlined}
      onPress={onPress}
      style={{ marginVertical: removeUnitFromTheme(theme.spacings.large) }}
    >
      {icon && <Icon name={icon} size={24} color={iconColor ?? theme.colors.secondary[100]} />}
      <St.Text>{label}</St.Text>
    </St.Button>
  );
};

export default Button;

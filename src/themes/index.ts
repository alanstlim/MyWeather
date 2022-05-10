import { RFPercentage } from 'react-native-responsive-fontsize';

const THEMES = {
  colors: {
    primary: {
      100: '#F7F6FC',
      200: '#EFEEF9',
      300: '#DFDCF3',
      400: '#C0B9E7',
      500: '#A097DB',
      600: '#8174CF',
      700: '#6151C3',
    },
    secondary: {
      100: '#F3F3F3',
      200: '#E6E6E7',
      300: '#CECDD0',
      400: '#9C9CA1',
      500: '#6B6A71',
      600: '#393942',
      700: '#080713',
    },
  },
  fontSize: {
    small: `${RFPercentage(2)}px`,
    medium: `${RFPercentage(2.5)}px`,
    large: `${RFPercentage(3)}px`,
    extraLarge: `${RFPercentage(3.5)}px`,
  },
  spacings: {
    small: '4px',
    medium: '8px',
    large: '16px',
    extraLarge: '24px',
  },
};

type Theme = typeof THEMES;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default THEMES;

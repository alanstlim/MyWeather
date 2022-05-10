import Hooks from 'hooks';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from './routes';
import THEMES from './themes';
import { ThemeProvider } from 'styled-components/native';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={THEMES}>
      <NavigationContainer>
        <Hooks>
          <Routes />
        </Hooks>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

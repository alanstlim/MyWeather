import * as St from './styles';

import { Components, Typographic } from 'components';
import { Image, PermissionsAndroid } from 'react-native';
import React, { useCallback, useState } from 'react';

import { ASSETS } from 'assets';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

const Welcome: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const handleNavigation = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' } as never],
    });
  }, []);

  const handlePermission = useCallback(() => {
    setShowModal(false);
    const requestLocationPermission = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        handleNavigation();
      } else {
        setShowModal(true);
      }
    };
    requestLocationPermission();
  }, []);

  return (
    <Components.Container
      backgroundColor={theme.colors.primary[600]}
      withPadding={false}
      scrollStyle={{ justifyContent: 'space-between' }}
    >
      <Components.Modal showModal={showModal} onPress={handlePermission} />
      <St.Wrapper>
        <Image source={ASSETS.IMAGES.WORLD} resizeMode="contain" />
      </St.Wrapper>
      <St.Content>
        <Typographic.Title>Explore the weather arround in the world</Typographic.Title>
        <Typographic.Description>
          Easily check the weather of any city from anywhere in the world.
        </Typographic.Description>
        <Components.Button label="Get Started" onPress={handlePermission} />
        <Typographic.Description>
          Please enable location permission to get more accurate weather information
        </Typographic.Description>
      </St.Content>
    </Components.Container>
  );
};

export default Welcome;

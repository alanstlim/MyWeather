import * as St from './styles';

import { Components, Typographic } from 'components';
import React, { useCallback, useEffect, useState } from 'react';

import { ASSETS } from 'assets';
import { Image } from 'components/WeatherCard/styles';
import Modal from 'react-native-modal';
import { removeUnitFromTheme } from 'utils/theme';
import { useTheme } from 'styled-components';

type Props = {
  showModal: boolean;
  onPress?: () => void;
};

const ModalView: React.FC<Props> = ({ showModal = false, onPress }) => {
  const theme = useTheme();

  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(showModal);
  }, [showModal]);

  const handlePress = useCallback(() => {
    if (onPress) {
      onPress();
    }
    setModalVisible(false);
  }, []);

  return (
    <Modal isVisible={isModalVisible}>
      <St.Container>
        <St.ImageContainer>
          <Image
            source={ASSETS.IMAGES.SUN_WIND}
            resizeMode="contain"
            style={{
              width: 85,
              height: 78,
              marginBottom: removeUnitFromTheme(theme.spacings.medium),
            }}
          />
        </St.ImageContainer>
        <Typographic.Subtitle size="large">Location permission needed</Typographic.Subtitle>
        <Typographic.Description>
          Please enable location permission to get more accurate weather information
        </Typographic.Description>
        <Components.Button label="Allow location" onPress={handlePress} />
      </St.Container>
    </Modal>
  );
};

export default ModalView;

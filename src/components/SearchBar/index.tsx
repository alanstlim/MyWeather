import * as St from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { Typographic } from 'components';
import { useSearch } from 'hooks/useSearch';
import { useTheme } from 'styled-components';

type Props = {
  placeholder?: string;
  icon?: string;
  onPress: () => void;
};

const SearchBar: React.FC<Props> = ({ placeholder, icon = 'map-search', onPress }) => {
  const theme = useTheme();
  const { setValue, value } = useSearch();

  return (
    <St.Content>
      <St.TextInput placeholder={placeholder} onChangeText={setValue} value={value} />
      <St.ButtonContainer>
        <St.Button onPress={onPress}>
          <Icon name={icon} size={18} color={theme.colors.secondary[100]} />
          <Typographic.Description size="medium" color={theme.colors.secondary[100]}>
            Search
          </Typographic.Description>
        </St.Button>
      </St.ButtonContainer>
    </St.Content>
  );
};

export default SearchBar;

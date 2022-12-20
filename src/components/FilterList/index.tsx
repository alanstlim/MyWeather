import * as St from './styles';

import React, { useCallback } from 'react';

import { Typographic } from 'components';
import { removeUnitFromTheme } from 'utils/theme';
import { useSearch } from 'hooks/useSearch';
import { useTheme } from 'styled-components';
import { useHistory } from 'hooks/useHistory';

type Props = {
  onPress: (city: string) => void;
};

const FilterList: React.FC<Props> = ({ onPress }) => {
  const theme = useTheme();
  const { setValue, value } = useSearch();
  const { cities } = useHistory();

  const handlePress = useCallback(
    (city: string) => {
      setValue(city);
      onPress(city);
    },
    [value]
  );

  return (
    <St.CitiesContainer
      horizontal
      contentContainerStyle={{ paddingEnd: removeUnitFromTheme(theme.spacings.large) }}
    >
      {cities?.map((city, index) => (
        <St.FilterButton selected={value === city} onPress={() => handlePress(city)} key={index}>
          <Typographic.Description
            color={value === city ? theme.colors.secondary[100] : theme.colors.secondary[700]}
          >
            {city}
          </Typographic.Description>
        </St.FilterButton>
      ))}
    </St.CitiesContainer>
  );
};

export default FilterList;

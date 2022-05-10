import styled from 'styled-components/native';

export const CitiesContainer = styled.ScrollView`
  flex: 1;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacings.medium};
`;

type Props = {
  selected: boolean;
};

export const FilterButton = styled.TouchableOpacity<Props>`
  height: 30px;
  border-width: 1px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spacings.small};
  border-color: ${({ theme }) => theme.colors.primary[700]};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary[700] : theme.colors.secondary[100]};
`;

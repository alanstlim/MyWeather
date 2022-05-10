import styled from 'styled-components/native';

export const Content = styled.View`
  border-radius: 50px;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary[700]};
`;

export const LocationButton = styled.TouchableOpacity`
  margin: 0 ${({ theme }) => theme.spacings.medium};
`;

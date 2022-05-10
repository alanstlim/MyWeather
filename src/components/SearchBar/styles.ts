import styled from 'styled-components/native';

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextInput = styled.TextInput`
  flex: 7;
  height: 35px;
  border-radius: 8px;
  margin: ${({ theme }) => theme.spacings.medium} 0;
  padding: 0 ${({ theme }) => theme.spacings.large};
  background-color: ${({ theme }) => theme.colors.secondary[200]};
`;

export const ButtonContainer = styled.View`
  flex: 3;
  flex-direction: row;
  margin-left: ${({ theme }) => theme.spacings.large};
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacings.medium};
  background-color: ${({ theme }) => theme.colors.primary[700]};
`;

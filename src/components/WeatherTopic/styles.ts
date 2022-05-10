import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 175px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacings.medium} 0;
  background-color: ${({ theme }) => theme.colors.primary[600]};
  margin: ${({ theme }) => theme.spacings.medium} ${({ theme }) => theme.spacings.large};
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
`;

import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  border-radius: 8px;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacings.large};
  background-color: ${({ theme }) => theme.colors.secondary[100]};
`;

export const ImageContainer = styled.View`
  align-items: center;
  border-radius: 100px;
  justify-content: center;
  margin: ${({ theme }) => theme.spacings.large} 0;
  padding: ${({ theme }) => theme.spacings.medium};
  background-color: ${({ theme }) => theme.colors.primary[700]};
`;

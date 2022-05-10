import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  border-radius: 30px;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacings.medium} 0;
  background-color: ${({ theme }) => theme.colors.primary[700]};
`;

export const TextContent = styled.View`
  align-items: flex-start;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacings.medium} ${({ theme }) => theme.spacings.large};
`;

export const Image = styled.Image`
  width: 60px;
  height: 70px;
`;

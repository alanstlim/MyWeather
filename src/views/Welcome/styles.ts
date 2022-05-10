import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 4;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacings.large};
  padding: ${({ theme }) => theme.spacings.large};
  background-color: ${({ theme }) => theme.colors.primary[100]};
`;

export const Wrapper = styled.View`
  flex: 6;
`;

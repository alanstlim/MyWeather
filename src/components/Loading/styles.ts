import styled from 'styled-components/native';

export const BlurContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  align-content: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blur};
`;

export const Spinner = styled.ActivityIndicator`
  color: ${({ theme }) => theme.colors.primary[100]};
`;

export const TextLoading = styled.Text`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacings.medium};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.secondary[600]};
`;

import styled from 'styled-components/native';

type Props = {
  color?: string;
  size?: 'medium' | 'large';
};

export const Subtitle = styled.Text<Props>`
  font-weight: 500;
  margin: ${({ theme }) => theme.spacings.medium};
  font-size: ${({ theme, size }) =>
    size === 'medium' ? theme.fontSize.medium : theme.fontSize.large};
  color: ${({ color, theme }) => color ?? theme.colors.secondary[700]};
`;

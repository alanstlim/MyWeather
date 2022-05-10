import styled from 'styled-components/native';

type Props = {
  color?: string;
  size?: 'small' | 'medium';
};

export const Description = styled.Text<Props>`
  text-align: center;
  margin: ${({ theme }) => theme.spacings.small};
  font-size: ${({ theme, size }) =>
    size === 'small' ? theme.fontSize.small : theme.fontSize.medium};
  color: ${({ color, theme }) => color ?? theme.colors.secondary[600]};
`;

import styled from 'styled-components/native';

type Props = {
  color?: string;
  size?: 'large' | 'extraLarge';
};

export const Title = styled.Text<Props>`
  font-weight: bold;
  text-align: center;
  font-size: ${({ theme, size }) =>
    size === 'large' ? theme.fontSize.large : theme.fontSize.extraLarge};
  color: ${({ color, theme }) => color ?? theme.colors.secondary[700]};
`;

import styled, { css } from 'styled-components/native';

type Props = {
  disabled?: boolean;
  outlined?: boolean;
};

const ButtonOutlinedStyle = css<Props>`
  border-width: 1px;
  border-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.primary[500] : theme.colors.primary[700]};
`;

const ButtonDefaultStyle = css<Props>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.primary[500] : theme.colors.primary[700]};
`;

export const Button = styled.TouchableOpacity<Props>`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ outlined }) => (outlined ? ButtonOutlinedStyle : ButtonDefaultStyle)}
`;

export const Text = styled.Text<Props>`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme, outlined }) =>
    outlined ? theme.colors.primary[300] : theme.colors.secondary[100]};
`;

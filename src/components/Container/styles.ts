import styled, { css } from 'styled-components/native';

type Props = {
  withPadding?: boolean;
};

export const Content = styled.ScrollView<Props>`
  height: 100%;
  ${({ withPadding }) =>
    withPadding &&
    css`
      padding: ${({ theme }) => theme.spacings.medium} ${({ theme }) => theme.spacings.extraLarge};
    `}
`;

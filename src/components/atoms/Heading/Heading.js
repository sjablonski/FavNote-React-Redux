import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${({ theme }) => css`
    margin: 0;
    font-size: ${theme.fontSize.l};
    font-weight: ${theme.bold};
  `}

  ${({ big, theme }) =>
    big &&
    css`
      font-size: ${theme.fontSize.xl};
    `}

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin}rem;
    `}
`;

export default Heading;

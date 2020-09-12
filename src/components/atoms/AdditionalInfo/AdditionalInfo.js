import styled, { css } from 'styled-components';

const AdditionalInfo = styled.p`
  ${({ theme }) => css`
    margin: 0.2rem 0;
    color: ${theme.grey400};
    font-size: ${theme.fontSize.m};
    font-weight: ${theme.bold};
  `}

  ${({ small, theme }) =>
    small &&
    css`
      color: ${theme.black};
      font-size: ${theme.fontSize.xs};
    `}
`;

export default AdditionalInfo;

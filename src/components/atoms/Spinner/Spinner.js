import styled, { css } from 'styled-components';

const Spinner = styled.div`
  ${({ color, theme }) => css`
    width: 16rem;
    height: 16rem;
    border: 1.6rem solid ${theme.grey200};
    border-radius: 50%;
    border-top: 1.6rem solid ${theme[color] ? theme[color] : color};
    animation: spin 2s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;

export default Spinner;

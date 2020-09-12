import styled, { css } from 'styled-components';

const Input = styled.input`
  ${({ theme }) => css`
    display: block;
    padding: 1.4rem 3.6rem;
    background-color: ${theme.grey100};
    border: none;
    border-radius: 5rem;
    font-size: ${theme.fontSize.s};
    font-family: ${theme.fontFamily};
    font-weight: ${theme.regular};

    &::placeholder {
      color: ${theme.grey300};
      text-transform: uppercase;
    }

    &:focus {
      outline: none;
    }
  `}

  ${({ small, theme }) =>
    small &&
    css`
      padding: 1rem 3.2rem;
      font-size: ${theme.fontSize.xs};

      @media (max-width: 575.98px) {
        font-size: ${theme.fontSize.m};
      }
    `}

    ${({ icon, small, theme }) =>
    icon &&
    css`
      padding-left: ${small ? '4.4rem' : '4.8rem'};
      background-image: url(${icon});
      background-repeat: no-repeat;
      background-position: 1.6rem center;
      background-size: ${small ? theme.fontSize.s : theme.fontSize.m};
    `}
`;

export default Input;

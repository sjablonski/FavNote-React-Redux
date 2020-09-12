import styled, { css } from 'styled-components';
import { darkenBackground } from 'utils/colors';

const ButtonIcon = styled.button`
  ${({ color, icon, theme }) => css`
    display: block;
    background-image: url(${icon});
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50% 50%;
    width: 6.7rem;
    height: 6.7rem;
    border: none;
    border-radius: 2rem;

    &.active {
      background-color: ${theme.white};
    }

    &:hover:not(.active) {
      background-color: ${() => darkenBackground(color ? theme[color] : theme.primary)};
    }

    &:focus {
      outline: none;
    }
  `}

  ${({ round, color, theme }) =>
    round &&
    css`
      position: fixed;
      bottom: 3.4rem;
      right: 4.5rem;
      background-color: ${color ? theme[color] : theme.primary};
      border-radius: 50%;
      background-size: 35% 35%;
      cursor: pointer;
    `}
`;

export default ButtonIcon;

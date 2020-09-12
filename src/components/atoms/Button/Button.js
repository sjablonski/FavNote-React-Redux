import styled, { css } from 'styled-components';
import { setTextColorInvert, darkenBackground } from 'utils/colors';

const Button = styled.button`
  ${({ color, theme }) => {
    const activeColor = theme[color] ? theme[color] : color;

    return css`
      background-color: ${activeColor};
      width: 22rem;
      height: 4.7rem;
      border: 0;
      border-radius: 5rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      font-size: ${theme.fontSize.s};
      text-transform: uppercase;
      color: ${() => setTextColorInvert(activeColor)};
      margin: 2.4rem 2.4rem 0 0;

      &:hover {
        background-color: ${() => darkenBackground(activeColor)};
      }

      &:focus {
        outline: none;
      }

      &:disabled {
        background-color: ${theme.grey100};
        color: ${theme.grey300};
      }
    `;
  }}

  ${({ secondary, color, theme }) => {
    const activeColor = () => {
      if (color) {
        if (theme[color]) {
          return theme[color];
        }
        return color;
      }
      return theme.grey200;
    };

    return (
      secondary &&
      css`
        background-color: ${activeColor()};
        width: 10.5rem;
        height: 3rem;
        font-size: ${theme.fontSize.xxs};
        color: ${() => setTextColorInvert(activeColor())};

        &:hover {
          background-color: ${() => darkenBackground(activeColor())};
        }
      `
    );
  }}
`;

export default Button;

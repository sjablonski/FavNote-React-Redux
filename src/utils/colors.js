import Color from 'color';

export const darkenBackground = (color) => Color(color).darken(0.2);

export const setTextColorInvert = (color) => (Color(color).isDark() ? '#ffffff' : '#000000');

import React from 'react';
import { withContexts } from '@storybook/addon-contexts/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { storybookContext } from 'config';
import store from 'store';
import GlobalStyle from 'themes/GlobalStyle';
import theme from 'themes/mainTheme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <div>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Story />
        </>
      </ThemeProvider>
    </div>
  ),
  withContexts(storybookContext),
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
];

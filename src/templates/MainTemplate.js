import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import PageContext from 'context';
import GlobalStyle from 'themes/GlobalStyle';
import theme from 'themes/mainTheme';

const MainTemplate = ({ children, location }) => (
  <PageContext.Provider value={location.pathname.split('/')[1]}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </PageContext.Provider>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(MainTemplate);

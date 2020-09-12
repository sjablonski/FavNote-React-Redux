import React from 'react';
import PageContext from 'context';

const withPageContext = (Component) => (props) => (
  <PageContext.Consumer>
    {(context) => <Component {...props} pageContext={context} />}
  </PageContext.Consumer>
);

export default withPageContext;

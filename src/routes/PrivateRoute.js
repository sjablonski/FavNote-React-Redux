import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from 'routes';

const PrivateRoute = ({ component: Component, userId, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      userId ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: routes.login,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  userId: PropTypes.string,
};

PrivateRoute.defaultProps = {
  userId: null,
};

const mapStateToProps = ({ userId }) => ({ userId });

export default connect(mapStateToProps)(PrivateRoute);

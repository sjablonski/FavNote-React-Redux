import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import routes from 'routes';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import InputGroup from 'components/molecules/InputGroup';
import AuthTemplate from 'templates/AuthTemplate';
import { auth as authAction } from 'actions/auth';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoginPage = ({ userId, isPendingFetchAuth, auth }) => (
  <AuthTemplate>
    <Formik
      initialValues={{ login: '', password: '' }}
      onSubmit={({ login, password }) => {
        auth(login, password);
      }}
    >
      {({ handleChange, handleBlur, values }) => {
        if (userId) {
          return <Redirect to={routes.home} />;
        }
        return (
          <>
            <Heading margin="2.4">Sign in</Heading>
            <StyledForm autoComplete="off">
              <InputGroup
                type="text"
                name="login"
                placeholder="Login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <InputGroup
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <Button color="notes" type="submit" disabled={isPendingFetchAuth}>
                sign in
              </Button>
            </StyledForm>
          </>
        );
      }}
    </Formik>
  </AuthTemplate>
);

LoginPage.propTypes = {
  userId: PropTypes.string,
  isPendingFetchAuth: PropTypes.bool,
  auth: PropTypes.func.isRequired,
};

LoginPage.defaultProps = {
  userId: '',
  isPendingFetchAuth: false,
};

const mapStateToProps = ({ userId, isPendingFetchAuth }) => ({
  userId,
  isPendingFetchAuth,
});

const mapDispatchToProps = (dispatch) => ({
  auth: (login, password) => dispatch(authAction(login, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

import React from 'react';
import Loader from 'components/molecules/Loader';
import UserPageTemplate from 'templates/UserPageTemplate';

const LoadingPageTemplate = () => (
  <UserPageTemplate>
    <Loader />
  </UserPageTemplate>
);

export default LoadingPageTemplate;

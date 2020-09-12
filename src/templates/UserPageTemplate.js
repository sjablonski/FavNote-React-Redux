import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar';

const Main = styled.main`
  padding-left: ${({ theme }) => theme.sidebarWidthSize};

  @media (max-width: 575.98px) {
    padding-left: 0;
    padding-top: ${({ theme }) => theme.sidebarHeightSize};
  }
`;

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    <Main>{children}</Main>
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserPageTemplate;

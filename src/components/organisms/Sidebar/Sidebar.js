import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { itemTypes } from 'config';
import routes from 'routes';
import ButtonIcon from 'components/atoms/ButtonIcon';
import { logOut as logOutAction } from 'actions/auth';
import withPageContext from 'hoc/withPageContext';
import logo from 'assets/icons/logo.svg';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';

const Wrapper = styled.nav`
  display: flex;
  width: ${({ theme }) => theme.sidebarWidthSize};
  height: 100vh;
  padding: 5.8rem 0 3.6rem 0;
  background: ${({ color, theme }) => (theme[color] ? theme[color] : color)};
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: 575.98px) {
    width: 100%;
    height: ${({ theme }) => theme.sidebarHeightSize};
    flex-direction: row;
    padding: 3.2rem 2.4rem;
    justify-content: space-between;
    z-index: 998;
  }
`;

const Logo = styled(Link)`
  display: block;
  width: 6.7rem;
  height: 6.7rem;
  margin-bottom: 6vh;
  background: url(${logo}) no-repeat;
  background-size: 90%;
  background-position: center;

  @media (max-width: 575.98px) {
    margin: 0;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  @media (max-width: 575.98px) {
    flex-direction: column;
  }
`;

const ListItem = styled.li`
  margin: 4.2rem 0;

  @media (max-width: 575.98px) {
    display: inline-block;
    margin: 0 2.4rem;
  }
`;

const LogoutButton = styled(ButtonIcon)`
  margin-top: auto;
  @media (max-width: 575.98px) {
    margin: 0;
  }
`;

const Sidebar = ({ pageContext, logOut }) => (
  <Wrapper color={pageContext}>
    <Logo to={routes.home} />
    <List>
      <ListItem>
        <ButtonIcon as={NavLink} to={routes.notes} color={pageContext} icon={penIcon} />
      </ListItem>
      <ListItem>
        <ButtonIcon as={NavLink} to={routes.twitters} color={pageContext} icon={twitterIcon} />
      </ListItem>
      <ListItem>
        <ButtonIcon as={NavLink} to={routes.articles} color={pageContext} icon={bulbIcon} />
      </ListItem>
    </List>
    <LogoutButton
      as={Link}
      to={routes.login}
      color={pageContext}
      icon={logoutIcon}
      onClick={logOut}
    />
  </Wrapper>
);

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(itemTypes).isRequired,
  logOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOutAction()),
});

export default withPageContext(connect(null, mapDispatchToProps)(Sidebar));

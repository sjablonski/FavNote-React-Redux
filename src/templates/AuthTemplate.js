import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import logoImg from 'assets/icons/logo.svg';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.notes};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLogo = styled.img`
  width: 20rem;
  height: auto;
`;

const StyledAuthCard = styled.div`
  width: 40rem;
  height: 40rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem -1rem rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledLogo src={logoImg} alt="" />
    <Heading margin="3.2">Your new favorite online notes experience</Heading>
    <StyledAuthCard>{children}</StyledAuthCard>
  </StyledWrapper>
);

AuthTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthTemplate;

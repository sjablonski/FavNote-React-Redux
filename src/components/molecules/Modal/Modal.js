import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from 'color';
import { itemTypes } from 'config';
import withPageContext from 'hoc/withPageContext';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(1.2px);
`;

const Wrapper = styled.div`
  position: fixed;
  top: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 48vw;
  border-radius: 0.7rem;
  max-width: 60rem;
  background-color: white;
  box-shadow: 0 2rem 4rem -0.5rem rgba(
      ${({ color, theme }) =>
        Color(theme[color] ? theme[color] : color)
          .rgb()
          .array()
          .join(', ')},
      0.3
    );
`;

const Modal = ({ children, pageContext, toggleModal }) => (
  <>
    <Background onClick={toggleModal} />
    <Wrapper color={pageContext}>{children}</Wrapper>
  </>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.oneOf(itemTypes).isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default withPageContext(Modal);

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Modal from 'components/molecules/Modal';
import { itemTypes } from 'config';
import withPageContext from 'hoc/withPageContext';

const Header = styled.header`
  padding: 2.6rem;
  border-radius: 0.7rem 0.7rem 0 0;
  background-color: ${({ color, theme }) => (theme[color] ? theme[color] : color)};
  text-align: center;
`;

const Content = styled.div`
  padding: 3.6rem;
  text-align: center;
`;

const RemoveItemModal = ({ pageContext, toggleModal, removeItem }) => (
  <Modal toggleModal={toggleModal}>
    <Header color={pageContext}>
      <Heading>Are you sure?</Heading>
    </Header>
    <Content>
      <Paragraph>This action cannot be undone.</Paragraph>
      <Button color={pageContext} onClick={toggleModal}>
        Cancel
      </Button>
      <Button color="red" onClick={removeItem}>
        Remove
      </Button>
    </Content>
  </Modal>
);

RemoveItemModal.propTypes = {
  pageContext: PropTypes.oneOf(itemTypes).isRequired,
  toggleModal: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default withPageContext(RemoveItemModal);

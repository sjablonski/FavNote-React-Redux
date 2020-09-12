import React from 'react';
import Modal from './Modal';

export default {
  title: 'molecules/Modal',
  component: Modal,
  args: {
    children: <p style={{ textAlign: 'center' }}>Test</p>,
    // eslint-disable-next-line no-console
    toggleModal: () => console.log('It works!'),
  },
};

export const Default = (args) => <Modal {...args} />;

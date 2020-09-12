import React from 'react';
import { itemTypes } from 'config';
import Spinner from './Spinner';

export default {
  title: 'atoms/Spinner',
  component: Spinner,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: itemTypes,
      },
    },
  },
};

export const Default = (args) => <Spinner {...args} />;
Default.args = {
  color: itemTypes[0],
};

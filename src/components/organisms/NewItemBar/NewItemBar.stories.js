import React from 'react';
import NewItemBar from './NewItemBar';

export default {
  title: 'organisms/NewItemBar',
  component: NewItemBar,
  argTypes: {
    isVisible: {
      control: 'boolean',
    },
  },
  args: {
    isVisible: true,
  },
};

export const Default = (args) => <NewItemBar {...args} />;

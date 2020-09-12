import React from 'react';
import { itemTypes } from 'config';
import Button from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: {
        type: 'select',
        options: [...itemTypes, 'grey200'],
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Notes = Template.bind({});
Notes.args = {
  children: 'Close / Save',
  color: itemTypes[0],
};

export const Twitters = Template.bind({});
Twitters.args = {
  children: 'Close / Save',
  color: itemTypes[1],
};

export const Articles = Template.bind({});
Articles.args = {
  children: 'Close / Save',
  color: itemTypes[2],
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  children: 'Remove',
};

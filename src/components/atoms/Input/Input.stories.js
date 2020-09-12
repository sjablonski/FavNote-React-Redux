import React from 'react';
import magnifierIcon from 'assets/icons/magnifier.svg';
import Input from './Input';

export default {
  title: 'atoms/Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    small: {
      control: 'boolean',
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Login',
};

export const WithIcon = Template.bind({});
WithIcon.args = { placeholder: 'Search', icon: magnifierIcon };

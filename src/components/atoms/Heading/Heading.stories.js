import React from 'react';
import Heading from './Heading';

export default {
  title: 'atoms/Heading',
  component: Heading,
  argTypes: {
    children: {
      control: 'text',
    },
  },
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'My best note ever',
};

export const Big = Template.bind({});
Big.args = {
  children: 'Notes',
  big: true,
};

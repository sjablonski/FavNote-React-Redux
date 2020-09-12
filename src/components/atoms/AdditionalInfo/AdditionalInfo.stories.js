import React from 'react';
import AdditionalInfo from './AdditionalInfo';

export default {
  title: 'atoms/AdditionalInfo',
  component: AdditionalInfo,
  argTypes: {
    children: {
      control: 'text',
    },
    small: {
      control: 'boolean',
    },
  },
};

const Template = (args) => <AdditionalInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '12 notes',
};

export const Small = Template.bind({});
Small.args = {
  children: '3 days',
  small: true,
};

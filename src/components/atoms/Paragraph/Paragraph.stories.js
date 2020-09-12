import React from 'react';
import Paragraph from './Paragraph';

export default {
  title: 'atoms/Paragraph',
  component: Paragraph,
  argTypes: {
    children: {
      control: 'text',
    },
  },
};

const Template = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    'Miles Dewey Davis III (May 26, 1926 – September 28, 1991) was an American jazz trumpeter, bandleader, and composer.',
};

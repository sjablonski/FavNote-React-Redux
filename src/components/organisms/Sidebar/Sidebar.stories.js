import React from 'react';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Sidebar';

export default {
  title: 'organisms/Sidebar',
  component: Sidebar,
  argTypes: {
    pageContext: {
      control: {
        type: 'select',
        options: ['notes', 'twitters', 'articles'],
      },
    },
  },
  decorators: [StoryRouter()],
};

export const Normal = (args) => <Sidebar {...args} />;

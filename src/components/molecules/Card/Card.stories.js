import React from 'react';
import StoryRouter from 'storybook-react-router';

import Card from './Card';

export default {
  title: 'molecules/Card',
  component: Card,
  decorators: [StoryRouter()],
  args: {
    id: '1',
    title: 'My best note ever',
    created: 1599856893736,
    twitterName: 'dan_abramov',
    articleUrl: 'https://pl.reactjs.org/',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis sit amet erat a iaculis. Vivamus iaculis sem id sem posuere.',

    // eslint-disable-next-line no-console
    onRemoveItem: () => console.log('It works!'),
  },
  parameters: {
    contexts: [
      {
        title: 'PageContext',
        options: { defaultProps: 'Twitters' },
      },
    ],
  },
};

export const Default = (args) => <Card {...args} />;

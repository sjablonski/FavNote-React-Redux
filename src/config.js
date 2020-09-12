import PageContext from 'context';

export const itemTypes = ['notes', 'twitters', 'articles'];

export const storybookContext = [
  {
    icon: 'box',
    title: 'PageContext',
    components: [PageContext.Provider],
    params: [
      { name: 'Notes', props: { value: 'notes' }, default: true },
      { name: 'Twitters', props: { value: 'twitters' } },
      { name: 'Articles', props: { value: 'articles' } },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: true,
    },
  },
];

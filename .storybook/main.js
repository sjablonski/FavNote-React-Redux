module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-contexts/register',
    '@storybook/addon-controls',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/preset-create-react-app',
  ],
};

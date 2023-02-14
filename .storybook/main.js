const path = require('path');

module.exports = {
  core: { builder: 'webpack5' },
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    path.resolve('./.storybook/vanilla-extract'),
    'storybook-addon-themes',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: { backgrounds: false }
    }
  ]
};

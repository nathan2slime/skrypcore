import { ensure } from '@storybook/theming';

import '@skryp/core/dist/index.css';

import './styles/global.scss';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: {
        disable: true,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#020105',
        },
      ],
    },
  },
};

export default preview;

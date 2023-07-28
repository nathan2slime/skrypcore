import type { Meta, StoryObj } from '@storybook/react';

import { KryButton } from '@skryp/core';

const meta: Meta<typeof KryButton> = {
  title: 'Button',
  component: KryButton,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof KryButton>;

export const Default: Story = {
  args: {
    color: 'primary',
  },
};

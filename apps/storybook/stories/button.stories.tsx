import type { Meta, StoryObj } from '@storybook/react';

import { KryButton } from '@skryp/core';

const meta: Meta<typeof KryButton> = {
  title: 'Button',
  component: KryButton,
  argTypes: {
    color: {
      defaultValue: 'primary',
      name: 'color',
      options: ['primary', 'secondary'],
      control: { type: 'select' },
      description: 'The color of the button: primary or secondary.',
    },
    variant: {
      defaultValue: 'solid',
      name: 'variant',
      options: ['solid', 'outline'],
      control: { type: 'select' },
      description: 'The style variant of the button: solid or outline.',
    },
    type: {
      defaultValue: 'button',
      name: 'type',
      options: ['button', 'reset', 'submit'],
      control: { type: 'select' },
      description:
        'The type attribute of the button: button, reset, or submit.',
    },
    disabled: {
      defaultValue: false,
      name: 'disabled',
      description:
        'Determines if the button is disabled. When true, the button is unclickable.',
    },
    rounded: {
      defaultValue: false,
      name: 'rounded',
      description: 'Specifies if the button should have rounded corners (circular shape) when set to true.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof KryButton>;

export const Default: Story = {
  args: {
    color: 'primary',
    children: 'Sign In',
    type: 'button',
    rounded: false,
    variant: 'solid',
    disabled: false,
  },
};

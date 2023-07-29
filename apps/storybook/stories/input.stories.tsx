import type { Meta, StoryObj } from '@storybook/react';
import { KryInput } from '@skryp/core';

const meta: Meta<typeof KryInput> = {
  title: 'Input',
  component: KryInput,
  argTypes: {
    value: {
      name: 'value',
      defaultValue: '',
      description: 'The current value of the input field.',
    },
    invalid: {
      name: 'invalid',
      defaultValue: false,
      description: 'Specifies if the input is in an invalid state.',
    },
    message: {
      name: 'message',
      defaultValue: '',
      description: 'The error message to display when the input is invalid.',
    },
    color: {
      name: 'color',
      options: ['primary', 'secondary'],
      control: { type: 'select' },
      defaultValue: 'primary',
      description: 'The color theme for the input: primary or secondary.',
    },
    type: {
      defaultValue: 'text',
      name: 'type',
      options: ['text', 'email', 'password'],
      control: { type: 'select' },
      description: 'The type attribute of the input: text, email, or password.',
    },
    kryChange: {
      defaultValue: () => {},
      name: 'kryChange',
      description: 'The function to be called when the input value changes.',
      type: 'function',
      action: 'kryChange',
    },
  },
};

export default meta;

type Story = StoryObj<typeof KryInput>;

export const Default: Story = {
  args: {
    value: 'Sun',
    type: 'text',
    invalid: false,
    color: 'primary',
    message: 'Field is required',
  },
};

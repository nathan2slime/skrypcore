import { render } from '@testing-library/react';
import { test, expect, describe, beforeEach } from 'vitest';

import { KryButton } from '../../src/components/button';

describe('kry-button', () => {
  let button: HTMLElement;

  const text = 'button';

  beforeEach(() => {
    const { getByTestId } = render(<KryButton>{text}</KryButton>);

    button = getByTestId('button');
  });

  test('render kry-button', () => {
    expect(button).not.toBeNull();
    expect(button.innerHTML).toBe(text);
  });

  test('should render button with variant outline', () => {
    expect(button).not.toBeNull();
    expect(Array.from(button.classList)).toContainEqual('variant');
  });
});

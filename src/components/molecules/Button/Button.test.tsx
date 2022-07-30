import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders xlarge button', () => {
    const button = render(<Button size="xlarge">Button</Button>).container;
    expect(button.querySelector('.MuiButton-sizeXLarge')).toBeTruthy();
  });
});

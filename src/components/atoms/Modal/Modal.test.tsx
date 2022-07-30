import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  it('renders modal with content', () => {
    const onClose = jest.fn();
    render(<Modal open onClose={onClose}><h1>Modal Content</h1></Modal>);
    const modalContent = screen.getByText('Modal Content');
    expect(modalContent).toBeInTheDocument();
  });
});

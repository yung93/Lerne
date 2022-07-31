import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { SocketContextProvider, useSocket } from './SocketContext';

const TestChild = () => {
  const { isConnected } = useSocket();
  return (
    <>
      <p data-testid="isConnected">{String(isConnected)}</p>
    </>
  );
};

describe('SocketContext', () => {
  it('connects to socket', async () => {
    render(
      <SocketContextProvider>
        <TestChild />
      </SocketContextProvider>,
    );
    const isConnected = screen.getByTestId('isConnected');
    await waitFor(() => {
      expect(isConnected).toHaveTextContent('true');
    });
  });
});

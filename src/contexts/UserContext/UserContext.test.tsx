import React from 'react';
import {
  fireEvent,
  render, screen, waitFor,
} from '@testing-library/react';
import { UserContextProvider, useUser } from './UserContext';
import { IRank } from '../../types/rank';

const testData: IRank = {
  name: 'test_name',
  avatar: 'test_avatar',
  score: 1000,
  time: 2000,
};

const TestChild = () => {
  const { user, updateUser } = useUser();
  return (
    <>
      <div data-testid="user">
        <p>{user?.name}</p>
        <p>{user?.avatar}</p>
        <p>{user?.score}</p>
        <p>{user?.time}</p>
      </div>
      <button
        data-testid="updateUserButton"
        type="button"
        onClick={() => updateUser(testData)}
      >
        update
      </button>
    </>
  );
};

describe('UserContext', () => {
  it('updates user', async () => {
    render(
      <UserContextProvider>
        <TestChild />
      </UserContextProvider>,
    );
    fireEvent.click(screen.getByTestId('updateUserButton'));
    const user = screen.getByTestId('user');
    await waitFor(() => {
      expect(user.getElementsByTagName('p')[0]).toHaveTextContent('test_name');
      expect(user.getElementsByTagName('p')[1]).toHaveTextContent('test_avatar');
      expect(user.getElementsByTagName('p')[2]).toHaveTextContent('1000');
      expect(user.getElementsByTagName('p')[3]).toHaveTextContent('2000');
    });
  });
});

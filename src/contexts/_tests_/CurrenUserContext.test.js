import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { CurrentUserProvider, useCurrentUser, useSetCurrentUser } from '../CurrentUserContext';


const TestComponent = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  return (
    <div>
      <div data-testid="current-user">{currentUser ? currentUser.username : 'No user'}</div>
      <button onClick={() => setCurrentUser({ username: 'testuser' })}>Set User</button>
    </div>
  );
};

describe('CurrentUserContext', () => {
  it('provides default value', () => {
    render(
      <CurrentUserProvider>
        <TestComponent />
      </CurrentUserProvider>
    );

    expect(screen.getByTestId('current-user').textContent).toBe('No user');
  });

  it('updates the current user', () => {
    render(
      <CurrentUserProvider>
        <TestComponent />
      </CurrentUserProvider>
    );

    act(() => {
      screen.getByText('Set User').click();
    });

    expect(screen.getByTestId('current-user').textContent).toBe('testuser');
  });
});
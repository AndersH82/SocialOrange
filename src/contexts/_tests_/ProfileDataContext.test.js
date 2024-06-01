import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProfileDataProvider, useProfileData, useSetProfileData } from '../ProfileDataContext';


const MockComponent = () => {
  const profileData = useProfileData();
  const setProfileData = useSetProfileData();

  return (
    <div>
      <div data-testid="profile-data">{JSON.stringify(profileData)}</div>
      <button onClick={() => setProfileData({ name: 'John Doe' })}>Set Profile Data</button>
    </div>
  );
};

describe('ProfileDataContext', () => {
  test('provides default profile data', () => {
    render(
      <ProfileDataProvider>
        <MockComponent />
      </ProfileDataProvider>
    );

    const profileDataDiv = screen.getByTestId('profile-data');
    expect(profileDataDiv.textContent).toBe('{}');
  });

  test('updates profile data', () => {
    render(
      <ProfileDataProvider>
        <MockComponent />
      </ProfileDataProvider>
    );

    const button = screen.getByText('Set Profile Data');
    button.click();

    const profileDataDiv = screen.getByTestId('profile-data');
    expect(profileDataDiv.textContent).toBe(JSON.stringify({ name: 'admin' }));
  });
});
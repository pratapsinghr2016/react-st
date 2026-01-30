// UserCard.test.jsx

import { render, screen, waitFor } from '@testing-library/react';
import UserCard from './UserCard';

// ============================================
// IMPORTANT: We "fake" the fetch function
// Why? We don't want real API calls in tests!
// ============================================

describe('UserCard Component', () => {

  // Before each test, replace real fetch with our fake one
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  // After each test, clean up
  afterEach(() => {
    jest.resetAllMocks();
  });


  // TEST 1: Shows "Loading..." initially
  test('shows loading state at first', () => {
    // Make fetch "hang" forever (never return)
    global.fetch.mockImplementation(() => new Promise(() => {}));
    
    render(<UserCard userId={1} />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });


  // TEST 2: Shows user data after successful fetch
  test('shows user data when API returns successfully', async () => {
    
    // FAKE API RESPONSE: Pretend API returned this
    const fakeUser = {
      name: 'Rajat Kumar',
      email: 'rajat@example.com'
    };
    
    // Tell fetch to return our fake data
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => fakeUser,
    });

    render(<UserCard userId={1} />);

    // WAIT for the data to load (because fetch is async)
    // "waitFor" keeps checking until it finds the text
    await waitFor(() => {
      expect(screen.getByText('Rajat Kumar')).toBeInTheDocument();
    });
    
    expect(screen.getByText('rajat@example.com')).toBeInTheDocument();
  });


  // TEST 3: Shows error when API fails
  test('shows error when API fails', async () => {
    
    // Make fetch return an error response
    global.fetch.mockResolvedValueOnce({
      ok: false,  // This triggers our error handling
    });

    render(<UserCard userId={999} />);

    await waitFor(() => {
      expect(screen.getByText('Error: User not found')).toBeInTheDocument();
    });
  });


  // TEST 4: Verify fetch was called with correct URL
  test('calls API with correct user ID', () => {
    global.fetch.mockImplementation(() => new Promise(() => {}));
    
    render(<UserCard userId={42} />);
    
    // Check if fetch was called with the right URL
    expect(global.fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users/42'
    );
  });

});
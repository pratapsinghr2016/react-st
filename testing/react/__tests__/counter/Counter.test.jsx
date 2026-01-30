import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';


describe('Counter Component', () => {

  // TEST 1: Does it show "Count: 0" when page loads?
  test('shows initial count as 0', () => {
    
    // RENDER: Put Counter on screen
    render(<Counter />);
    
    const element = screen.getByText('Count: 0')
    expect(element).toBeInTheDocument();
  });


  // TEST 2: Does clicking "Increment" increase the count?
  test('increases count when Increment is clicked', async () => {
    
    // Setup userEvent (this simulates real user clicks)
    const user = userEvent.setup();
    
    // RENDER
    render(<Counter />);
    
    // FIND the Increment button
    const incrementButton = screen.getByText('Increment');
    
    // ACT: Click it!
    await user.click(incrementButton);
    
    // ASSERT: Count should now be 1
    const element = screen.getByText('Count: 1')
    expect(element).toBeInTheDocument();
  });
});
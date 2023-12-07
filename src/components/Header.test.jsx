import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

// Mock the useContext and context values
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

const mockCartContext = {
  items: [
    { id: 1, quantity: 2 },
    { id: 2, quantity: 1 },
    { id: 3, quantity: 3 }
  ],
};

const mockUserProgressContext = {
  showCart: jest.fn(),
};

describe('Header component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(React, 'useContext').mockReturnValueOnce(mockCartContext)
      .mockReturnValueOnce(mockUserProgressContext);
  });

  test('renders logo, title, and cart button with total items', () => {
    render(<Header />);
    
    const logoElement = screen.getByAltText('My Cafe');
    const titleElement = screen.getByText('My Cafe');
    const cartButton = screen.getByRole('button', { name: /cart/i });
    const totalCartItems = screen.getByText(/cart\(\d+\)/i);

    expect(logoElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();
    expect(totalCartItems).toHaveTextContent('Cart(6)'); // Update the expected total based on the mocked items
  });

  test('calls userProgressCtx.showCart() when Cart button is clicked', () => {
    render(<Header />);
    const cartButton = screen.getByRole('button', { name: /cart/i });

    fireEvent.click(cartButton);

    expect(mockUserProgressContext.showCart).toHaveBeenCalled();
  });
});

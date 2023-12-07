// Import necessary libraries and utilities for testing
import { render, screen, fireEvent } from '@testing-library/react';
import Cart from './Cart';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';





describe('Cart Component', () => {
    
    const mockCartItems = [
        { id: '1', name: 'Item 1', quantity: 2, price: 10 },
        { id: '2', name: 'Item 2', quantity: 1, price: 20 },
      ];

    const mockCartTotal = 50;

    const mockHideCart = jest.fn();
    const mockShowCheckout = jest.fn();

      const mockCartContextValue = {
        items: mockCartItems,
      };

      const mockUserProgressContextValue = {
        progress: '',
        hideCart: mockHideCart,
        showCheckout: mockShowCheckout,
      };


    it('renders without crashing', () => {
      // Render the component and verify if it renders without error
    
jest.mock('react-dom', () => ({
    ...jest.requireActual('react-dom'),
    createPortal: (node) => node,
  }));
  

      render(
        <CartContext.Provider value={mockCartContextValue}>
          <UserProgressContext.Provider value={mockUserProgressContextValue}>
            <Cart />
          </UserProgressContext.Provider>
        </CartContext.Provider>
      );
  
      // Check if the component renders without errors
      const cartTitle = screen.getByText('Your Cart');
      expect(cartTitle).toBeInTheDocument();
    });
  
   
  });
  

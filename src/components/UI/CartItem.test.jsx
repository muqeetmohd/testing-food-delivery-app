import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from './CartItem';
import CartContext from '../store/CartContext';

describe('CartItem Component', () => {
    

    // it('renders cart item details correctly', () => {
    //     const mockCartItem = {
    //         id: 1,
    //         name: 'Sample Item',
    //         quantity: 3,
    //         price: 15,
    //         itemClone: {
    //             id: 1,
    //             name: 'Sample Item',
    //             quantity: 1,
    //             price: 15,
    //         },
    //     };
    
    //     render(
    //         <CartItem
    //             key={mockCartItem.id}
    //             id={mockCartItem.id}
    //             name={mockCartItem.name}
    //             quantity={mockCartItem.quantity}
    //             price={mockCartItem.price}
    //             itemClone={mockCartItem.itemClone}
    //         />
    //     );
    
    //     expect(screen.getByText('Sample Item')).toBeInTheDocument();
    // });

    
    
  it('calls addItem function from CartContext when "+" button is clicked', () => {
    const mockCartItem = {
      id: 1,
      name: 'Sample Item',
      quantity: 3,
      price: 15,
      itemClone: {
        id: 1,
        name: 'Sample Item',
        quantity: 1,
        price: 15,
      },
    };

    const mockCartValue = {
      addItem: jest.fn(),
      removeItem: jest.fn(),
    };

    render(
      <CartContext.Provider value={mockCartValue}>
        <CartItem {...mockCartItem} />
      </CartContext.Provider>
    );

    // Simulate clicking the "+" button
    fireEvent.click(screen.getByText('+'));
    
    // Verify if the fn has been called
    expect(mockCartValue.addItem).toHaveBeenCalledWith(mockCartItem.itemClone);
  });

  it('calls removeItem function from CartContext when "-" button is clicked', () => {
    const mockCartItem = {
      id: 1,
      name: 'Sample Item',
      quantity: 3,
      price: 15,
      itemClone: {
        id: 1,
        name: 'Sample Item',
        quantity: 1,
        price: 15,
      },
    };

    const mockCartValue = {
      addItem: jest.fn(),
      removeItem: jest.fn(),
    };

    render(
      <CartContext.Provider value={mockCartValue}>
        <CartItem {...mockCartItem} />
      </CartContext.Provider>
    );

    // Simulate clicking the "-" button
    fireEvent.click(screen.getByText('-'));
    
    // Assert that removeItem function from CartContext was called with the correct ID
    expect(mockCartValue.removeItem).toHaveBeenCalledWith(mockCartItem.id);
  });
});

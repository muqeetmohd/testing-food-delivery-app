import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MealItem from './MealItem';
import CartContext from './store/CartContext';

describe('MealItem Component', () => {
  const mockMeal = { id: 1, name: 'Test Meal', price: '10.00', image: 'test.jpg', description: 'Test description' };

  test('renders meal details correctly', () => {
    const { getByText, getByRole } = render(<MealItem meal={mockMeal} />);

    expect(getByText('Test Meal')).toBeInTheDocument();
    expect(getByText('Test description')).toBeInTheDocument();
    expect(getByText('Add to cart')).toBeInTheDocument();
    expect(getByRole('img')).toHaveAttribute('src', 'http://localhost:2023/test.jpg');
  });

});

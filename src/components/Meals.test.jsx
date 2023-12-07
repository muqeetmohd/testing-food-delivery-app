import React from 'react';
import { render } from '@testing-library/react';
import Meals from './Meals';

describe('Meals Component', () => {
  test('renders meal items', async () => {
    
    const mockMeals = [
      { id: 1, name: 'Meal 1', price: '10.00', image: 'image1.jpg', description: 'Delicious meal 1' },
      { id: 2, name: 'Meal 2', price: '15.00', image: 'image2.jpg', description: 'Tasty meal 2' },
    ];

    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMeals),
    });

    const { findAllByRole } = render(<Meals />);

    const mealItems = await findAllByRole('listitem');
    expect(mealItems).toHaveLength(mockMeals.length);
  });
});

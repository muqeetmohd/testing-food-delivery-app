import React from 'react';
import { render } from '@testing-library/react';
import Success from './Success';

jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom');
  return {
    ...original,
    createPortal: (node) => node,
  };
});//it mocks the react-dom and intercepts the usage of createPortal, by simply returning the node that is supplied to it

describe('Success Component', () => {
  test('renders modal when progress is "Success"', () => {
    const { getByText } = render(<Success />);

    expect(getByText('Success!')).toBeInTheDocument();
    expect(
      getByText('Your order was Succesfully placed. you will recive a call shortly for conformation')
    ).toBeInTheDocument();
  });

  test('checks if the modal is rendered properly', () => {
    const { queryByRole } = render(<Success />);

    expect(queryByRole('dialog')).toBeInTheDocument();

  })
});

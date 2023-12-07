import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {

  test('renders a button with children', () => {
    const { getByText } = render(<Button>Hello</Button>);
    const buttonElement = getByText('Hello');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders a button with additional class name', () => {
    const { container } = render(<Button className="custom-class">Click Me</Button>);
    const buttonElement = container.querySelector('.button.custom-class');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders a text-only button by checking the className after passing textOnly as true', () => {
    const { container } = render(<Button textOnly>Text Only</Button>);
    const textButtonElement = container.querySelector('.text-button');
    expect(textButtonElement).toBeInTheDocument();
  });


  test('passes additional props to the button', () => {
    const onClickMock = jest.fn();
    const { container } = render(<Button onClick={onClickMock}>Click Me</Button>);
    const buttonElement = container.querySelector('.button');
    expect(buttonElement).toBeInTheDocument();
        //Here passing down an onClick prop and checking if it is called properly when the button is clicked
    buttonElement.click();
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});

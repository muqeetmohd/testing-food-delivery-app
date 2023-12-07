import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
  test('renders label and input with required props', () => {
    const label = 'Email';
    const id = 'email';
    const required = true;

    render(<Input label={label} id={id} required={required} />);

    const inputElement = screen.getByLabelText(label);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', id);
    expect(inputElement).toHaveAttribute('name', id);
    expect(inputElement).toHaveAttribute('required');

    const labelElement = screen.getByText(label);
    expect(labelElement).toHaveAttribute('for', id);
  });

  test('renders input with optional props', () => {
    const label = 'Phone';
    const id = 'phone';
    const placeholder = 'Enter your phone number';

    render(<Input label={label} id={id} placeholder={placeholder} />);

    const inputElement = screen.getByLabelText(label);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', id);
    expect(inputElement).toHaveAttribute('name', id);
    expect(inputElement).toHaveAttribute('placeholder', placeholder);

    const labelElement = screen.getByText(label);
    expect(labelElement).toHaveAttribute('for', id);
  });

  test('renders input with default props', () => {
    const label = 'Password';
    const id = 'password';

    render(<Input label={label} id={id} />);

    const inputElement = screen.getByLabelText(label);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', id);
    expect(inputElement).toHaveAttribute('name', id);

    const labelElement = screen.getByText(label);
    expect(labelElement).toHaveAttribute('for', id); 
  });
});

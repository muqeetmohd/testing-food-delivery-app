import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
  let modalRoot;

  beforeEach(() => {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    document.body.appendChild(modalRoot);

    window.HTMLDialogElement.prototype.showModal = jest.fn();
    window.HTMLDialogElement.prototype.close = jest.fn();
  });

  afterEach(() => {
    document.body.removeChild(modalRoot);
  });

  test('renders modal when open is true', () => {
    render(<Modal open={true}>Modal Content</Modal>);

    const modalElement = screen.getByText('Modal Content');
    expect(modalElement).toBeInTheDocument();
    expect(window.HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  });

});

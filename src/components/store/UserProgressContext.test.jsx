import { render } from '@testing-library/react';
import UserProgressContext, { UserProgressContextProvider } from './UserProgressContext';
import { useContext } from 'react';

describe('UserProgressContextProvider', () => {
  test('renders children without crashing', () => {
    const { getByText } = render(
      <UserProgressContextProvider>
        <div>Test Child</div>
      </UserProgressContextProvider>
    );

    expect(getByText('Test Child')).toBeInTheDocument();
  });



 test('initial progress value is an empty string', () => {
  let progress;
  const TestComponent = () => {
    const context = useContext(UserProgressContext);
    progress = context.progress;
    return <div>Test Child</div>;
  };

  const { container } = render(
    <UserProgressContextProvider>
      <TestComponent />
    </UserProgressContextProvider>
  );
  
  expect(container).toBeInTheDocument();

  expect(progress).toBe('');
});

  test('updates progress value when calling showCart', () => {
    let progress;
    const TestComponent = () => {
        const context = useContext(UserProgressContext)
        context.showCart();
        progress = context.progress;
        return <div>Test Child</div>;
    }


    render(
      <UserProgressContextProvider>
        <TestComponent/>
      </UserProgressContextProvider>
    ).context;

    console.log(progress);
    expect(progress).toBe('cart');
  });

  test('updates progress value when calling showCheckout', () => {
    let progress;
    const TestComponent = () => {
        const context = useContext(UserProgressContext)
        context.showCheckout();
        progress = context.progress;
        return <div>Test Child</div>;
    }


    render(
      <UserProgressContextProvider>
        <TestComponent/>
      </UserProgressContextProvider>
    ).context;

    console.log(progress);
    expect(progress).toBe('checkout');
  });

  test('updates progress value when calling orderSuccess', () => {
    let progress;
    const TestComponent = () => {
        const context = useContext(UserProgressContext)
        context.orderSuccess();
        progress = context.progress;
        return <div>Test Child</div>;
    }


    render(
      <UserProgressContextProvider>
        <TestComponent/>
      </UserProgressContextProvider>
    ).context;

    console.log(progress);
    expect(progress).toBe('Success');
  });
  
});

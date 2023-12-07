import { render } from '@testing-library/react';
import { CartContextProvider, CartContext } from './CartContext'; // Import the context and provider
import { useContext } from 'react';

describe('cart context',()=>{
    
    test('Renders without crashing', ()=>{
        const { getByText } = render(
            <CartContextProvider>
              <div>Test Child</div>
            </CartContextProvider>
          );
    expect(getByText('Test Child')).toBeInTheDocument();
    })

    test('inital values are accordinly set', () => {
        let items;
        const TestComponent = () => {
            const context = useContext(CartContext);
            items = context.items;
            return <div>Test Child</div>;
          };

          const { getByText } = render(
            <CartContextProvider>
              <div>Test Child</div>
            </CartContextProvider>
          );
          
          expect(items).toHaveLength(0);

    })
} )
import { render } from '@testing-library/react';
import Index from '../pages/index';
import Cart from '../pages/cart';

it('index page render unchanged', () => {
    const { container } = render(<Index />);
    expect(container).toMatchSnapshot();
})



import { render } from '@testing-library/react';
import Index from '../pages/index';

it('index page render unchanged', () => {
    const { container } = render(<Index />);
    expect(container).toMatchSnapshot();
})



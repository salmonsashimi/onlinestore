import SearchBar from '../../components/headerComponents/SearchBar';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('searchbar ', () => {
    test('render index component', () => {
        render(<SearchBar />)
        // screen.debug();
        screen.getByRole('button')
        // push to new website
        screen.debug();
    })

})


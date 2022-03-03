import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import SearchBar from '../../components/headerComponents/SearchBar';
import userEvent from '@testing-library/user-event';

describe('searchbar ', () => {
    test('should render SearchBar component', () => {
        render(<SearchBar />)
        // screen.debug();
        screen.getByRole('button')
        // push to new website
        screen.debug();
    })

    test('should render input element correctly', () => {
        render(<SearchBar allItems={[]} />);
        const inputElement = screen.getByPlaceholderText(/Search for items and brands/)
        expect(inputElement).toBeInTheDocument();
    })

    test('should be able to type in input', async () => {
        render(<SearchBar allItems={[]} />);
        const inputElement = await screen.findByPlaceholderText(/Search for items and brands/)
        console.log(inputElement)
        fireEvent.change(inputElement, { target: { value: 'test' } })
        expect(inputElement.value).toBe('test')
    })

})


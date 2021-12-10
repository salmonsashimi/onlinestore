import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';


const SearchBar = () => {
    const [input, setInput] = useState('');

    const onSearchClick = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
    }

    return (
        <form className='searchBar' onSubmit={onSearchClick}>
            <input
                className='searchBar__input'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Seach for items and brands'
            />
            <button className='searchBar__button' ><FiSearch size='1.5em' /></button>
        </form>
    )
}

export default SearchBar;
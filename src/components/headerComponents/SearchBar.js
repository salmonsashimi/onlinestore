import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import useTextInput from '../hooks/useFormState';

const SearchBar = () => {
    const [text, setText] = useTextInput();

    const onSearchClick = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
    }

    return (
        <form className='searchBar' onSubmit={onSearchClick}>
            <input
                className='searchBar__input'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Seach for items and brands'
            />
            <button className='searchBar__button' ><FiSearch size='1.5em' /></button>
        </form>
    )
}

export default SearchBar;
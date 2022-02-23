import { useState } from 'react';
import { useRouter } from 'next/router';
import { FiSearch } from 'react-icons/fi';
import useTextInput from '../hooks/useFormState';
import SearchResults from './SearchResults';

const SearchBar = (props) => {
    const { items } = props;

    console.log('items', items)
    const [results, setResults] = useState([])
    console.log('results from searchbar', results)

    const [text, setText] = useTextInput();
    const [resultsVisibility, setResultsVisibility] = useState(false);
    const router = useRouter();

    const onSearchClick = (e) => {
        e.preventDefault();
        router.push(`/search/${e.target[0].value}`);
    }

    const onSearchFocus = () => {
        setResultsVisibility(true)
        setResults([...items])
    }

    return (
        <div className='searchBar'>
            <form className='searchBar__form' onSubmit={onSearchClick}>
                <input
                    className='searchBar__input'
                    value={text}
                    onChange={setText}
                    onFocus={onSearchFocus}
                    onBlur={e => {
                        setResultsVisibility(false)
                    }}
                    placeholder='Seach for items and brands'
                />
                <button className='searchBar__button' ><FiSearch size='1.5em' /></button>
            </form>
            {resultsVisibility && <SearchResults results={results} />}

        </div>

    )
}

export default SearchBar;
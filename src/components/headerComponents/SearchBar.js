import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FiSearch } from 'react-icons/fi';
import useTextInput from '../hooks/useFormState';
import SearchResults from './SearchResults';

const SearchBar = (props) => {
    const router = useRouter();
    const [results, setResults] = useState([])
    const [text, setText] = useState();
    const [resultsVisibility, setResultsVisibility] = useState(false);

    const { allItems } = props;

    const expand = () => {
        setResultsVisibility(true);
    }

    const close = () => {
        setResultsVisibility(false);
    }

    useEffect(() => {
        const filteredItems = allItems.filter(function (item) {
            if (item.name.includes(text) && this.count < 5) {
                this.count++;
                return true;
            }

        }, { count: 0 })
        setResults([...filteredItems])
    }, [text])

    const onResultClick = (id) => {
        router.push(`/item/${id}`);
    }

    const onSearchClick = (e) => {
        e.preventDefault();
        router.push(`/search/${e.target[0].value}`);
    }

    return (
        <div className='searchBar'>
            <form className='searchBar__form' onSubmit={onSearchClick}>
                <input
                    className='searchBar__input'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onFocus={expand}
                    onBlur={close}
                    placeholder='Search for items and brands'
                />
                <button className='searchBar__button' ><FiSearch size='1.5em' /></button>
            </form>
            {(resultsVisibility && results.length !== 0) && <SearchResults results={results} onResultClick={onResultClick} />}

        </div>

    )
}

export default SearchBar;
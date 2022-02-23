import { useState } from 'react';
import { useRouter } from 'next/router';
import { FiSearch } from 'react-icons/fi';
import useTextInput from '../hooks/useFormState';
import SearchResults from './SearchResults';

const SearchBar = (props) => {
    const router = useRouter();

    const { allItems } = props;

    console.log('items', allItems)
    const [results, setResults] = useState([])
    console.log('results from searchbar', results)

    const [text, setText] = useState();
    const [resultsVisibility, setResultsVisibility] = useState(false);

    const onSearchClick = (e) => {
        e.preventDefault();
        router.push(`/search/${e.target[0].value}`);
    }

    const onSearchFocus = () => {
        setResultsVisibility(true)
        if (text) {

            const filteredItems = allItems.filter(function (item) {
                if (item.name.includes(text) && this.count < 5) {
                    this.count++;
                    return true;
                }

            }, { count: 0 })

            setResults([...filteredItems])
        } else {
            const initialResults = allItems.slice(0, 5);
            setResults([...initialResults])
        }

    }

    const onTextChange = (e) => {
        setText(e.target.value)
        const filteredItems = allItems.filter(function (item) {
            if (item.name.includes(text) && this.count < 5) {
                this.count++;
                return true;
            }

        }, { count: 0 })
        setResults([...filteredItems])
    }

    return (
        <div className='searchBar'>
            <form className='searchBar__form' onSubmit={onSearchClick}>
                <input
                    className='searchBar__input'
                    value={text}
                    onChange={onTextChange}
                    onFocus={onSearchFocus}
                    onBlur={() => {
                        setResultsVisibility(false)
                    }}
                    placeholder='Seach for items and brands'
                />
                <button className='searchBar__button' ><FiSearch size='1.5em' /></button>
            </form>
            {(resultsVisibility && results.length !== 0) && <SearchResults results={results} />}

        </div>

    )
}

export default SearchBar;
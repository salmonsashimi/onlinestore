import { useRouter } from 'next/router';
import { FiSearch } from 'react-icons/fi';
import useTextInput from '../hooks/useFormState';

const SearchBar = () => {
    const [text, setText] = useTextInput();
    const router = useRouter();

    const onSearchClick = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        router.push(`/search/${e.target[0].value}`);
    }

    return (
        <form className='searchBar' onSubmit={onSearchClick}>
            <input
                className='searchBar__input'
                value={text}
                onChange={setText}
                placeholder='Seach for items and brands'
            />
            <button className='searchBar__button' ><FiSearch size='1.5em' /></button>
        </form>
    )
}

export default SearchBar;
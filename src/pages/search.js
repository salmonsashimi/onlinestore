import SearchSortingBar from '../components/searchComponents/SearchSortingBar';
import ItemBoxes from '../components/searchComponents/ItemBoxes';
import SearchFilterColumn from '../components/searchComponents/SearchfilterColumn';

const SearchPage = () => (
    <div className='container'>
        <SearchSortingBar />
        <div className='search__results'>
            <SearchFilterColumn />
            <ItemBoxes />
        </div>
    </div>
)

export default SearchPage;
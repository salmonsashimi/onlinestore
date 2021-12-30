import SearchSortingBar from '../components/searchComponents/SearchSortingBar';
import ItemBoxes from '../components/searchComponents/ItemBoxes';
import SearchFilterColumn from '../components/searchComponents/SearchfilterColumn';

const SearchPage = () => (
    <div>
        <SearchSortingBar />
        <div>
            <SearchFilterColumn />
            <ItemBoxes />
        </div>
    </div>
)

export default SearchPage;
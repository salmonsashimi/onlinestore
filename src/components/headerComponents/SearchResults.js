import SearchResult from './SearchResult';

const SearchResults = (props) => {
    const { results, onResultClick } = props;

    return (
        <div className='searchResults'>
            {
                results.map(result => <SearchResult result={result} onResultClick={onResultClick} />)
            }
        </div>
    )
}


export default SearchResults;
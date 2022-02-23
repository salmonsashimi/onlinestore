import SearchResult from './SearchResult';

const SearchResults = (props) => {
    const { results } = props;
    console.log('search results', results)
    return (
        <div className='searchResults'>
            {
                results.map(result => <SearchResult result={result} />)
            }
        </div>
    )
}


export default SearchResults;
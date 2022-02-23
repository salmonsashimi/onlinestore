const SearchResult = (props) => {
    const { result } = props;
    console.log(result)

    return (
        <p className='searchResult'>
            {result.name}
        </p>
    )
}

export default SearchResult;
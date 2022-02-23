const SearchResult = (props) => {
    const { result, onResultClick } = props;
    console.log(result)

    return (
        <p className='searchResult' onMouseDown={() => onResultClick(result.id)}>
            { result.name}
        </p >
    )
}

export default SearchResult;
const SearchFilterBar = () => (
    <div className='searchFilterBar container'>
        <div className='sortBy'>
            <label for='sortBy'>Sort By</label>
            <select name='sortBy'>
                <option>Latest</option>
                <option>Popularity</option>
                <option>Price high to low</option>
                <option>Price high to low</option>
            </select>
        </div>
    </div>
)

export default SearchFilterBar;
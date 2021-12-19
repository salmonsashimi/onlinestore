const SearchFilterBar = () => (
    <div className='searchFilterBar'>
        <label for='sortBy'>Sort By</label>
        <select name='sortBy'>
            <option>Popularity</option>
            <option>Price low to high</option>
            <option>Price high to low</option>
            <option>Price high to low</option>
        </select>



    </div>
)

export default SearchFilterBar;
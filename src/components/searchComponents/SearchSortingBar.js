const SearchSortingBar = (props) => (
    <div className='searchSortingBar'>
        <h3>Search &gt; {props.slug}</h3>
        <div className='sortBy'>
            <label className='sortBy__label' for='sortBy'>Sort By</label>
            <select className='sortBy__select' name='sortBy'>
                <option>Latest</option>
                <option>Popularity</option>
                <option>Price high to low</option>
                <option>Price low to low</option>
            </select>
        </div>
    </div>
)

export default SearchSortingBar;
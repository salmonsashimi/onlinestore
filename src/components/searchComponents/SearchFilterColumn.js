import FilterCategoryHead from './FilterCategoryHead';

const SearchFilterColumn = () => (
    <div className='searchFilterColumn'>
        <h3 className='searchFilterColumn__header'>Filter by</h3>
        <FilterCategoryHead />
        <FilterCategoryHead />
    </div>
)

export default SearchFilterColumn;
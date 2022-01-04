import FilterCategoryHead from './FilterCategoryHead';

const SearchFilterColumn = (props) => (
    <div className='searchFilterColumn'>
        <h3 className='searchFilterColumn__header'>Filter by</h3>
        {props.categories.map((category) =>
            <FilterCategoryHead category={category} />
        )}

    </div>
)

SearchFilterColumn.defaultProps = {
    categories: [
        {
            name: 'Color',
            dropdown: ['Brown', 'Black', 'Red', 'Yellow', 'Purple', 'Pink', 'White']
        },
        {
            name: 'Occasion',
            dropdown: ['Active', 'Casual', 'Formal', 'Summer', 'Workwear']
        },
        {
            name: 'Material',
            dropdown: ['Blend', 'Cotton', 'Nylon', 'Wool', 'Polyester']
        }
    ]
}

export default SearchFilterColumn;
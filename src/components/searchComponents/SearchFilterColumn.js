import FilterCategoryHead from './FilterCategoryHead';

const SearchFilterColumn = (props) => (
    <div className='searchFilterColumn'>
        <h3 className='searchFilterColumn__header'>Filter by</h3>
        {props.map(category => (
            <FilterCategoryHead category={category} />
        ))}

    </div>
)

SearchFilterColumn.defaultProps = {
    Color: ['Brown', 'Black', 'Red', 'Yellow', 'Purple', 'Pink', 'White'],
    Occasion: ['Active', 'Casual', 'Formal', 'Summer', 'Workwear'],
    Material: ['Blend', 'Cotton', 'Nylon', 'Wool', 'Polyester']
}

export default SearchFilterColumn;
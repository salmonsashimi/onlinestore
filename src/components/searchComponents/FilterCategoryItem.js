const FilterCategoryItem = (props) => (
    <div className='filterCategoryItem'>
        <label className='filterCateogryItem__label'>
            <input className='filterCateogryItem__checkbox' type='checkbox' name={props.item} value={props.item} />
            {props.item}
        </label>
    </div>
)

export default FilterCategoryItem;
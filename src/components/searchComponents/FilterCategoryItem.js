const FilterCategoryItem = (props) => (
    <div className='filterCategoryItem'>
        <input type='checkbox' name={props.item} value={props.item} />
        <label className='filterCateogryItem__label'>{props.item}</label>
    </div>
)

export default FilterCategoryItem;
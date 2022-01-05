import { useState } from 'react';
import FilterCateogryItem from './FilterCategoryItem';

const FilterCategoryHead = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='filterCategoryHead'>
            <button className='filterCategoryHead__button' onClick={() => setIsOpen(!isOpen)}>{props.category.name}</button>
            <div className={
                `filterCategoryHead__content ${isOpen ? 'filterCategoryHead__contentShow' : null}`
            } >
                {props.category.dropdown.map(item => (
                    <FilterCateogryItem item={item} />
                ))}
            </div>
        </div>
    )
}

export default FilterCategoryHead;
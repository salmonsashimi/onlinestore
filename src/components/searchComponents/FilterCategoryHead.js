import { useState } from 'react';

const FilterCategoryHead = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='filterCategoryHead'>
            <button className='filterCategoryHead__button' onClick={() => setIsOpen(!isOpen)}>{props.category.name}</button>
            <div className={
                `filterCategoryHead__content ${isOpen ? 'filterCategoryHead__contentShow' : null}`
            } >
                {props.category.dropdown.map(item => (
                    <p>{item}</p>
                ))}
            </div>
        </div>
    )
}

export default FilterCategoryHead;
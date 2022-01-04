import { useState } from 'react';

const FilterCategoryHead = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='filterCategoryHead'>
            <button className='filterCategoryHead__button' onClick={() => setIsOpen(!isOpen)}>open</button>
            <div className={
                `filterCategoryHead__content ${isOpen ? 'filterCategoryHead__contentShow' : null}`
            } >
                {props.categories}
            </div>
        </div>
    )
}

export default FilterCategoryHead;
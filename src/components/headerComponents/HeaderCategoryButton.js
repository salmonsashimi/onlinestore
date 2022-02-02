import { useState } from 'react';

const HeaderCategoryButton = (props) => {

    const [over, setOver] = useState();



    return (
        <div className='headerCategoryButton'>
            <p className={`headerCategoryButton__button ${over}`} onMouseOver={() => setOver('active')} onMouseOut={() => setOver(null)}>{props.category.name}</p>
            <div className='headerCategoryButton__dropdown' onMouseOver={() => setOver('active')} onMouseOut={() => setOver(null)}>
                {props.category.dropdown.map((item) => (
                    <a className='headerCategoryButton__item' key={item}>{item}</a>
                ))}
            </div>
        </div>
    )
}

export default HeaderCategoryButton;
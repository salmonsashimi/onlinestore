const HeaderCategoryButton = (props) => (
    <div className='headerCategoryButton'>
        <p className='headerCategoryButton__button'>{props.category.name}</p>
        <div className='headerCategoryButton__dropdown'>
            {props.category.dropdown.map((item) => (
                <a className='headerCategoryButton__item' key={item}>{item}</a>
            ))}
        </div>
    </div>
)

export default HeaderCategoryButton;
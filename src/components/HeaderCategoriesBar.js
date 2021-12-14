import HeaderCategoryButton from './HeaderCategoryButton';

const HeaderCategoriesBar = (props) => (
    <div className='headerCategoriesBar'>
        <div className='container headerCategoriesBar__content'>
            {props.categories.map((category) =>
                <HeaderCategoryButton category={category} />
            )}
        </div>
    </div>
)

HeaderCategoriesBar.defaultProps = {
    categories: [
        {
            name: 'Sale',
            dropdown: ['hello', 'bue']
        }
        ,
        {
            name: 'Latest',
            dropdown: ['aisdfjioajsf,asdfasf', 'asdfasdfds']
        },
        {
            name: 'Clothing',
            dropdown: ['aisdfjioajsf,asdfasf']
        },
        {
            name: 'Shoes',
            dropdown: ['aisdfjioajsf,asdfasf']
        },
        {
            name: 'Accessories',
            dropdown: ['aisdfjioajsf,asdfasf']
        },
        {
            name: 'Sportswear',
            dropdown: ['aisdfjioajsf,asdfasf']
        },
    ]
}

export default HeaderCategoriesBar;
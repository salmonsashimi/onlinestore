import HeaderCategoryButton from './HeaderCategoryButton';

const HeaderCategoriesBar = (props) => (
    <div className='headerCategoriesBar'>
        <div className='container headerCategoriesBar__content'>
            {props.categories.map((category) =>
                <HeaderCategoryButton category={category} key={category.name} />
            )}
        </div>
    </div>
)

HeaderCategoriesBar.defaultProps = {
    categories: [
        {
            name: 'Sale',
            dropdown: ['Promotions', 'Buy 1 get 1', 'Christmas Special']
        }
        ,
        {
            name: 'Latest',
            dropdown: ['New In', 'Trending now', 'Back in stock']
        },
        {
            name: 'Clothing',
            dropdown: ['Activewear', 'Hoodies & Sweatshirts', 'Jeans', 'Joggers', 'Shirt', 'Shorts', 'T-shirts']
        },
        {
            name: 'Shoes',
            dropdown: ['Boots', 'Loafers', 'Sandals', 'Trainers']
        },
        {
            name: 'Accessories',
            dropdown: ['Bags', 'Belts', 'Caps & Hats', 'Gloves', 'Sunglasses', 'Wallets']
        },
        {
            name: 'Sportswear',
            dropdown: ['Activewear', 'Joggers', 'Trainers']
        },
    ]
}

export default HeaderCategoriesBar;
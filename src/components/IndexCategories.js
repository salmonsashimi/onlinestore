import IndexCategory from './IndexCateogry';

const IndexCategories = (props) => (
    <div className='indexCategories'>
        {props.categories.map((category) =>
            <IndexCategory category={category} key={category.name} />
        )}
    </div>
)

IndexCategories.defaultProps = {
    categories: [
        {
            name: 'Spring',
            img: 'hello'
        },
        {
            name: 'Summer'
        },
        {
            name: 'Autumn'
        },
        {
            name: 'Winter'
        }
    ]
}


export default IndexCategories;
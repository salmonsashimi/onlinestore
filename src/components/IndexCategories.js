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
            img: 'https://picsum.photos/id/468/280/280'
        },
        {
            name: 'Summer',
            img: 'https://picsum.photos/id/199/280/280'
        },
        {
            name: 'Autumn',
            img: 'https://picsum.photos/id/413/280/280'
        },
        {
            name: 'Winter',
            img: 'https://picsum.photos/id/260/280/280'
        }
    ]
}


export default IndexCategories;
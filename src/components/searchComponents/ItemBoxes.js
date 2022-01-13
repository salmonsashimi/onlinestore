import ItemBox from './ItemBox';

const ItemBoxes = ({ items }) => {
    return (
        <div className='itemBoxes'>
            {items.map(item => (
                <ItemBox item={item} />
            ))}
        </div>
    )
}

export default ItemBoxes;
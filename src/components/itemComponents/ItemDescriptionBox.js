const ItemDescriptionBox = (props) => (
    <div className='itemDescriptionBox'>
        <h3 className='itemDescriptionBox__brand'>{props.data.brand}</h3>
        <h3 className='itemDescriptionBox__itemName'>{props.data.name}</h3>
        <h3 className='itemDescriptionBox__price'>${props.data.price}</h3>
        <h3 className='itemDescriptionBox__description'>{props.data.description}</h3>
        <button className='itemDescriptionBox__button'>ADD TO CART</button>
    </div>
)


export default ItemDescriptionBox;
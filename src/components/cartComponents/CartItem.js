const CartItem = (props) => (
    <div className='cartItem'>
        <img src={props.item.imgUrl} />
        <div className='cartItem__description'>
            <p>{props.item.brand}</p>
            <p>{props.item.name}</p>
            <p>{props.item.price}</p>
            <p>{props.item.quantity}</p>
        </div>
        <button className='cartItem__button'>X</button>
    </div>
)

export default CartItem;
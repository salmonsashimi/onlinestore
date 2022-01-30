const CartItem = (props) => (
    <div className='cartItem'>
        <img src={props.item.imgUrl} className='cartItem__img' />
        <div className='cartItem__description'>
            <p><span className='cartItem__description-brand'>{props.item.brand}</span> {props.item.name}</p>
            <p className='cartItem__description-price'>SGD{props.item.price}</p>
            <p>Qty: {props.item.quantity}</p>
        </div>
        <button className='cartItem__button'>X</button>
    </div>
)

export default CartItem;
const CartItem = (props) => {
    const { id, imgUrl, name, brand, price, quantity } = props.item;

    const removeItem = props.removeItem;

    return (
        <div className='cartItem'>
            <img src={imgUrl} className='cartItem__img' />
            <div className='cartItem__description'>
                <p><span className='cartItem__description-brand'>{brand}</span> {name}</p>
                <p className='cartItem__description-price'>SGD${price}</p>
                <p>Qty: {quantity}</p>
            </div>
            <button className='cartItem__button' onClick={() => { removeItem(id) }}>X</button>
        </div>
    )
}

export default CartItem;
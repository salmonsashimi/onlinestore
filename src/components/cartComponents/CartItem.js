import Link from 'next/link';

const CartItem = (props) => {
    const { id, imgUrl, name, brand, price, quantity } = props.item;

    const removeItem = props.removeItem;

    return (
        <div className='cartItem'>
            <Link href={`/item/${id}`}>
                <div className='cartItem__item'>
                    <img src={imgUrl} className='cartItem__img' />
                    <div className='cartItem__description'>
                        <p className='cartItem__description-name'><span className='cartItem__description-brand'>{brand}</span> {name}</p>
                        <p className='cartItem__description-price'>SGD${price}</p>
                        <p>Qty: {quantity}</p>
                    </div>
                </div>
            </Link>
            <button className='cartItem__button' onClick={() => { removeItem(id) }}>X</button>
        </div>
    )
}

export default CartItem;
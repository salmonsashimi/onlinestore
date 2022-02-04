import Link from 'next/link';

const CartDropdownItem = (props) => {

    const { id, imgUrl, name, brand, price, quantity } = props.item;
    return (
        <Link href={`/item/${id}`}>
            <div className='cartDropdownItem'>
                <img src={imgUrl} className='cartDropdownItem__img' />
                <div className='cartDropdownItem__desc'>
                    <p className='cartDropdownItem__desc-name'><span className='cartDropdownItem__desc-brand'>{brand}</span> {name}</p>
                    <p className='cartDropdownItem__desc-price'>SGD${price}</p>
                    <p>Qty: {quantity}</p>
                </div>
            </div>
        </Link>

    )
}

export default CartDropdownItem;
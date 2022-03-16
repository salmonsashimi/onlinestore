import Link from 'next/link';
import { IoTrashBinOutline } from 'react-icons/io5';

const CartDropdownItem = (props) => {

    const { id, imgUrl, name, brand, price, quantity } = props.item;
    const removeItem = props.removeItem;

    return (
        <div className='cartDropdownItem'>
            <Link href={`/item/${id}`}>
                <div className='cartDropdownItem__item'>
                    <img src={imgUrl} className='cartDropdownItem__img' />
                    <div className='cartDropdownItem__desc'>
                        <p className='cartDropdownItem__desc-name'><span className='cartDropdownItem__desc-brand'>{brand}</span> {name}</p>
                        <p className='cartDropdownItem__desc-price'>SGD${price}</p>
                        <p>Qty: {quantity}</p>
                    </div>
                </div>
            </Link>
            <button className='cartDropdownItem__delete' onClick={() => removeItem(id)}><IoTrashBinOutline size='1.5em' /></button>


        </div>

    )
}

export default CartDropdownItem;
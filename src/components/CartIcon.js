import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = () => (
    <div className='cartIcon'>
        <Link href='/cart'><FaShoppingCart size='1.5em' className='cartIcon__button' /></Link>
        <div className='cartIcon__dropdown'>
            <a href='#'>a</a>
            <a href='#'>c</a>
            <a href='#'>b</a>
        </div>
    </div>
)

export default CartIcon;
import Link from 'next/link';

const CartEmpty = () => (
    <div className='cartEmpty'>
        <h3 className='cartEmpty__header'>YOUR CART IS EMPTY</h3>
        <Link href='/'>
            <a className='cartEmpty__button'>SHOP NOW</a>
        </Link>
    </div>
)

export default CartEmpty;
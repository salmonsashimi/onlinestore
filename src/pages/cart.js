import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartFilled from '../components/cartComponents/CartFilled'
import CartEmpty from '../components/cartComponents/CartEmpty'

const Cart = () => {
    const context = useContext(CartContext);
    const items = context.cart.length;

    return (
        <div className='cart'>
            {items !== 0 ? <CartFilled /> : <CartEmpty />}
        </div>
    )

}


export default Cart;
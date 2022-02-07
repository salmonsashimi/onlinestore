import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';

const CartItems = () => {
    const cartContext = useContext(CartContext);
    const items = cartContext.cart;
    const removeItem = cartContext.removeItem;
    return (
        <div className='cartItems'>
            {
                items.length ?
                    items.map(item => <CartItem item={item} removeItem={removeItem} />)
                    :
                    <p>You have no items</p>
            }
        </div>
    )
}

export default CartItems;
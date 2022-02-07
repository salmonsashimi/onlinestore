import { useContext } from 'react';
import CartItem from './CartItem';
import { CartContext } from '../../contexts/CartContext';

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
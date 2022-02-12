import { useContext } from 'react';
import CartItem from './CartItem';
import { CartContext } from '../../contexts/CartContext';

const CartItems = () => {
    const cartContext = useContext(CartContext);
    const items = cartContext.cart;
    const removeItem = cartContext.removeItem;
    return (
        <div className='cartItems'>
            <h3 className='cartItems__header'>MY CART</h3>
            <div>
                {
                    items.length ?
                        items.map(item => <CartItem item={item} removeItem={removeItem} />)
                        :
                        <p>You have no items</p>
                }
            </div>
        </div>
    )
}

export default CartItems;
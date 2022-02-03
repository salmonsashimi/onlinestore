import { Component } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';

class CartItems extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let items = this.context.cart;
        let removeItem = this.context.removeItem;

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
}


CartItems.contextType = CartContext;

export default CartItems;
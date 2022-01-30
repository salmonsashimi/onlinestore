import { Component } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';

class CartItems extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        let items = this.context.cart;

        return (
            <div>
                {items.length ?
                    items.map(item => (
                        <CartItem item={item} />
                    ))

                    :
                    <p>You have no items</p>
                }
            </div>
        )
    }
}


CartItems.contextType = CartContext;

export default CartItems;
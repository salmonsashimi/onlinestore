import { Component } from 'react';
import CartItems from '../components/cartComponents/CartItems';
import { CartContext } from '../contexts/CartContext';

class Cart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const cartItems = this.context.cart;
        console.log(cartItems.length);


        return (
            <div className='cart'>
                <CartItems />

            </div>
        )
    }

}

Cart.contextType = CartContext;



export default Cart;
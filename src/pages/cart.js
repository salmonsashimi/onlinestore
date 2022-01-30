import { Component } from 'react';
import CartItems from '../components/cartComponents/CartItems';
import CartSummary from '../components/cartComponents/CartSummary';
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
                <CartSummary />

            </div>
        )
    }

}

Cart.contextType = CartContext;



export default Cart;
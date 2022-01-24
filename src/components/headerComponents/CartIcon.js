import { Component } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../contexts/CartContext';

class CartIcon extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const cartItems = this.context.cart;
        console.log(cartItems)

        return (
            <div className='cartIcon'>
                <Link href='/cart'><FaShoppingCart size='1.5em' className='cartIcon__button' /></Link>
                <div className='cartIcon__dropdown'>
                    {cartItems ?
                        this.context.cart.map(item => (
                            <a href='#'> {item}</a>
                        ))
                        :
                        <a href='#'>Your cart is empty.</a>
                    }

                </div>
            </div>
        )
    }
}

CartIcon.contextType = CartContext;

export default CartIcon;
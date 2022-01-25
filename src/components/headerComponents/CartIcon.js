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
        console.log(cartItems.length)

        return (
            <div className='cartIcon'>
                <Link href='/cart'><FaShoppingCart size='1.5em' className='cartIcon__button' /></Link>
                <div className='cartIcon__dropdown cartIcon__border'>
                    <h3 className='cartIcon__dropdown-header'>My Cart, <span className='cartItem__dropdown-itemNo'>{cartItems.length} item(s)</span></h3>
                    {cartItems.length !== 0 ?
                        cartItems.map(item => (
                            <a href='#'> {item}</a>
                        ))
                        :
                        <a>Cart is empty</a>
                    }
                    <div className='cartIcon__priceSection'>
                        <h3 className='cartIcon__dropdown-subtotal'>Subtotal:</h3>
                        <h3 className='cartIcon__dropdown-price'>$00.00</h3>
                    </div>
                    <div className='cartIcon__dropdown-buttons'>
                        <button className='cartIcon__dropdown-button'>VIEW CART</button>
                        <button className='cartIcon__dropdown-button'>CHECKOUT</button>
                    </div>
                </div>
            </div>
        )
    }
}

CartIcon.contextType = CartContext;

export default CartIcon;
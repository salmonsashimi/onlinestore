import { useContext, useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../contexts/CartContext';
import CartDropdownItem from './CartDropdownItem';

const CartIcon = () => {
    const context = useContext(CartContext);
    const { cart, removeItem, showCart, setShowCart } = context;
    let totalPrice = 0;

    return (
        <div
            className='cartIcon'
            onMouseOver={() => { setShowCart(true) }}
            onMouseLeave={() => { setShowCart(false) }}
        >
            <Link href='/cart'>
                <FaShoppingCart size='1.5em' className='cartIcon__button' />
            </Link>

            <div className={`
            cartIcon__dropdown ${showCart && 'cartIcon__showDropdown'}`}>
                <h3 className='cartIcon__dropdown-header'>My Cart, <span className='cartItem__dropdown-itemNo'>{cart.length} item(s)</span></h3>
                <div className='cartIcon__cartDropdownItems'>
                    {cart.length !== 0 ?
                        cart.map(item => {
                            totalPrice += item.price;
                            return (
                                <CartDropdownItem item={item} removeItem={removeItem} />
                            )
                        })
                        :
                        <p>Cart is empty</p>
                    }
                </div>
                <div className='cartIcon__priceSection'>
                    <h3 className='cartIcon__dropdown-subtotal'>Subtotal:</h3>
                    <h3 className='cartIcon__dropdown-price'>${totalPrice}</h3>
                </div>
                <div className='cartIcon__dropdown-buttons'>
                    <Link href='/cart'>
                        <button className='cartIcon__dropdown-button cartIcon__dropdown-viewCart'>VIEW CART</button>
                    </Link>
                    <button className='cartIcon__dropdown-button cartIcon__dropdown-checkout'>CHECKOUT</button>
                </div>
            </div>
        </div>
    )

}

export default CartIcon;

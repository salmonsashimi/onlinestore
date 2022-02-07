import { useContext } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../contexts/CartContext';
import CartDropdownItem from './CartDropdownItem';


const CartIcon = () => {
    const cartItems = useContext(CartContext).cart;
    let totalPrice = 0;

    return (
        <div className='cartIcon'>
            <Link href='/cart'><FaShoppingCart size='1.5em' className='cartIcon__button' /></Link>
            <div className={`cartIcon__dropdown cartIcon__border cartIcon__showDropdown`}>
                <h3 className='cartIcon__dropdown-header'>My Cart, <span className='cartItem__dropdown-itemNo'>{cartItems.length} item(s)</span></h3>
                <div className='cartIcon__cartDropdownItems'>
                    {cartItems.length !== 0 ?
                        cartItems.map(item => {
                            totalPrice += item.price;
                            return (
                                <CartDropdownItem item={item} />
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
                    <button className='cartIcon__dropdown-button cartIcon__dropdown-viewCart'>VIEW CART</button>
                    <button className='cartIcon__dropdown-button cartIcon__dropdown-checkout'>CHECKOUT</button>
                </div>
            </div>
        </div>
    )

}

export default CartIcon;
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CartSummary = () => {

    const context = useContext(CartContext);
    console.log(CartContext)
    let { cart, price, token } = context;

    const onCheckout = async (e) => {
        e.preventDefault()

        const checkoutInfo = {
            token,
            cart
        }

        //fetching login info 
        const response = await fetch('http://localhost:3000/api/orders/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(checkoutInfo)
        })

    }

    return (
        <form className='cartSummary'>
            <h1 className='cartSummary__header'>Total</h1>
            <div className='cartSummary__subtotal'>
                <h3 className='cartSummary__subtotal-title'>Sub-total</h3>
                <h3 className='cartSummary__subtotal-price'>SGD${price}</h3>
            </div>
            <div className='cartSummary__delivery'>
                <h3 className='cartSummary__delivery-title'>Delivery</h3>
                <select className='cartSummary__delivery-options' name='delivery' id='delivery' >
                    <option value='standard'>Standard (Free)</option>
                    <option value='express'>Express ($50.00)</option>
                </select>
            </div>
            <div className='cartSummary__buttonDiv'>
                <button className='cartSummary__button' onClick={onCheckout}>CHECKOUT</button>
            </div>
        </form>
    )
}
export default CartSummary;
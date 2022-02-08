
const CartSummary = () => {

    const formSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className='cartSummary'>
            <h1 className='cartSummary__header'>Total</h1>
            <div className='cartSummary__promoCode'>
                <h3 className='cartSummary__promoCode-label'>PROMO CODE: </h3>
                <input className='cartSummary__promoCode-input' name='discount' id='discount' type='text' placeholder='Enter Promo Code'></input>
                <button className='cartSummary__promoCode-button' >APPLY</button>
            </div>
            <div className='cartSummary__delivery'>
                <label className='cartSummary__delivery-label' for='delivery'>DELIVERY:</label>
                <select className='cartSummary__delivery-options' name='delivery' id='delivery' >
                    <option value='standard'>Standard Delivery (Free)</option>
                    <option value='express'>Express Delivery ($10.00)</option>
                </select>
            </div>
            <h3>Sub-total</h3>
            <button className='cartSummary__button'>CHECKOUT</button>
        </form>
    )
}
export default CartSummary;
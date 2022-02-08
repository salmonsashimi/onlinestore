
const CartSummary = () => {

    const formSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className='cartSummary'>
            <h1 className='cartSummary__header'>Total</h1>

            <form className='cartSummary__promoCode' onSubmit={(e) => formSubmit(e)}>
                <h3 className='cartSummary__promoCode-label'>PROMO CODE: </h3>
                <div>
                    <input className='cartSummary__promoCode-input' name='discount' id='discount' type='text' placeholder='Enter Promo Code'></input>
                    <button className='cartSummary__promoCode-button' >APPLY</button>
                </div>
            </form>
            <div className='cartSummary__input'>
                <label for='delivery'>Delivery</label>
                <select name='delivery' id='delivery' >
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
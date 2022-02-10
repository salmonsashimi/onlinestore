
const CartSummary = () => {

    const formSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className='cartSummary'>
            <h1 className='cartSummary__header'>Total</h1>
            <div className='cartSummary__subtotal'>
                <h3 className='cartSummary__subtotal-title'>Sub-total</h3>
                <h3 className='cartSummary__subtotal-price'>SGD$10000.00</h3>
            </div>
            <div className='cartSummary__delivery'>
                <h3 className='cartSummary__delivery-title'>Delivery</h3>
                <select className='cartSummary__delivery-options' name='delivery' id='delivery' >
                    <option value='standard'>Standard (Free)</option>
                    <option value='express'>Express ($50.00)</option>
                </select>
            </div>
            <div className='cartSummary__buttonDiv'>
                <button className='cartSummary__button'>CHECKOUT</button>
            </div>
        </form>
    )
}
export default CartSummary;
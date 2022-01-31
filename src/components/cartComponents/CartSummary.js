
const CartSummary = () => (
    <form className='cartSummary'>
        <h1 className='cartSummary__header'>Total</h1>
        <div>
            <label for='delivery'>Delivery</label>
            <select name='delivery' id='delivery' >
                <option value='standard'>Standard Delivery (Free)</option>
                <option value='express'>Express Delivery ($10.00)</option>
            </select>
        </div>
        <div>
            <label for='discount'>Discount Code: </label>
            <input name='discount' id='discount' type='text'></input>
        </div>
        <h3>Sub-total</h3>
        <button>CHECKOUT</button>
    </form>
)

export default CartSummary;
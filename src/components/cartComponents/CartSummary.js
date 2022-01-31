
const CartSummary = () => (
    <form>
        <h1>Total</h1>
        <label for='delivery'>Delivery</label>
        <select name='delivery' id='delivery' >
            <option value='standard'>Standard Delivery (Free)</option>
            <option value='express'>Express Delivery ($10.00)</option>
        </select>
        <label for='discount'>Discount Code: </label>
        <input name='discount' id='discount' type='text'></input>
        <h3>Sub-total</h3>
        <button>CHECKOUT</button>
    </form>
)

export default CartSummary;
import CartItems from '../components/cartComponents/CartItems';
import CartSummary from '../components/cartComponents/CartSummary';

const Cart = () => (
    <div className='cart'>
        <CartItems />
        <CartSummary />
    </div>
)

export default Cart;
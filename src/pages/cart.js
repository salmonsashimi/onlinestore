import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Layout from '../components/Layout';
import CartFilled from '../components/cartComponents/CartFilled'
import CartEmpty from '../components/cartComponents/CartEmpty'

const Cart = () => {
    const context = useContext(CartContext);
    const items = context.cart.length;

    return (
        <div className='cart'>
            {items !== 0 ? <CartFilled /> : <CartEmpty />}
        </div>
    )

}

Cart.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}


export default Cart;
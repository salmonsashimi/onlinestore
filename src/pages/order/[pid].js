import Layout from '../../components/Layout';
import OrderItem from '../../components/orderComponents/OrderItem';

const CheckoutPage = ({ data }) => {
    const { _id, items, totalPrice, delivery } = data;
    console.log(data)
    console.log(_id)

    return (
        <div className='order container'>
            <h1 className='order__header'>ORDER SUMMARY</h1>
            <div className='order__components'>
                <div className='order__topComponents'>
                    <p className='order__topComponents-reference'>ORDER REFERENCE: {_id}</p>
                    <p className='order__topComponents-itemNo'>TOTAL ITEMS: {items.length}</p>
                </div>
                <div className='order__items'>
                    {items.map(item => <OrderItem item={item} />)}

                </div>
                <div className='order__prices'>

                    <div className='order__pricing'>
                        <h3 className='order__pricing-text'>SUBTOTAL:</h3>
                        <h3 className='order__pricing-textPrice'>${totalPrice}</h3>
                    </div>
                    <div className='order__pricing'>
                        <h3 className='order__pricing-text'>DELIVERY:</h3>
                        <h3 className='order__pricing-textPrice'>{delivery === 'standard' ? 'Standard (Free)' : 'Express ($50.00)'}</h3>
                    </div>
                    <div className='order__pricing'>
                        <h3 className='order__pricing-text'>TOTAL:</h3>
                        <h3 className='order__pricing-textPrice'>${totalPrice}</h3>
                    </div>
                </div>
            </div>

            <button className='order__button'>RETURN TO MAIN</button>
        </div>
    )
}


export async function getServerSideProps(context) {
    const { pid } = context.query;
    const res = await fetch(`http://localhost:3000/api/orders/get/${pid}`);
    const data = await res.json();

    if (!data) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
    }
}

CheckoutPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default CheckoutPage;

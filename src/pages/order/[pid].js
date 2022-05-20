import Layout from '../../components/Layout';

const CheckoutPage = ({ data }) => {
    const { _id, items, totalPrice, deliveryMethod } = data;
    console.log(data)
    console.log(_id)

    return (
        <div className='order container'>
            <h1 className='order__header'>ORDER SUMMARY</h1>
            <div className='order__components'>
                <div className='order__left'>
                    <p>ORDER NUMBER: {_id}</p>
                    <h1>items</h1>
                </div>
                <div className='right'>
                    <h1>subtotal: ${totalPrice}</h1>
                    <h1>shipping</h1>
                    <h1>total cost</h1>
                </div>
            </div>
            <button>Return to Main</button>
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

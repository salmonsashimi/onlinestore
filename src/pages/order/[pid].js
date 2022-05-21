import Layout from '../../components/Layout';

const CheckoutPage = ({ data }) => {
    const { _id, items, totalPrice, delivery } = data;
    console.log(data)
    console.log(_id)

    return (
        <div className='order container'>
            <h1 className='order__header'>ORDER SUMMARY</h1>
            <div className='order__components'>

                <p>ORDER REFERENCE: {_id}</p>
                <h3>ORDER ITEMS</h3>
                {items.map(item => <p>{item.name}</p>)}


                <h3>SUBTOTAL:</h3>
                <h2>${totalPrice}</h2>
                <h3>DELIVERY:</h3>
                <h2>{delivery === 'standard' ? 'Standard (Free)' : 'Express ($50.00'}</h2>
                <h3>TOTAL:</h3>
                <h2> ${totalPrice}</h2>
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

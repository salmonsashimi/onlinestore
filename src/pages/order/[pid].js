import Layout from '../../components/Layout';

const CheckoutPage = ({ data }) => {
    const { _id, items, totalPrice, deliveryMethod } = data;
    console.log(data)
    console.log(_id)

    return (
        <div>
            <h1>Order Summary header</h1>
            <p>ORDER NUMBER: {_id}</p>
            <h1>Total Cost: ${totalPrice}</h1>
            <h1>items</h1>
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

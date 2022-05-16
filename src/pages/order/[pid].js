import Layout from '../../components/Layout';

const CheckoutPage = (infoc) => {
    console.log('into', infoc)
    return (
        <div>
            <h1>Order Summary header</h1>
            <p>order number</p>
            <h1>price</h1>
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

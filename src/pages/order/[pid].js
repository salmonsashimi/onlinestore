import Layout from '../../components/Layout';

const CheckoutPage = () => {
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

CheckoutPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default CheckoutPage;

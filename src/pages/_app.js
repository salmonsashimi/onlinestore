// import App from 'next/app'
import Layout from '../components/Layout';
import { CartProvider } from '../contexts/CartContext';
import 'normalize.css';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
    return (
        <CartProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </CartProvider>
    )

}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
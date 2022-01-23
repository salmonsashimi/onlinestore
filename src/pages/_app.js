// import App from 'next/app'
import Header from '../components/headerComponents/Header';
import Footer from '../components/footerComponents/Footer';
import { CartProvider } from '../contexts/CartContext';
import 'normalize.css';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
    return (
        <CartProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
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
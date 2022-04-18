import { useContext, useEffect } from 'react';
import { CartProvider } from '../contexts/CartContext';
import { CartContext } from '../contexts/CartContext';

import 'normalize.css';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page)

    return (
        <CartProvider>
            <TokenHandler />
            {
                getLayout(<Component {...pageProps} />)
            }
        </CartProvider>
    )

}

const TokenHandler = () => {

    const context = useContext(CartContext);
    const { setToken } = context
    useEffect(() => {
        const tokenString = sessionStorage.getItem('token');
        setToken(JSON.parse(tokenString));
    }, [])

    return null;
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
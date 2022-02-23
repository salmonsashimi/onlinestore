import Header from './headerComponents/Header';
import Footer from './footerComponents/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;
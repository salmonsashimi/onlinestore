import Link from 'next/link';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container navbar__content'>
                <Link href='/'><h1 className='navbar__logo'>Marketplace</h1></Link>
                <SearchBar />
                <CartIcon />
            </div>
        </div>
    )
}

export default Navbar;
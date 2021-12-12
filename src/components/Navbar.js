import Link from 'next/link';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';
import SignInBar from './SignInBar';

const NavBar = () => {
    return (
        <div className='navbar'>
            <SignInBar />
            <div className='container navbar__content'>
                <Link href='/'><h1 className='navbar__logo'>Marketplace</h1></Link>
                <SearchBar />
                <CartIcon />
            </div>
        </div>
    )
}

export default NavBar;

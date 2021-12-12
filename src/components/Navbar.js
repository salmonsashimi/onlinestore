import Link from 'next/link';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='container navbar__content'>
                <Link href='/'><h1 className='navbar__logo'>OPAL</h1></Link>
                <SearchBar />
                <CartIcon />
            </div>
        </div>
    )
}

export default NavBar;

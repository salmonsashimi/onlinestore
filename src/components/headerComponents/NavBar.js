import Link from 'next/link';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';
import { useEffect } from 'react';

const NavBar = (props) => {

    useEffect(() => {
        fetch('http://localhost:3000/api/retrieveItems')
            .then((res) => res.json())
            .then((data) => {
                console.log('data', data)
            })
    })

    return (
        <div className='navbar'>
            <div className='container navbar__content'>
                <Link href='/'><h1 className='navbar__logo'>NAVY</h1></Link>
                <SearchBar results={props.data} />
                <CartIcon />
            </div>
        </div>
    )
}



export default NavBar;

import { useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';
import { useEffect } from 'react';

const NavBar = (props) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/retrieveItems')
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });
    }, [])

    return (
        <div className='navbar'>
            <div className='container navbar__content'>
                <Link href='/'><h1 className='navbar__logo'>NAVY</h1></Link>
                <SearchBar allItems={items} />
                <CartIcon />
            </div>
        </div>
    )
}



export default NavBar;

import Link from 'next/link';
import TextInput from './TextInput';

const Navbar = () => {


    return (
        <div className='navbar-background'>
            <div className='container navbar'>
                <Link href='/'><h1 className='navbar-logo'>Logo</h1></Link>
                <TextInput />
                <Link href='/user'><h1>User page</h1></Link>
            </div>
        </div>
    )
}


export default Navbar;
import Link from 'next/link';
import TextInput from './TextInput';
import Icons from './Icons';

const Navbar = () => {

    return (
        <div className='navbar'>
            <div className='container navbar__content'>
                <Link href='/'><h1 className='navbar__logo'>Logo</h1></Link>
                <TextInput />
                <Icons />
            </div>
        </div>
    )
}


export default Navbar;
import Head from 'next/head';
import NavBar from './NavBar'
import SignInBar from './SignInBar';
import HeaderCategoriesBar from './HeaderCategoriesBar';

const Header = () => (
    <div className='header'>
        <Head>
            <title>NAVY | Fashion & Lifestyle Shopping Online</title>
        </Head>
        <SignInBar />
        <NavBar />
        <HeaderCategoriesBar />
    </div>
)

export default Header;
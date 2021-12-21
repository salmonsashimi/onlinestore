import NavBar from './NavBar'
import SignInBar from './SignInBar';
import HeaderCategoriesBar from './HeaderCategoriesBar';

const Header = () => (
    <div className='header'>
        <SignInBar />
        <NavBar />
        <HeaderCategoriesBar />
    </div>
)

export default Header;
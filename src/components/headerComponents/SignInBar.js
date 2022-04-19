import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Link from 'next/link'

const SignInBar = () => {
    const context = useContext(CartContext);
    const { token } = context;

    return (
        <div className='signInBar'>
            <div className='container signInBar__content'>
                <div className='signInBar__left'>
                    <p className='signInBar__link'>FACEBOOK</p>
                    <p className='signInBar__link'>INSTAGRAM</p>
                    <p className='signInBar__link'>YOUTUBE</p>
                </div>
                <div className='signInBar__right'>
                    <p className='signInBar__link'>TRACK MY ORDER</p>

                    {!token ?
                        <>
                            <Link href='/register'><p className='signInBar__link'>SIGN UP</p></Link>
                            <Link href='/login'><p className='signInBar__link'>LOG IN</p></Link>
                        </>
                        :
                        <>
                            <Link href='/user'><p className='signInBar__link'>USER PAGE</p></Link>
                            <Link href='/logout'><p className='signInBar__link'>LOG OUT</p></Link>
                        </>

                    }

                </div>
            </div>
        </div>
    )
}

export default SignInBar;
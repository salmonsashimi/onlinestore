import { useState } from 'react';
import Head from 'next/head';
import LoginHeader from '../components/loginComponents/LoginHeader';
import LoginLinks from '../components/loginComponents/LoginLinks';

const LoginPage = () => {
    const [password, setPassword] = useState('')

    return (
        <div className='login'>
            <Head>
                <title>NAVY | Sign In</title>
            </Head>
            <LoginHeader />
            <div className='login__component'>
                <LoginLinks page='login' />
                <form className='login__form'>
                    <div className='login__input'>
                        <p className='login__input-header'>EMAIL ADDRESS:</p>
                        <input type='text' className='login__input-input' />
                    </div>
                    <div className='login__input'>
                        <p className='login__input-header'>PASSWORD:</p>
                        <div className='login__input-passwordWrapper'>
                            <input type='password' className='login__input-input login__input-passwordInput' onChange={(e) => setPassword(e.target.value)} value={password} />
                            <button className={`login__input-passwordButton ${password && 'login__input-passwordButtonShow'}`}>SHOW</button>
                        </div>
                    </div>
                    <button className='login__button'>SIGN IN</button>
                    <p className='login__forgotPassword'>FORGOT PASSWORD?</p>

                </form>

            </div>
        </div>)
}

export default LoginPage;
import { useState } from 'react';
import Head from 'next/head';
import LoginHeader from '../components/loginComponents/LoginHeader';
import LoginLinks from '../components/loginComponents/LoginLinks';
import PasswordInput from '../components/loginComponents/PasswordInput';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        const loginInfo = {
            email,
            password
        }
        console.log('email: ', email)
        console.log('password: ', password)
        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        }).then(data => data.json())
    }


    return (
        <div className='login'>
            <Head>
                <title>NAVY | Sign In</title>
            </Head>
            <LoginHeader />
            <div className='login__component'>
                <LoginLinks page='login' />
                <form className='login__form' onSubmit={handleLogin}>
                    <div className='login__input'>
                        <p className='login__input-header'>EMAIL ADDRESS:</p>
                        <input name='email' type='text' className='login__input-input' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='login__input'>
                        <p className='login__input-header'>PASSWORD:</p>
                        <PasswordInput password={password} setPassword={setPassword} />
                    </div>
                    <button type='submit' className='login__button'>SIGN IN</button>
                    <p className='login__forgotPassword'>FORGOT PASSWORD?</p>
                </form>

            </div>
        </div>)
}

export default LoginPage;
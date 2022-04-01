import { useState, useContext, useEffect } from 'react';
import Router from 'next/router';
import { CartContext } from '../contexts/CartContext';
import { GrCircleAlert } from 'react-icons/gr';
import Head from 'next/head';
import LoginHeader from '../components/loginComponents/LoginHeader';
import LoginLinks from '../components/loginComponents/LoginLinks';
import PasswordInput from '../components/loginComponents/PasswordInput';

const LoginPage = () => {
    const context = useContext(CartContext);
    const { token, setToken } = context;

    //redirect user if token exists.
    useEffect(() => {
        if (token) {
            Router.push('/')
        }
    }, [token])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const loginInfo = {
            email,
            password
        }

        //fetching login info 
        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
            .then(res =>
                res.json()
            )
            .then(data => {

                if (data.error) {
                    console.log(data.error)
                    setError(data.error)
                    // if (!res.ok) {
                    //     throw new Error('Network response was not ok')
                    // }
                } else {

                    sessionStorage.setItem('token', JSON.stringify(data))
                    setToken(data.token)
                }

            })
            .catch(error => {
                console.error('Error in login fetch', error)
            })


        // const tokenString = sessionStorage.getItem('token')
        // const token = JSON.parse(tokenString)
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
                    {error && <div className='login__form-error'><GrCircleAlert className='login__form-errorIcon' /><p className='login__form-errorText'>{error}</p></div>}

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
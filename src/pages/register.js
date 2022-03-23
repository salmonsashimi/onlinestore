import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import Head from 'next/head';
import Router from 'next/router';
import LoginHeader from '../components/loginComponents/LoginHeader';
import LoginLinks from '../components/loginComponents/LoginLinks';
import PasswordInput from '../components/loginComponents/PasswordInput';

const RegisterPage = () => {
    const context = useContext(CartContext);
    const { token, setToken } = context;

    //redirect user if token exists.
    useEffect(() => {
        if (token) {
            Router.push('/')
        }
    }, [token])

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleRegister = async (e) => {
        e.preventDefault();

        const registerInfo = {
            name,
            email,
            password
        }

        fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerInfo)
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok')
                }
                return res.json()
            })
            .then((userToken) => {
                sessionStorage.setItem('token', JSON.stringify(userToken))
                setToken(userToken.token)
            })
            .catch(error => {
                console.error('Error in register fetch', error)
            })
    }

    return (
        <div className='login'>
            <Head>
                <title>NAVY | Join NAVY</title>
            </Head>
            <LoginHeader />
            <div className='login__component'>
                <LoginLinks page='register' />

                <form className='login__form' onSubmit={handleRegister}>
                    <div className='login__input'>
                        <p className='login__input-header'>EMAIL ADDRESS:</p>
                        <input type='text' className='login__input-input' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <p className='login__input-displayText'>We'll send your order confirmation here.</p>

                    </div>
                    <div className='login__input'>
                        <p className='login__input-header'>NAME:</p>
                        <input type='text' className='login__input-input' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='login__input'>
                        <p className='login__input-header'>PASSWORD:</p>
                        <PasswordInput password={password} setPassword={setPassword} />
                        <p className='login__input-displayText'>Must be 10 or more characters.</p>
                    </div>
                    <div className='login__input'>
                        <p className='login__input-header'>CONTACT PREFERENCES:</p>
                        <div className='login__input-options'>
                            <label for='discounts' className='login__input-options-header'>DISCOUNTS AND SALES</label>
                            <input type='checkbox' id='discounts' name='discounts' className='login__input-options-checkbox' />
                        </div>
                        <div className='login__input-options'>
                            <label for='newStuff' className='login__input-options-header'>NEW STUFF</label>
                            <input type='checkbox' id='newStuff' name='newStuff' className='login__input-options-checkbox' />
                        </div>
                        <div className='login__input-options'>
                            <label for='exclusives' className='login__input-options-header'>YOUR EXCLUSIVES</label>
                            <input type='checkbox' id='exclusives' name='exclusives' className='login__input-options-checkbox' />
                        </div>
                    </div>

                    <button className='login__button'>JOIN NAVY</button>


                </form>
            </div>
        </div >
    )
}

export default RegisterPage;
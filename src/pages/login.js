import Head from 'next/head';
import LoginHeader from '../components/loginComponents/LoginHeader';
import LoginLinks from '../components/loginComponents/LoginLinks';

const LoginPage = () => {
    return (
        <div className='login'>
            <Head>
                <title>NAVY | Sign In</title>
            </Head>
            <LoginHeader />
            <div className='login__component'>
                <LoginLinks />
                <form className='login__form'>
                    <div className='login__email'>
                        <p className='login__email-header'>EMAIL ADDRESS:</p>
                        <input type='text' className='login__email-input' />
                    </div>
                    <div className='login__password'>
                        <p className='login__password-header'>PASSWORD:</p>
                        <input type='password' className='login__password-input' />
                    </div>
                    <button className='login__button'>SIGN IN</button>
                    <p className='login__forgotPassword'>FORGOT PASSWORD?</p>

                </form>

            </div>
        </div>)
}

export default LoginPage;
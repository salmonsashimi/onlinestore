import Head from 'next/head';
import LoginHeader from '../components/loginComponents/LoginHeader';
import LoginLinks from '../components/loginComponents/LoginLinks';

const RegisterPage = () => {


    return (
        <div className='login'>
            <Head>
                <title>NAVY | Join NAVY</title>
            </Head>
            <LoginHeader />
            <div className='login__component'>
                <LoginLinks />

                <form className='login__form'>
                    <div className='login__email'>
                        <p className='login__input-header'>EMAIL ADDRESS:</p>
                        <input type='text' className='login__input-input' />
                    </div>
                    <div className='login__email'>
                        <p className='login__input-header'>EMAIL ADDRESS:</p>
                        <input type='text' className='login__input-input' />
                    </div>
                    <div className='login__password'>
                        <p className='login__input-header'>PASSWORD:</p>
                        <input type='password' className='login__input-input' />
                    </div>
                    <button className='login__button'>JOIN NAVY</button>


                </form>
            </div>
        </div >
    )
}

export default RegisterPage;
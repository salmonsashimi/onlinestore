import Head from 'next/head';
const LoginBackground = ({ page }) => {
    return (
        <div className='login'>
            <Head>
                <title>NAVY | Sign In</title>
            </Head>
            <div className='login__header'>
                <h1 className='login__header-text'>WELCOME TO</h1>
                <div className='login__header-logo'>
                    <h1 className='login__header-logo-text'>NAVY</h1>
                </div>
            </div>
            <div className='login__component'>
                <div className='login__links'>
                    <a className='login__links-login'>LOGIN</a>
                    <a className='login__links-signUp'>SIGN IN</a>
                </div>
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
        </div>
    )
}

export default LoginBackground;
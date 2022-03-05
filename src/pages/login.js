const LoginPage = () => {
    return (
        <div className='login'>
            <div className='login__header'>
                <h1 className='login__header-text'>WELCOME TO</h1>
                <div className='login__header-logo'>
                    <h1 className='login__header-logo-text'>NAVY</h1>
                </div>
            </div>
            <div className='login__component'>

                <div className='login__links'>
                    <a className='login__links-login'>LOGIN</a>
                    <a className='login__links-signUp'>SIGN UP</a>
                </div>
                <div>

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
                </div >
            </div>
        </div>
    )
}

export default LoginPage;
const LoginPage = () => {
    return (
        <div className='login'>
            <h1 className='login__header'>WELCOME TO</h1>
            <div className='login__logo'>
                <h1 className='login__logo-text'>NAVY</h1>
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
                <button>SIGN IN</button>
                <p>FORGOT PASSWORD?</p>

            </form>
            <p>or sign in with...</p>
        </div >
    )
}

export default LoginPage;
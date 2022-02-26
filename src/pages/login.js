const LoginPage = () => {
    return (
        <div>
            <h1>WELCOME TO</h1>
            <h1 className='loginPage__logo'>NAVY</h1>
            <form>
                <label>EMAIL ADDRESS:</label>
                <input type='text' />
                <label>PASSWORD:</label>
                <input type='password' />
                <button>SIGN IN</button>
                <a>FORGOT PASSWORD?</a>

            </form>
            <p>or sign in with...</p>
        </div>
    )
}

export default LoginPage;
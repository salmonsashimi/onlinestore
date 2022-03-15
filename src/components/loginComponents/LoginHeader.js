import Link from 'next/link';

const LoginHeader = () => (
    <div className='login__header'>
        <h1 className='login__header-text'>WELCOME TO</h1>
        <div className='login__header-logo'>
            <Link href='/'><h1 className='login__header-logo-text'>NAVY</h1></Link>
        </div>
    </div>
)

export default LoginHeader;
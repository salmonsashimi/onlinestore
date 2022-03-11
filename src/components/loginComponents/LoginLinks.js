import Link from 'next/link';

const LoginLinks = () => (
    <div className='login__links'>
        <Link href='/register'><a className='login__links-signUp'>SIGN UP</a></Link>
        <Link href='/login'><a className='login__links-login'>LOGIN</a></Link>
    </div>
)

export default LoginLinks;
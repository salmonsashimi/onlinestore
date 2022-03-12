import Link from 'next/link';

const LoginLinks = () => (
    <div className='loginLinks'>
        <Link href='/register'><p className='loginLinks__signUp'>SIGN UP</p></Link>
        <Link href='/login'><p className='loginLinks__login'>LOGIN</p></Link>
    </div>
)

export default LoginLinks;
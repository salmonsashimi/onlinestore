import Link from 'next/link';

const LoginLinks = (props) => {
    console.log(props)
    return (
        <div className='loginLinks'>
            <Link href='/register'><p className={`loginLinks__signUp ${props.page === 'register' && 'loginLinks__active'}`}> SIGN UP</p></Link>
            <Link href='/login'><p className={`loginLinks__signUp ${props.page === 'login' && 'loginLinks__active'}`}>LOGIN</p></Link>
        </div>
    )
}

export default LoginLinks;
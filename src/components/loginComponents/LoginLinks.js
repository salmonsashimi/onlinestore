import Link from 'next/link';

const LoginLinks = (props) => {
    console.log(props)
    return (
        <div className='loginLinks'>
            <div className={`loginLinks__container ${props.page === 'register' && 'loginLinks__active'}`}>
                <Link href='/register'><p className='loginLinks__signUp'>JOIN</p></Link>
            </div>
            <div className={`loginLinks__container ${props.page === 'login' && 'loginLinks__active'}`}>
                <Link href='/login'><p className='loginLinks__login'>LOGIN</p></Link>
            </div>
        </div >
    )
}

export default LoginLinks;
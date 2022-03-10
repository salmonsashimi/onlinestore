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
                    <div className='login__input'>
                        <p className='login__input-header'>EMAIL ADDRESS:</p>
                        <input type='text' className='login__input-input' />
                    </div>
                    <div className='login__input'>
                        <p className='login__input-header'>NAME:</p>
                        <input type='text' className='login__input-input' />
                    </div>
                    <div className='login__input'>
                        <p className='login__input-header'>PASSWORD:</p>
                        <input type='password' className='login__input-input' />
                    </div>
                    <div className='login__input'>
                        <p className='login__input-header'>CONTACT PREFERENCES:</p>
                        <div className='login__input-options'>
                            <label for='discounts'>DISCOUNTS AND SALES</label>
                            <input type='checkbox' id='discounts' name='discounts'></input>
                        </div>
                        <div className='login__input-options'>
                            <label for='newStuff'>NEW STUFF</label>
                            <input type='checkbox' id='newStuff' name='newStuff'></input>
                        </div>
                        <div className='login__input-options'>
                            <label for='exclusives'>YOUR EXCLUSIVES</label>
                            <input type='checkbox' id='exclusives' name='exclusives'></input>
                        </div>
                    </div>

                    <button className='login__button'>JOIN NAVY</button>


                </form>
            </div>
        </div >
    )
}

export default RegisterPage;
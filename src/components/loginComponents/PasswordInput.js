import { useState } from 'react';

const PasswordInput = () => {
    const [password, setPassword] = useState('')

    return (
        <div className='passwordInput'>
            <input type='password' className='login__input-input passwordInput__input' onChange={(e) => setPassword(e.target.value)} value={password} />
            <button className={`passwordInput__button ${password && 'passwordInput__button-show'}`}>SHOW</button>
        </div>
    )
}

export default PasswordInput;
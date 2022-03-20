import { useState } from 'react';

const PasswordInput = () => {
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)

    const onPasswordButtonClick = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }


    return (
        <div className='passwordInput'>
            <input type={showPassword ? 'password' : 'text'} className='login__input-input passwordInput__input' onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={onPasswordButtonClick} className={`passwordInput__button ${password && 'passwordInput__button-show'}`}>{showPassword ? 'SHOW' : 'HIDE'}</button>
        </div>
    )
}

export default PasswordInput;
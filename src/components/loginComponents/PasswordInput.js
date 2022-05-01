import { useState } from 'react';

const PasswordInput = (props) => {
    const { password, setPassword } = props;
    const [showPassword, setShowPassword] = useState(true)

    const onPasswordButtonClick = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }

    return (
        <div className='passwordInput'>
            <input
                type={showPassword ? 'password' : 'text'}
                className='login__input-input passwordInput__input'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <p
                name='password'
                onClick={onPasswordButtonClick}
                className={`passwordInput__button ${password && 'passwordInput__button-show'}`}
            >
                {showPassword ? 'SHOW' : 'HIDE'}
            </p>
        </div>
    )
}

export default PasswordInput;
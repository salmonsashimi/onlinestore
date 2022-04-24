import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

const AccountOverview = () => {
    const context = useContext(CartContext);
    const { token } = context;

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');

    const retrieveUserInfo = async (id) => {
        const userInfoStr = await fetch(`http://localhost:3000/api/user/${id}`);
        const userInfo = await userInfoStr.json();
        const { name, email } = userInfo;
        setName(name);
        setEmail(email);

    }
    useEffect(() => {
        retrieveUserInfo(token)
    })

    return (
        <div className='accountOverview'>
            <p>{name}</p>
            <p>{email}</p>
            <p>address</p>
        </div>
    )
}

export default AccountOverview;
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import fetchUserInfo from '../../lib/fetchUserInfo';


const AccountOverview = () => {
    const context = useContext(CartContext);
    const { token } = context;

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');

    useEffect(() => {
        const retrieveUserInfo = async () => {
            const userInfo = await fetchUserInfo(token);
            const { name, email } = userInfo;
            setName(name);
            setEmail(email);
        }

        retrieveUserInfo()
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
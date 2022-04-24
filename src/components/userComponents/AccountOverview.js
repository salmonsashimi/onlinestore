import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const AccountOverview = () => {
    const context = useContext(CartContext);
    const { token } = context;




    return (
        <div className='accountOverview'>
            <p>name</p>
            <p>email</p>
            <p>address</p>
        </div>
    )
}

export default AccountOverview;
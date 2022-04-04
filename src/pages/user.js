import Layout from '../components/Layout';
import { FiUser } from 'react-icons/fi';

const UserPage = () => {
    const links = ['Account Overview', 'My Orders', 'My Details', 'Payment Methods', 'Contact Preferences']
    return (
        <div className='user container'>
            <h1 className='user__header'>YOUR ACCOUNT</h1>
            <div className='user__main'>
                <div className='user__menu'>
                    <h3 className='user__menu-header'>Hi, <span>name</span></h3>
                    <button className='user__category'><FiUser />  Account Overview</button>

                </div>
                <div className='user__content'>
                    hi
        </div>
            </div>
        </div >
    )
}

UserPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default UserPage;
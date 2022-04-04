import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import Layout from '../components/Layout';
import AccountOverview from '../components/userComponents/AccountOverview';


const UserPage = () => {
    const [currentPage, setCurrentPage] = useState('default')

    const links = ['Account Overview', 'My Orders', 'My Details', 'Payment Methods', 'Contact Preferences']

    const item = { name: 'account overview', page: <AccountOverview /> }
    return (
        <div className='user container'>
            <h1 className='user__header'>YOUR ACCOUNT</h1>
            <div className='user__main'>
                <div className='user__menu'>
                    <h3 className='user__menu-header'>Hi, <span>name</span></h3>
                    {links.map(link => <button className='user__category' onClick={() => setCurrentPage(link)}><FiUser /> {link} </button>)}

                    <button className='user__category' onClick={() => setCurrentPage(item.page)}>{item.name} </button>
                </div>
                <div className='user__content'>
                    {currentPage}
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
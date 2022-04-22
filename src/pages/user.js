import { useState, useContext, useEffect } from 'react';
import { FiUser, FiCreditCard } from 'react-icons/fi';
import { GrDeliver, GrChat } from 'react-icons/gr';
import { CartContext } from '../contexts/CartContext';
import Layout from '../components/Layout';
import AccountOverview from '../components/userComponents/AccountOverview';
import MyOrders from '../components/userComponents/MyOrders';
import PaymentMethods from '../components/userComponents/PaymentMethods';
import ContactPreferences from '../components/userComponents/ContactPreferences';


const UserPage = () => {
    const context = useContext(CartContext);
    const { token, setToken } = context;

    const retrieveUserInfo = async (id) => {
        const userInfo = await (await fetch(`http://localhost:3000/api/user/${id}`)).json()
        const { name } = userInfo;
        setUserName(name)
    }

    //see if can extract the token function in every page, and extract the context.

    const [currentPage, setCurrentPage] = useState('default');
    const [currentIcon, setCurrentIcon] = useState(null);
    const [currentTitle, setCurrentTitle] = useState(null);
    const [userName, setUserName] = useState('')

    const onMenuClick = (link) => {
        setCurrentPage(link.page)
        setCurrentIcon(link.icon)
        setCurrentTitle(link.name)
    }

    useEffect(() => {
        const tokenString = sessionStorage.getItem('token');
        setToken(JSON.parse(tokenString));
        retrieveUserInfo(token)
    }, [])


    const links = [
        {
            name: 'Account Overview',
            page: <AccountOverview />,
            icon: <FiUser className='user__category-icon' />
        },
        {
            name: 'My Orders',
            page: <MyOrders />,
            icon: <GrDeliver className='user__category-icon' />
        },
        {
            name: 'Payment Methods',
            page: <PaymentMethods />,
            icon: <FiCreditCard className='user__category-icon' />
        },
        {
            name: 'Contact Preferences',
            page: <ContactPreferences />,
            icon: <GrChat className='user__category-icon' />
        }
    ]


    return (
        <div className='user container'>
            <h1 className='user__header'>YOUR ACCOUNT</h1>
            <div className='user__main'>
                <div className='user__menu'>
                    <h3 className='user__menu-header'>Hi, <span>{userName}</span></h3>
                    {links.map(link => <button className='user__category' onClick={() => onMenuClick(link)}>{link.icon}{link.name}</button>)}

                </div>
                <div className='user__content'>
                    <div className='user__content-header'>
                        <h1 className='user__content-header-icon'>{currentIcon}</h1>
                        <h1 className='user__content-header-text'>{currentTitle}</h1>
                    </div>
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
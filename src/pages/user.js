import Layout from '../components/Layout';
import UserCategory from '../components/userComponents/UserCategory';

const UserPage = () => (
    <div className='user container'>
        <h1 className='user__header'>YOUR ACCOUNT</h1>
        <div className='user__main'>
            <div className='user__menu'>
                <h3 className='user__menu-header'>Hi, <span>name</span></h3>
                <UserCategory name='Account Overview' />
                <UserCategory name='My Orders' />
                <UserCategory name='My Details' />
                <UserCategory name='Payment Methods' />
                <UserCategory name='Contact Preferences' />
            </div>
            <div className='user__content'>
                hi
        </div>
        </div>
    </div >
)

UserPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default UserPage;
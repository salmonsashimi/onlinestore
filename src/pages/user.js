import Layout from '../components/Layout';

const UserPage = () => (
    <div className='user container'>
        <div className='user__menu'>


        </div>
        <div className='user__content'></div>
    </div>
)

UserPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default UserPage;
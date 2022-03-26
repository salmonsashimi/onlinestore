import Layout from '../components/Layout';

const UserPage = () => (
    <div>
        user page
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
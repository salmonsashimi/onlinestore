import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import SearchSortingBar from '../../components/searchComponents/SearchSortingBar';
import ItemBoxes from '../../components/searchComponents/ItemBoxes';
import SearchFilterColumn from '../../components/searchComponents/SearchfilterColumn';

const Search = (props) => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div className='container'>
            <SearchSortingBar slug={slug} />
            <div className='search__results'>
                <SearchFilterColumn />
                <ItemBoxes items={props.data} />
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.query
    const res = await fetch(`http://localhost:3000/api/search/${slug}`)
    console.log('search page', res)
    const data = await res.json()

    if (!data) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
    }
}


Search.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>

    )
}

export default Search;
import SearchSortingBar from '../../components/searchComponents/SearchSortingBar';
import ItemBoxes from '../../components/searchComponents/ItemBoxes';
import SearchFilterColumn from '../../components/searchComponents/SearchfilterColumn';

const SearchPage = (props) => {
    return (
        <div className='container'>
            <SearchSortingBar />
            <div className='search__results'>
                <SearchFilterColumn />
                <ItemBoxes items={props.data} />
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/search/12`)
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


export default SearchPage;
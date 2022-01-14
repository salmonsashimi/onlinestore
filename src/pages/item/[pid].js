import { useRouter } from 'next/router';
import ItemImageBox from '../../components/itemComponents/ItemImageBox';
import ItemDescriptionBox from '../../components/itemComponents/ItemDescriptionBox';

const ItemPage = ({ data }) => {

    const router = useRouter();
    const { pid } = router.query;

    return (
        <div className='itemPage'>
            <ItemImageBox img={data.imgUrl} />
            <ItemDescriptionBox data={data} />
        </div>
    )
}


export async function getServerSideProps(context) {
    const { pid } = context.query;

    const res = await fetch(`http://localhost:3000/api/item${pid}`)
    const data = await res.json()
    console.log(data)

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

export default ItemPage;
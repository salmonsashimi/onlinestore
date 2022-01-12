import ItemImageBox from '../components/itemComponents/ItemImageBox';
import ItemDescriptionBox from '../components/itemComponents/ItemDescriptionBox';

const ItemPage = ({ data }) => (
    <div className='itemPage'>
        <ItemImageBox img={data.imgUrl} />
        <ItemDescriptionBox data={data} />
    </div>
)



export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/item`)
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
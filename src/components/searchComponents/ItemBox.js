import { useRouter } from 'next/router';

const ItemBox = (props) => {
    const { id, name, brand, price, imgUrl } = props.item;

    const router = useRouter();

    const itemClick = () => {
        router.push(`/item/${id}`)
    }

    return (
        <div className='itemBox' onClick={itemClick}>
            <img className='itemBox__img' src={imgUrl} />
            <p className='itemBox__brand'>{brand}</p>
            <p className='itemBox__name'>{name}</p>
            <p className='itemBox__price'>${price}</p>
        </div>
    )
}

export default ItemBox;
const ItemBox = (props) => {
    const { name, brand, price, imgUrl } = props.item;

    return (
        <div className='itemBox'>
            <img className='itemBox__img' src={imgUrl} />
            <p className='itemBox__brand'>{brand}</p>
            <p className='itemBox__name'>{name}</p>
            <p className='itemBox__price'>${price}</p>
        </div>
    )
}

export default ItemBox;
const ItemBox = (props) => {
    const { name, brand, price, imgUrl } = props.item;
    console.log(name)

    return (
        <div className='itemBox'>
            <img src={imgUrl} />
            <p className='itemBox__brand'>{brand}</p>
            <p className='itemBox__name'>{name}</p>
            <p className='itemBox__price'>${price}</p>
        </div>
    )
}
export default ItemBox;
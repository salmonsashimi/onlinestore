const OrderItem = ({ item }) => {
    const { imgUrl, brand, name, price } = item;

    return (
        <div className='orderItem'>
            <img src={imgUrl} className='orderItem__img' />
            <h3 className='orderItem__name'>{brand} {name}</h3>
            <h3 className='orderItem__price'>${price}</h3>
        </div>
    )
}

export default OrderItem;
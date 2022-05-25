const OrderItem = ({ item }) => {
    const { imgUrl, brand, name, price } = item;
    return (
        <div>
            <img src={imgUrl} />
            <h3>{brand} {name}</h3>
            <h3>${price}</h3>
        </div>

    )

}
export default OrderItem;
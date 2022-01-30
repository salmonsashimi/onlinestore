const CartDropdownItem = (props) => (
    <div>

        <img src={props.item.imgUrl}></img>
        <p>{props.item.name}</p>
        <p>{props.item.brand}</p>
        <p>{props.item.price}</p>
        <p>{props.item.quantity}</p>
    </div>

)

export default CartDropdownItem;
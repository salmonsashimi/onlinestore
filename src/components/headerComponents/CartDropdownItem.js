const CartDropdownItem = (props) => (
    <div className='cartDropdownItem'>
        <img src={props.item.imgUrl} className='cartDropdownItem__img' />
        <div className='cartDropdownItem__desc'>
            <p><span className='cartDropdownItem__desc-brand'>{props.item.brand}</span> {props.item.name}</p>

            <p className='cartDropdownItem__desc-price'>SGD{props.item.price}</p>
            <p>Qty: {props.item.quantity}</p>
        </div>
    </div>

)

export default CartDropdownItem;
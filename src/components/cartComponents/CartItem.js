const CartItem = () => (
    <div className='cartItem'>
        <div>img</div>
        <div className='cartItem__description'>
            <p>brand</p>
            <p>item</p>
            <p>price</p>
            <p>quantity</p>
        </div>
        <button className='cartItem__button'>X</button>
    </div>
)

export default CartItem;
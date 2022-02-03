import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const ItemDescriptionBox = (props) => {

    const context = useContext(CartContext);
    const addItem = context.addItem;
    const cart = context.cart;

    const { id, imgUrl, brand, name, price, description } = props.data;

    const onFormSubmit = (e) => {
        e.preventDefault();
        const quantity = e.target[0].value;
        const item = {
            id,
            imgUrl,
            brand,
            name,
            price,
            quantity
        }

        const containedInCart = cart.some((obj) => {
            return obj.id == id
        })

        if (!containedInCart) {
            addItem(item);
        }
    }



    return (

        <div className='itemDescriptionBox'>
            <form onSubmit={onFormSubmit}>
                <h3 className='itemDescriptionBox__brand'>{brand}</h3>
                <h3 className='itemDescriptionBox__itemName'>{name}</h3>
                <h3 className='itemDescriptionBox__price'>${price}</h3>
                <h3 className='itemDescriptionBox__description'>{description}</h3>

                <div>
                    <label for='quantity'>Quantity: </label>
                    <select id='quantity' name='quantity'>
                        <option>1</option>
                    </select>
                </div>
                <button type='submit' className='itemDescriptionBox__button'>ADD TO CART</button>
            </form>
        </div>

    )
}

export default ItemDescriptionBox;
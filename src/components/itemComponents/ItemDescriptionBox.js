const ItemDescriptionBox = (props) => {


    const onFormSubmit = (e) => {
        e.preventDefault();
        const quantity = e.target[0].value;
    }


    return (

        <div className='itemDescriptionBox'>
            <form onSubmit={onFormSubmit}>
                <h3 className='itemDescriptionBox__brand'>{props.data.brand}</h3>
                <h3 className='itemDescriptionBox__itemName'>{props.data.name}</h3>
                <h3 className='itemDescriptionBox__price'>${props.data.price}</h3>
                <h3 className='itemDescriptionBox__description'>{props.data.description}</h3>
                <label for='quantity'>Quantity:</label>
                <select id='quantity' name='quantity'>
                    <option>1</option>
                </select>
                <button type='submit' className='itemDescriptionBox__button'>ADD TO CART</button>
            </form>
        </div>

    )
}


export default ItemDescriptionBox;
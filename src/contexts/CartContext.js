import { Component, createContext } from 'react';

const CartContext = createContext();

class CartProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [{
                id: 1001,
                imgUrl: 'https://picsum.photos/id/240/400/550',
                brand: 'Gucci',
                name: 'White Striped Sneakers',
                price: '23412.21',
                quantity: 1
            }]
        }
        this.removeItem = this.removeItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    addItem(item) {
        this.setState({ cart: [...this.state.cart, item] })
    }

    removeItem(id) {
        const remainderItems = this.state.cart.filter(item => item.id !== id)
        this.setState({ cart: remainderItems })
    }

    render() {
        return (
            <CartContext.Provider value={{ ...this.state, removeItem: this.removeItem, addItem: this.addItem }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export { CartProvider, CartContext };
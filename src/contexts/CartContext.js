import { Component, createContext } from 'react';

const CartContext = createContext();

class CartProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [
                'item1', 'tem2'
            ]
        }
    }
    render() {
        return (
            <CartContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export { CartProvider, CartContext };
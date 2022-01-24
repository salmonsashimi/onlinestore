import { Component, createContext } from 'react';

const CartContext = createContext();

class CartProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
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
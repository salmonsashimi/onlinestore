import { Component, createContext } from 'react';

const CartContext = createContext();

class CartProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [
                {
                    imgUrl: 'https://picsum.photos/id/102/400/550',
                    name: 'Shoes',
                    brand: 'adidas',
                    price: '$1000',
                    quantity: '1'
                },
                {
                    imgUrl: 'https://picsum.photos/id/199/400/550',
                    name: 'Blue Suede Shoes',
                    brand: 'Gucci',
                    price: '$1023.13',
                    quantity: '1'
                }

            ]
        }
    }

    render() {
        return (
            <CartContext.Provider value={this.state}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export { CartProvider, CartContext };
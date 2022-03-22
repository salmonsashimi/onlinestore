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
                price: 23412.21,
                quantity: 1
            }],
            isCartVisible: false,
            price: 0,
            token: 'asdf'
        }
        this.removeItem = this.removeItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.hideCart = this.hideCart.bind(this);
        this.showCart = this.showCart.bind(this);
        this.setToken = this.setToken.bind(this);
    }

    calculatePrice() {
        let price = 0;
        this.state.cart.forEach((item) => {
            price += item.price
        })
        this.setState({ price })
    }


    async addItem(item) {
        await this.setState({ cart: [...this.state.cart, item] })
        this.calculatePrice();
    }

    async removeItem(id) {
        const remainderItems = this.state.cart.filter(item => item.id !== id)
        await this.setState({ cart: remainderItems })
        this.calculatePrice();
    }

    showCart() {
        this.setState({ isCartVisible: true });
    }

    hideCart() {
        this.setState({ isCartVisible: false });
    }

    setToken(token) {
        this.setState({ token })
    }

    render() {
        return (
            <CartContext.Provider
                value={{
                    ...this.state,
                    removeItem: this.removeItem,
                    addItem: this.addItem,
                    showCart: this.showCart,
                    hideCart: this.hideCart,
                    setToken: this.setToken
                }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export { CartProvider, CartContext };
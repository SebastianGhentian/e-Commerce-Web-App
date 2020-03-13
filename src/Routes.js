import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import AppContext from './AppContext';
import { getProducts, getLaptops } from './repo';
import Cart from './pages/Cart';
import Laptops from './pages/Laptops';

class Routes extends Component {
    state = {
        products: [],
        laptops:  [],
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        addToCart: (product, qty) => {
            let cart = this.state.cart;
            cart.push({
                product: product,
                quantityAdded: qty
            });
            this.setState({ cart: cart });
            localStorage.setItem('cart', JSON.stringify(cart))   
        },

        removeFromCart: (id) => {
            let cart = this.state.cart;
            let newCart= [];

            cart.map((cartItem) => {
                if (cartItem.product.id !== id)
                newCart.push(cartItem)
            });
            this.setState({
                cart: newCart
            })
            localStorage.setItem('cart', JSON.stringify(newCart))
        },

        clearCart: () => {
            localStorage.clear();
            this.setState({cart: []});
            if ({cart: []} === null) {
                
            };
            alert('cart has benn cleared successfully')
        }
    }

    componentDidMount() {
        getProducts().then((products) => {
            this.setState({products})
        })
        getLaptops().then((laptops) => {
            this.setState({laptops})
        })
    }

    render (){
        return (
            <AppContext.Provider value={this.state}>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/cart' component={Cart}></Route>
                    <Route path='/laptops' component={Laptops}></Route>
                </Switch>
            </AppContext.Provider>
        )
    }
}


export default Routes;

import React, { Component } from 'react';

import Header from '../Components/Header/Header';
import AppContext from '../AppContext';
import CartItem from './CartItem';

class Cart extends Component {
    render (){
        let total = 0;
        this.context.cart.map((item) => {
            total += (item.quantityAdded * item.product.price)
        })
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="">
                        <h3 className="card-title">Cart</h3>
                        <hr/>
                        {
                            this.context.cart.map((product, index) =>
                                <CartItem product={product.product} qty={product.quantityAdded} key={index} />
                            )
                        }
                        <hr/>
                        <div className='float-right mb-5'>
                            <h4><small>Total amount: </small> <span className='text-primary'>{total}€</span></h4>
                        </div>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <button className='btn btn-danger float-right' onClick={this.context.clearCart}>Clear cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Cart.contextType= AppContext;
export default Cart;
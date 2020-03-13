import React, { Component } from 'react';

import AppContext from '../AppContext';

class CartItem extends Component {
    render (){
        return (
            <div>
                <div className='card mb-3'>
                    <div className='card-body'>
                        <img className='' alt='' style={{height: '150px'}} src={this.props.product.imageUrl} style={{width: '12%'}}/>
                        <h4 className='cart-title'>{this.props.product.name} </h4>
                        <h5 className='cart-text'><small>price: </small>{this.props.product.price}€ </h5>
                        <span className="card-text"><small>Quantity added:</small>{this.props.product.qty}</span>
                        <button className='btn btn-sm btn-warning float-right' onClick={() => {this.context.removeFromCart(this.props.product.id)}}>Remove</button>
                    </div>
                </div>
            </div>

        )
    }
}
CartItem.contextType= AppContext;
export default CartItem;
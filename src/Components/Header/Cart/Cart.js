import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../../AppContext';

class Cart extends Component {
    render () {
        return (
            <div className="col-xs-4" >
                <Link to="/cart" className="header-text">
                    <div className="d-inline-flex">
                        <div className="icon-wrap">
                            <i className="header-icon fas fa-shopping-cart"/>
                        </div>
                        <div className="text-wrap d-flex pl-0 mr-3">
                            <div>Cart</div>
                            <div className='d-flex align-items-start ml-1'>
                                <span className="small round badge badge-secondary ">{this.context.cart.length}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

Cart.contextType = AppContext;
export default Cart;
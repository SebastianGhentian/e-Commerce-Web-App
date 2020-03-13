import React, { Component } from 'react';
import AppContext from './AppContext';

class HomeItem extends Component {
    render () {
        return (
                <div className="col-sm-4 mb-3">
                    <div className="card p-3" >
                        <div className="text-center">
                            <img className="img-fluid" style={{height: '150px'}} src={this.props.product.imageUrl} alt="" />
                        </div>
                        <hr />
                        <h4 className="card-title" >{this.props.product.name}</h4>
                        <p className="card-text">{this.props.product.description}</p>
                        <h5 className="card-text">Price: <small>{this.props.product.price}€</small></h5>
                        <span className="card-text"><small>Available Quantity:</small>{this.props.product.available_quantity}</span>
                        <div>
                            <button className="btn btn-sm btn-warning" onClick={()=>{this.context.addToCart(this.props.product, 1)}}>cart</button>
                        </div>
                    </div>
                </div>
        )
    }
    
}

HomeItem.contextType = AppContext
export default HomeItem;
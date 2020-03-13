import React, { Component } from 'react';
import AppContext from '../AppContext';

class LaptopProduct extends Component {
    render () {
        return (
                <div className="col-sm-4 mb-4">
                    <div className="card p-3" style={{height: '350px'}}>
                        <div className="text-center">
                            <img className="img-fluid" style={{height: '150px'}} src={this.props.laptop.imageUrl} alt="" />
                        </div>
                        <hr />
                        <h4 className="card-title">{this.props.laptop.name}</h4>
                        <h5 className="card-text">Price: <small>{this.props.laptop.price}€</small></h5>
                        <span className="card-text"><small>Available Quantity:</small>{this.props.laptop.available_quantity}</span>
                        <div>
                            <button className="btn btn-sm btn-warning" onClick={()=>{this.context.addToCart(this.props.laptop, 1)}}>cart</button>
                        </div>
                    </div>
                </div>
        )
    }
    
}

LaptopProduct.contextType = AppContext
export default LaptopProduct;
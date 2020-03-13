import React from 'react';
import { Link } from 'react-router-dom';

const wishList = () => (
    <div className="col-xs-4" >
        <Link to="/" className="header-text">
            <div className="d-inline-flex">
                <div className="icon-wrap">
                    <i className="header-icon fas fa-heart"/>
                </div>
                <div className="text-wrap d-flex pl-0 mr-3">
                    <div>WishList </div>
                    <div className='d-flex align-items-start ml-1'>
                        <span className="small round badge badge-secondary">0</span>
                    </div>
                </div>
            </div>
        </Link>
    </div>
)

export default wishList;

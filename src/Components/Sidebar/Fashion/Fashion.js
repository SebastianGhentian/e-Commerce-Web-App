import React from 'react';
import { Link } from 'react-router-dom';

const fashion = () => (
    <Link to="/fashions">
        <div className="d-inline-flex">
            <div className="icon-wrap">
                <i className="header-icon fas fa-tshirt"></i>
            </div>
            <div className="text-wrap">
                Fashion
            </div>
        </div>
    </Link>
)

export default fashion; 
import React from 'react';
import { Link } from 'react-router-dom';

const laptops = () => (
    <Link to="/laptops">
        <div className="d-inline-flex">
            <div className="icon-wrap">
                <i className="header-icon fas fa-laptop"></i>
            </div>
            <div className="text-wrap ">
                Laptop & Desktops
            </div>
        </div>
    </Link>
)

export default laptops; 
import React from 'react';
import { Link } from 'react-router-dom';

const phones = () => (
    <Link to="/phones">
        <div className="d-inline-flex">
            <div className="icon-wrap">
                <i className="header-icon fas fa-mobile-alt"></i>
            </div>
            <div className="text-wrap ">
                Tablets & Phones
            </div>
        </div>
    </Link>
)

export default phones; 
import React from 'react';
import { Link } from 'react-router-dom';

const tv = () => (
    <Link to="/tv">
        <div className="d-inline-flex">
            <div className="icon-wrap">
                <i className="header-icon fas fa-tv"></i>
            </div>
            <div className="text-wrap">
                TV & Home Cinema
            </div>
        </div>
    </Link>    
)

export default tv; 
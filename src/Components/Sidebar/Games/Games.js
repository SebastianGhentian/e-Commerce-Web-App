import React from 'react';
import { Link } from 'react-router-dom';

const games = () => (
    <Link to="/games">
        <div className="d-inline-flex">
            <div className="icon-wrap">
                <i className="header-icon fas fa-gamepad"></i>
            </div>
            <div className="text-wrap">
                Gaming
            </div>
        </div>
    </Link>
)

export default games; 
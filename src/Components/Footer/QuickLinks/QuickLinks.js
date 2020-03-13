import React from 'react';
import { Link } from 'react-router-dom';

const quickLinks = () => (
    <div className="col-sm-4">
        <h5>Quick links</h5>
        <ul className="list-unstyled">
            <li>
                <Link to='/cart'>My cart</Link>
            </li>
            <li>
                <Link to='/wishlist'>My wishlist</Link>
            </li>
        </ul>
    </div>
)

export default quickLinks;

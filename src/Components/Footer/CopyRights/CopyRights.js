import React from "react";
import { Link } from 'react-router-dom';

const copyRights = () => (
    <div className="row">
        <div className="col-sm-12">
            <p className="footer-copyright text-white text-center">
                All rights reserved to:  
            <Link to='/'> My-ecommerce-app</Link>
            </p>
        </div>
    </div>
)

export default copyRights;

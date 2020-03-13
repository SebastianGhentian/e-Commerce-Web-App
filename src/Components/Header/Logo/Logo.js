import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo/Logo.jpg';

const logo = () => (
    <div className="col-sm-2">
        <Link className="" to="/">
            <img className="" src={Logo} alt="Logo" />
        </Link>
    </div>
)

export default logo;

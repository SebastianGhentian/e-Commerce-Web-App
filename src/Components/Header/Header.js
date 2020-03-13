import React, { Component } from 'react';

import Logo from './Logo/Logo';
import SignIn from './SignIn/SignIn';
import Cart from './Cart/Cart';
import WishList from './WishList/WishList'
import '../../index.css';

class Header extends Component {
    render () {
        return (
            <div>
                <nav className="navbar shadow-sm bg-white navbar-expand-lg">
                    <div className="container">
                        <div className="row w-100">
                        <Logo />
                        <div className="col-sm-2" />
                        <div className="col-sm-8 ">
                            <div className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarcontent" aria-expanded="false">
                                <i className="header-icon fas fa-bars" />
                            </div>
                            <div className="row float-right collapse navbar-collapse" id="navbarcontent">
                                <SignIn />                             
                                <Cart />
                                <WishList />
                            </div>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;

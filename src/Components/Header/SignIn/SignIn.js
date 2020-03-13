import React from 'react';
import { Link } from 'react-router-dom';


const signIn = () => (
    <div className="col-xs-4">
        <div className="dropdown">
            <Link to="/" className="header-text" data-toggle="dropdown" data-offset="20,10" aria-haspopup="true" aria-expanded="false">
                <div className="d-inline-flex">
                    <div className="icon-wrap">
                        <i className="header-icon fas fa-user"/>
                    </div>
                <div className="text-wrap d-flex pl-0 mr-3"> 
                    <div>Sign in</div>
                    <i className="fas fa-caret-down ml-1" />
                </div>
            </div>
            </Link>
            <div className="dropdown-menu">
                <form className="px-4 py-3">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
                <hr/>
                <a className="dropdown-item" href="#">Don't have an acocunt yet? Sign up!</a>
            </div>
        </div>
    </div>      
)


export default signIn;


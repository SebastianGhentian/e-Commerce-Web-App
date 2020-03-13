import React from 'react';
import { Link } from 'react-router-dom';

const socialLinks = () => (
    <div className="col-sm-4">
        <div className="">
            <h5>Social links</h5>
            <div className="d-flex flex-row justify-content-start">
                <Link to="https://facebook.com" className="text-white mr-1">
                    <i className="fab fa-facebook"></i>
                </Link>
                <Link to="https://twitter.com" className="text-white mr-1">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to="https://youtube.com" className="text-white mr-1">
                    <i className="fab fa-youtube"></i>
                </Link>
                <Link to="https://instagram.com" className="text-white mr-1">
                    <i className="fab fa-instagram"></i>
                </Link>
            </div>
        </div>    
    </div>
)

export default socialLinks;
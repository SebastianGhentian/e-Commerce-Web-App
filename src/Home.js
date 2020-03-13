import React, { Component } from 'react';
import  { Link } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './Home.css';
import slide1 from './assets/HomeImages/slide1.jpg';
import slide2 from './assets/HomeImages/slide2.jpg';
import slide3 from './assets/HomeImages/slide3.jpg';
import Sidebar from './Components/Sidebar/Sidebar';
import Payment from './assets/HomeImages/payment.png';
import Return from './assets/HomeImages/return.jpg';
import Trust from './assets/HomeImages/trust.jpg';
import HomeItem from './HomeItem';
import AppContext from './AppContext';

class Home extends Component {

    render () {
        return (
            <div>
                <Header />
                <section  className="first-section m-5">
                    <div className="container">
                        <div className="row ">
                            <div className='col-sm-4'>
                                <Sidebar />
                            </div>
                            <div className='col-sm-8'>
                                <div className="card">
                                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                        </ol>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={slide1} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={slide2} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={slide3} className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="second-section m-5 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="text-center">
                                    <img className="mb-3" src={Payment} alt="payment" />
                                    <div className=''>
                                        <h4>Easy Payment</h4>
                                        <p>The payment process is very easy to navigate...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="text-center">
                                    <img className="mb-3" src={Return} alt="return" />
                                    <div className=''>
                                        <h4>Easy Return</h4>
                                        <p>The return process is very easy to navigate...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="text-center">
                                    <img className="mb-3" src={Trust} alt="trust" />
                                        <h4>Trust quality</h4>
                                        <p>The products are of trusted quality.</p>
                                    </div>
                            </div>
                        </div>
                    </div>    
                </section>
                <section className="third-section">
                    <div className="container">
                        <h4 className="mb-3">Popular Products</h4>
                        <div className="row">
                            {this.context.products.map((product, index) => 
                                <HomeItem product={product} key={index}/>
                            )}
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

Home.contextType = AppContext
export default Home;
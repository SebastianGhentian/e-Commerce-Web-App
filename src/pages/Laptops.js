import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import AppContext from '../AppContext';
import Sidebar from '../Components/Sidebar/Sidebar';
import LaptopProduct from './LaptopProduct';

class Laptops extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className='laptops-sections'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <Sidebar />
                            </div>
                            <div className='col-sm-8'>
                                <div className='row'>
                                    {
                                        this.context.laptops.map((laptop, index) => 
                                            <LaptopProduct laptop={laptop} key={index}/>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

Laptops.contextType= AppContext
export default Laptops;
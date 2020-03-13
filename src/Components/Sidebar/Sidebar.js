import React, { Component } from 'react';

import Fashion from './Fashion/Fashion';
import Games from './Games/Games';
import Phones from './Phones/Phones';
import Laptops from './Laptops/Laptops';
import Tv from './Tv/Tv';
import '../../index.css';

class Sidebar extends Component {
    render(){
        return(
            <div>
                <div className="card p-3">
                    <h5>My categories</h5>
                    <ul className="list-unstyled p-0 m-0">
                        <li>
                            <Fashion />
                        </li>
                        <li>
                            <Games />
                        </li>
                        <li>
                            <Phones />
                        </li>
                        <li>
                            <Laptops />
                        </li>
                        <li>
                            <Tv />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;
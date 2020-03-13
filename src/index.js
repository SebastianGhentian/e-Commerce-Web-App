import React from 'react';
import ReactDOM from 'react-dom';


import Routes from './Routes.js';
import { BrowserRouter } from 'react-router-dom';

const app = (
    <BrowserRouter>
        <div>
            <Routes />>
        </div>
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));

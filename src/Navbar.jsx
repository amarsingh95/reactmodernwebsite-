import React from 'react';
import {Link} from 'react-router-dom';
const Navbar =()=>
{
return (
    <div className="navbar">
        <div className="nav-logo">Logo Modern</div>
        <div className="nav-menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/home">About</Link></li>
                <li><Link to="/form">Service</Link></li>
                <li><Link to="/home">Contact</Link></li>
            </ul>
        </div>
    </div>
);
}

export default Navbar;
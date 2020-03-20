import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Login from './Login';

const Nav = (props) => {
    return (
        <div className="navigation-box">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/faq">FAQ</Link>
            </nav>
            <Login
                loggedIn={props.loggedIn}
                toggleLog={props.toggleLog}
                username={props.username}
                changeUsername={props.changeUsername}
                clearUsername={props.clearUsername}
            />
        </div>
        
    )
};

export default Nav;
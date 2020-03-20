import React, { useState } from 'react';
import './Login.css';

const Login = (props) => {
    const logIn = () => {
        return <input type="submit" value="log in" onClick={props.username ? props.toggleLog : null }></input>
    };
    const logOut = () => {
        return (
            <button
                onClick={() => {
                    props.toggleLog();
                    props.clearUsername();
                }}>
                log out
            </button>
        )
    };

    return (
        <div className="log-box">
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Username: 
                    <input type="text" value={props.username} id="name" name="name" placeholder="Albert Einstein" onChange={props.changeUsername} required></input>
                </label>
                {props.loggedIn ? logOut() : logIn() }
            </form>
        </div>
    );
};

export default Login;
import React from 'react';
import './Home.css';

const Home = (props) => {
    return (
        props.loggedIn ? <div><h1>Hello again, {props.username}!</h1></div> : <div><h1>Hello stranger!</h1></div>
    )
};

export default Home;
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import FAQ from './pages/FAQ';
import Default from './pages/Default';

const App = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const changeUsername = (e) => setUsername(e.target.value);
  const clearUsername = () => setUsername("");

  return (
    <div className="App">
      <BrowserRouter>
        <Nav
          loggedIn={loggedIn}
          toggleLog={() => setloggedIn((loggedIn) => !loggedIn)}
          username={username}
          changeUsername={changeUsername}
          clearUsername={clearUsername}
        />
        <Switch>
            <Route exact path="/" render={(props) => <Home {...props} loggedIn={loggedIn} username={username} />} />
            <Route path="/products" component={ProductList} />
            <Route path="/product/:id" component={Product} />
            <Route path="/faq" component={FAQ} />
            <Route component={Default} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

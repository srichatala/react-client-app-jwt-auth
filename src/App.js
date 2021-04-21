
import React, { useState, useEffect } from "react";
import * as AuthService from "./services/auth.service";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './components';
import Login from './components/Login';
import Registration from './components/Registration';
import Product from './components/Product';
import Profile from './components/Profile';
import GuardedRoute from './services/guarded.route';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const[isAutheticated, setisAutheticated] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setisAutheticated(true);
    }
  }, []);

  const logOut = () => {
    setisAutheticated(false);
    AuthService.logout();
  };

  return (
    <Router>
      <div className="App container">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
          <h1>React Client App JWT Auth</h1>
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/product"} className="nav-link">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.userName}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/registration"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
        <Switch>

          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/login" component={Login} />
          <GuardedRoute path="/product" component={Product} auth={isAutheticated} />
          <GuardedRoute path="/profile" component={Profile} auth={isAutheticated} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

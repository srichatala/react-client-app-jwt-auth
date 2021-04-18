import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Registration from '../../registration/registration';
import Login from '../../login/login';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
               <BrowserRouter>
                    <Link to="/">Home</Link>
                    <Link to="/registration">Registration</Link>
                    <Link to="/login">Login</Link>
                    <Switch>
                        <Route path="/">
                        </Route>
                        <Route path="/registration">
                            <Registration />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </nav>
        )
    }
}

export default Navigation;
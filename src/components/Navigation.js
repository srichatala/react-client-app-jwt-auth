import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from '.';
import Login from '../components/Login';
import Registration from '../components/Registration';
import Product from '../components/Product';

export default function Navigation(){
    return(
        <Router>
        <div>                
            <nav className="navbar navbar-light bg-light">
            <Link to="/">Home</Link>
            <Link to="/registration">Registration</Link>
            <Link to="/login">Login</Link>
            <Link to="/product">Products</Link>
            </nav>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/registration" component={Registration} />
                <Route path="/login" component={Login} />
                <Route path="/product" component={Product} />
            </Switch>
        </div>
    </Router>
    )
}
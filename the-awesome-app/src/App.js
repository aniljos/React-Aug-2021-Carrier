import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import Counter from './components/counter';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import GadgetStore from './components/GadgetStore';
import UseCallbackDemo from './components/UseCallbackDemo';
import ViewCart from './components/ViewCart';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector, useStore } from 'react-redux';
import React from 'react';
import { Suspense } from 'react';

//import ListProducts from './components/ListProducts';

const ListProducts = React.lazy(() => import('./components/ListProducts'));


function App() {

  const isAuth = useSelector(state => state.auth.isAuth);
  
  
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">React</Link>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">Counter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gadgets">Gadget Store</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">View Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/callback">UseCallback</Link>
              </li>
              {isAuth !== true ? (<li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">Logout</Link>
                </li>)}
            </ul>
          </div>
        </nav>

        <section>
          <Route path="/home" component={Hello} />
          <Route path="/counter" component={Counter} />
          <Suspense fallback={<div>Loading</div>}>
            <Route path="/products" component={ListProducts} />
          </Suspense>
          
          {/* <Route path="/gadgets" component={GadgetStore}/> */}

          <ProtectedRoute path="/gadgets" component={GadgetStore} exact />
          <Route path="/callback" component={UseCallbackDemo} exact />
          <Route path="/cart" component={ViewCart} />
          <Route path="/login" component={Login} />
        </section>
      </div>
    </Router>
  );
}

export default App;

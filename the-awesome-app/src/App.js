import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import Counter from './components/counter';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ListProducts from './components/ListProducts';

function App() {
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
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <section>
          <Route path="/home" component={Hello}/>
          <Route path="/counter" component={Counter}/>
          <Route path="/products" component={ListProducts}/>
        </section>
      </div>
    </Router>
  );
}

export default App;
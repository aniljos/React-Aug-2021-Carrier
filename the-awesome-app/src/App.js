import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import Counter from './components/counter';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">React</a>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Counter</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Login</a>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  );
}

export default App;


import './App.css';
import {Home} from './Home'
import {Appointment} from './Appointment'
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        DANH SÁCH BỆNH NHÂN PHẪU THUẬT
      </h3>

      <nav className="navbar navbar-expand-sm bg-light navbar-dark ">
      <ul className="navbar-nav">
        <li className="nav-item- m-1">
          <NavLink className="btn btn-light btn-outline-primary" to="/home">Home</NavLink>
        </li>
        <li className="nav-item- m-1">
          <NavLink className="btn btn-light btn-outline-primary" to="/appointment">Appointment</NavLink>
        </li>
      </ul>
      </nav>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/appointment' component= {Appointment} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

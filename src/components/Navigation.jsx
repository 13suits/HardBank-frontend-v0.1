import React from "react";
import { NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import store4 from "../redux/store4";
import Login from '../Login'


function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            HardBank: Full-Chain Commerce, v0.1
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Provider store={store4}>
              <Login />
              </Provider>
            </li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/buy">
                  Buy
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/claim">
                  Claim
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/owner">
                  Owner
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

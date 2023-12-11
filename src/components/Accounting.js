import React, { Component } from "react";
import style from "../styles/style.module.css";
import { Link, Outlet } from "react-router-dom";

class Accounting extends Component {
  render() {
    return (
      <div className={style["component-box"]}>
        <h1>Accounting</h1>
        <ul>
          <li>
            <Link to="register">Register</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>

        <div className={style["forms-box"]}>{<Outlet />}</div>
      </div>
    );
  }
}
export default Accounting;

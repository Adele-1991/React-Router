import React, { Component } from "react";
import AboutUs from "./components/AboutUs";
import Accounting from "./components/Accounting";
import Products from "./components/Products";
import Product from "./components/product";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import style from "./styles/style.module.css";
import Register from "./components/Register";
import Login from "./components/Login";

class App1 extends Component {
  render() {
    return (
      <>
        <div className={style["navbar"]}>
          <ul className={style["nav"]}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about-us">AboutUs</Link>
            </li>
            <li>
              <Link to="account">Accounting</Link>
            </li>
            <li>
              <Link to="products">Products</Link>
            </li>
          </ul>
        </div>
        <div className={style.box1}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/about-us"
              element={<AboutUs name=":MYsite" />}
            ></Route>
            <Route path="/account/*" element={<Accounting />}>
              <Route path="register" element={<Register />}></Route>

              <Route path="login" element={<Login />}></Route>
            </Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:id" element={<Product />}></Route>
            <Route path="/not-found" element={<NotFound />}></Route>
            <Route path="/*" element={<Navigate to="/not-found" />}></Route>
            <Route path="/" element={<Navigate to="/not-found" />}></Route>
          </Routes>
        </div>
      </>
    );
  }
}

export default App1;

import React, { Component } from 'react';
import style from "../styles/style.module.css";
import {Link} from "react-router-dom"

 class Products extends Component {
  render() {
    return (
      <div className={style["component-box1"]}>
        <h1 style={{color:"green"}}>Products</h1>
        <ul>
            <li><Link to="/Products/1">Product1</Link></li>
            <li><Link to="/Products/2">Product2</Link></li>
            <li><Link to="/Products/3">Product3</Link></li>
            <li><Link to="/Products/4">Product4</Link></li>
            <li><Link to="/Products/5">Product5</Link></li>
        </ul>
      </div>
    )
  }
  
}
export default Products;

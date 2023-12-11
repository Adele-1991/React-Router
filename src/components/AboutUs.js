import React, { Component } from "react";
import style from "../styles/style.module.css";

class AboutUs extends Component {
  render() {
    return (
      <div className={style["component-box"]}>
        <h1>AboutUs{this.props.name}</h1>
        <p style={{margin:"4px 10px", justifyContent:"center"}}>
          Exercitation laboris est ullamco in culpa nulla adipisicing ipsum
          aliqua quis. Ea qui non ut reprehenderit consectetur aute enim irure
          ullamco ex. Non id laboris eu occaecat nostrud. Quis laborum aliquip
          labore cupidatat ad ullamco dolor nostrud aute. Dolore esse mollit est
          elit ea pariatur dolore do ex enim ullamco minim. Cillum commodo nulla
          exercitation aute. Proident duis voluptate in exercitation commodo.
        </p>
      </div>
    );
  }
}
export default AboutUs;

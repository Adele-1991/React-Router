import React, { Component } from 'react';
import style from "../styles/style.module.css"

class Register extends Component {
  render() {
    return (
      <div>
        <div>
            <table border="1" className={style["account-form"]}>
              <tr>
                <td colSpan={2}>Register</td>
              </tr>
              <tr>
                <td>User Name:</td>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <td>Password</td>
                <td><input type="password"/></td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button>Register</button>
                </td>
              </tr>
            </table>
          </div>
      </div>
    )
  }
}
export default Register;
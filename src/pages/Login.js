import React, { Component } from "react";
import logo from "../svg/logo.svg";

class Login extends Component {
  render() {
    return (
      <div className="main-login-container">
        <div className="header-top">
          <img src={logo} alt="logo" className="logo" />
        </div>
      </div>
    );
  }
}
export default Login;

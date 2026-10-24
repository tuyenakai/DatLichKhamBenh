import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);
    this.btnLogin = React.createRef();
  }

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username:</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="form-control"
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="form-control"
              />
            </div>
            <div className="col-12">
              <button className="btn-login">Login</button>
              <div className="col-12">
                <span className="forgot-password">Forgot your password?</span>
              </div>
              <div className="col-12 text-center mt-3">
                <span> Or login with:</span>
              </div>{" "}
              hello
              <div className="col-12 social-login">
                <i className="fab fa-brands fa-google google"></i>
                <i className="fab fa-brands fa-facebook-f facebook"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

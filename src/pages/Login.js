import React from "react";

function Login() {
  return (
    <div className="login-page">
      <div className="login-conainer">
        <div className="login-details">
          <div className="login-heading">
            <h1>
              WildFire
              <br /> Tracker
            </h1>
          </div>
          <div className="login-form">
            <h1>Login Form</h1>
            <div className="login-form-container">
              <div className="form-group">
                <lable>Username</lable>
                <input
                  type="text"
                  className="input-control"
                  name="username"
                  placeholder="username"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="input-control"
                  name="password"
                  placeholder="password"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

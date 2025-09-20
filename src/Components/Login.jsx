import React from "react";


const Login = () => {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="input-box">
          <label>Username</label>
          <input type="text" placeholder="Type your username" />
        </div>
        <div className="input-box">
          <label>Password</label>
          <input type="password" placeholder="Type your password" />
        </div>
        <a href="#" className="forgot">Forgot password?</a>
        <button type="submit" className="btn">LOGIN</button>
      </form>

      <div className="social-login">Or Sign Up Using</div>
      <div className="social-icons">
        <a href="#"><i className="fab fa-google"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
      </div>

      <div className="signup-text">
        Or Sign Up Using <a href="#">SIGN UP</a>
      </div>
    </div>
  );
};

export default Login;

import { Link } from "react-router-dom";
import './Login.css'

const Login=()=>{
    return (
        <div className="login-container">
            <div className="login-box">
        <h2>Login</h2>
        <form >
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn-login">Login</button>
        </form>

        <p className="login-message">
          Don't have account! <Link to="/register">Register</Link> here
        </p>
      </div>
        </div>
    )
};

export default Login;
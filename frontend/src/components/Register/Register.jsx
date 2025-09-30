import {Link} from 'react-router-dom';
import './Register.css'

const Register=()=>{
    return(
        <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <p className="register-message">
          Create an account to start your reading 🤓!
        </p>
        <form >
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter a password"
              required
            />
          </div>

          <button type="submit" className="btn-register">Register</button>
        </form>

        <p className="register-message">
            Already have an account? Please <Link to="/login">Login</Link> here
        </p>
      </div>
    </div>
    )
}

export default Register;
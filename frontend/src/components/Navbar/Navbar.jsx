import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handlelogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  }
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Bloggi 📖</h1>
      <div className="navbar-buttons">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        {!token ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        ) : (
          <button type="button" className="btn btn-danger" onClick={handlelogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import './Navbar.css'
const Navbar=()=>{
    return(
        <nav className="navbar">
      <h1 className="navbar-logo">Bloggi 📖</h1>
      <div className="navbar-buttons">
        <button type="button" className="btn btn-primary"  >Login</button>
        <button type="button" className="btn btn-primary"  >Register</button>
      </div>
    </nav>
    )
};

export default Navbar;
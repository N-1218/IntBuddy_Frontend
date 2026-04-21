import { Link } from "react-router-dom";
import intbuddylogo from "../assets/intbuddylogo.png";

function Navbar() {
  return (
    // Changed bg to white and added border-bottom for a clean look
    <nav className="navbar navbar-expand-lg shadow-sm fixed-top bg-white border-bottom">
      <div className="container-fluid px-0">
        
        <Link className="navbar-brand ms-3 d-flex align-items-center" to="/">
          <img 
            src={intbuddylogo} 
            alt="IntBuddy Logo" 
            style={{ 
              height: "90px", 
              width: "auto", 
              objectFit: "contain",
              marginTop: "-20px",
              marginBottom: "-20px" 
            }}  
          />
        </Link>

        <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Changed text colors to dark for white background */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/About">About</Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-dark fw-semibold" to="#" role="button" data-bs-toggle="dropdown">
                Services
              </Link>
              <ul className="dropdown-menu shadow border-0">
                <li><Link className="dropdown-item" to="/web">Web Development</Link></li>
                <li><Link className="dropdown-item" to="/app">App Development</Link></li>
                <li><Link className="dropdown-item" to="/ui">UI Design</Link></li>
              </ul>
            </li>
          </ul>

          <form className="d-flex mx-auto" style={{ width: "40%" }}>
            <input className="form-control rounded-pill me-2 border-primary" type="search" placeholder="Search..." />
            {/* Changed btn-warning to btn-primary */}
            <button className="btn btn-primary rounded-pill px-4" type="submit">Search</button>
          </form>

          <div className="d-flex align-items-center me-3">
            {/* Changed btn-outline-light to btn-outline-primary for visibility */}
            <Link className="btn btn-outline-primary rounded-pill me-2 px-4" to="/Login">Login</Link>
            {/* Changed btn-warning to btn-primary */}
            <Link className="btn btn-primary rounded-pill px-4" to="/Registration">Register</Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
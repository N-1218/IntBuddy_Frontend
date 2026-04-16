import { Link } from "react-router-dom";
import intbuddylogo from "../assets/intbuddylogo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow fixed-top" style={{ backgroundColor: "#000" }}>
      <div className="container-fluid px-0">

        <Link className="navbar-brand ms-3 d-flex align-items-center" to="/"><img src={intbuddylogo} alt="IntBuddy Logo" style={{ height: "90px", width: "auto", objectFit: "contain",marginTop: "-20px",marginBottom: "-20px" }}  /></Link>

        <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link active fw-semibold" to="/" >Home</Link></li>
            <li className="nav-item"><Link className="nav-link active fw-semibold" to="/About">About</Link></li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle active fw-semibold" to="#" role="button" data-bs-toggle="dropdown">Services</Link>
              <ul className="dropdown-menu shadow">
                <li><Link className="dropdown-item" to="/web">Web Development</Link></li>
                <li><Link className="dropdown-item" to="/app">App Development</Link></li>
                <li><Link className="dropdown-item" to="/ui">UI Design</Link></li>
              </ul>
            </li>
          </ul>

          <form className="d-flex mx-auto" style={{ width: "40%" }}>
            <input className="form-control rounded-pill me-2" type="search" placeholder="Search..." />
            <button className="btn btn-warning rounded-pill" type="submit">Search</button>
          </form>

          <div className="d-flex align-items-center me-2">
            <Link className="btn btn-outline-light rounded-pill me-2" to="/Login">Login</Link>
            <Link className="btn btn-warning rounded-pill" to="/Registration">Register</Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
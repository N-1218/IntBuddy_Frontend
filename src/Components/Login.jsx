import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

function Login() {
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(true); }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <div className={`text-center p-5 rounded shadow bg-white ${show ? "opacity-100" : "opacity-0"}`} style={{ width: "400px", transform: show ? "translateY(0)" : "translateY(-50px)", transition: "all 0.8s ease" }}>
        
        <h3 className="text-dark fw-bold">Secure Login</h3>
        <p className="text-muted">Access your IntBuddy community account</p>

        <form>
          <div className="form-group text-start mt-3">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter valid email" />
            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div className="form-group text-start mt-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>

          <div className="form-check text-start mt-2">
            <input type="checkbox" className="form-check-input" id="check" />
            <label className="form-check-label" htmlFor="check">Remember me</label>
          </div>

          <Link to='/CustomerDashboard' type="submit" className="btn btn-warning w-100 mt-3 py-2">Login</Link>
        </form>

        <p className="text-muted mt-3 small">By signing in, you agree to our <span className="text-primary">terms of service</span> and <span className="text-primary">privacy policy</span>.</p>

        <hr />

        <p className="text-success mt-3"><i className="bi bi-check-circle me-2"></i>Restricted to Interview users only...!</p>

      </div>
    </div>
  );
}

export default Login;
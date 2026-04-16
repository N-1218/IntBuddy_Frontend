import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import  axios from "axios";

function Registration() {
  const [show, setShow] = useState(false);
  useEffect(function () { setShow(true); }, []);


  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", marginTop: "60px" }}>
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "900px", transform: show ? "translateY(0)" : "translateY(60px)", opacity: show ? 1 : 0, transition: "all 0.8s ease" }}>
        <div className="row align-items-center">

          <div className="col-md-6 text-center p-4">
            <h2 className="fw-bold mb-3">Join IntBuddy ...!</h2>
            <p className="text-muted">Share your interview experience and help others succeed in their career journey.</p>
          </div>

          <div className="col-md-6 p-4">
            <h5 className="text-center mb-3">Create Account</h5>

            <form>
              <div className="row mb-3">
                <div className="col-6">
                  <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="col-6">
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>
              </div>

              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email Address" />
              </div>

              <div className="mb-3">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" />
                  <label className="form-check-label">Female</label>
                </div>
              </div>

              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password" />
              </div>

              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Re-enter Password" />
              </div>

              <div className="mb-3">
                <Link className="btn btn-warning w-10">Verify</Link>
              </div>

              <div className="row mb-3">
                <div className="col-6">
                  <select className="form-control">
                    <option>Country</option>
                    <option>India</option>
                    <option>USA</option>
                  </select>
                </div>
                <div className="col-6">
                  <select className="form-control">
                    <option>State</option>
                    <option>Delhi</option>
                    <option>Maharashtra</option>
                  </select>
                </div>
              </div>

              <Link className="btn btn-warning w-100" >Register</Link>
            </form>

            <div className="text-center mt-3">
              Already have an account? <Link to="/Login">Login</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Registration() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center"
         style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

      <div className="card shadow-lg p-4"
           style={{
             width: "800px",
             transform: show ? "scale(1)" : "scale(0.95)",
             opacity: show ? 1 : 0,
             transition: "all 0.5s ease"
           }}>

        <div className="row">

          {/* Left Side */}
          <div className="col-md-5 text-center d-flex flex-column justify-content-center">

            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
              alt="icon"
              style={{ width: "60px", margin: "0 auto 10px" }}
            />

            {/* Animated Text */}
            <h3 className="fw-bold animated-text">Join IntBuddy ...!</h3>

            <p className="text-muted animated-text delay">
              Share your interview experience and help others grow.
            </p>

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="icon"
              style={{ width: "70px", margin: "10px auto 0" }}
            />
          </div>

          {/* Right Side Form */}
          <div className="col-md-7">
            <h5 className="text-center mb-3">Create Account</h5>

            <form>
              <div className="row">
                <div className="col-6">
                  <input type="text" className="form-control mb-3" placeholder="Full Name" />
                </div>
                <div className="col-6">
                  <input type="email" className="form-control mb-3" placeholder="Email" />
                </div>
              </div>

              <input type="text" className="form-control mb-3" placeholder="Contact Number" />

              <div className="mb-3">
                <label className="fw-semibold">Gender</label><br />
                <label className="me-3">
                  <input type="radio" name="gender" /> Male
                </label>
                <label>
                  <input type="radio" name="gender" /> Female
                </label>
              </div>

              <div className="row">
                <div className="col-6">
                  <input type="password" className="form-control mb-3" placeholder="Password" />
                </div>
                <div className="col-6">
                  <input type="password" className="form-control mb-3" placeholder="Confirm Password" />
                </div>
              </div>

              <div className="text-center mb-3">
                <button type="button" className="btn btn-warning btn-sm px-4">
                  Verify
                </button>
              </div>

              <div className="row">
                <div className="col-6">
                  <select className="form-control mb-3">
                    <option>Country</option>
                    <option>India</option>
                    <option>USA</option>
                  </select>
                </div>
                <div className="col-6">
                  <select className="form-control mb-3">
                    <option>State</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                  </select>
                </div>
              </div>

              <input type="text" className="form-control mb-3" placeholder="LinkedIn URL" />
              <input type="text" className="form-control mb-3" placeholder="Naukri URL" />

              <button className="btn btn-warning w-100">Register</button>
            </form>

            <div className="text-center mt-3">
              Already have an account? <Link to="/Login">Login</Link>
            </div>
          </div>

        </div>
      </div>

      {/* Animation CSS */}
      <style>
        {`
          .animated-text {
            animation: fadeUp 1s ease-in-out;
          }

          .animated-text.delay {
            animation-delay: 0.5s;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Registration;
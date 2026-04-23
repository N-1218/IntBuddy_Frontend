import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "",Email:"", gender: "",
    password: "", confirmPassword: "",
    country: "", state: "", linkedin: ""
  });

  useEffect(() => setShow(true), []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword)
      return alert("Passwords do not match");

    alert("Registration Successful!");
    navigate("/Login");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#f8f9fa" }}>

      <div className="card shadow-lg p-4"
        style={{
          width: "800px",
          transform: show ? "scale(1)" : "scale(0.95)",
          opacity: show ? 1 : 0,
          transition: "0.5s"
        }}>

        <div className="row">

          {/* LEFT */}
          <div className="col-md-5 text-center d-flex flex-column justify-content-center">
            <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" width="60" />
            <h3 className="fw-bold animated-text">Join IntBuddy ...!</h3>
            <p className="text-muted animated-text delay">
              Share your interview experience and help others grow.
            </p>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width="70" />
          </div>

          {/* RIGHT */}
          <div className="col-md-7">
            <h5 className="text-center mb-3">Create Account</h5>

            <form onSubmit={handleSubmit}>

              <div className="row">
                <div className="col-6">
                  <input name="name" className="form-control mb-3" placeholder="Full Name" onChange={handleChange}/>
                </div>
                <div className="col-6">
                  <input type="email" name="email" className="form-control mb-3" placeholder="Email" onChange={handleChange}/>
                </div>
              </div>

              <input name="phone" className="form-control mb-3" placeholder="Contact Number" onChange={handleChange}/>
              <input name="phone" className="form-control mb-3" placeholder="Email" onChange={handleChange}/>

              <div className="mb-3">
                <label className="fw-semibold">Gender</label><br />
                {["Male", "Female"].map(g => (
                  <label key={g} className="me-3">
                    <input type="radio" name="gender" value={g} onChange={handleChange}/> {g}
                  </label>
                ))}
              </div>

              <div className="row">
                <div className="col-6">
                  <input type="password" name="password" className="form-control mb-3" placeholder="Password" onChange={handleChange}/>
                </div>
                <div className="col-6">
                  <input type="password" name="confirmPassword" className="form-control mb-3" placeholder="Confirm Password" onChange={handleChange}/>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <select name="country" className="form-control mb-3" onChange={handleChange}>
                    <option value="">Country</option>
                    <option>India</option>
                    <option>USA</option>
                  </select>
                </div>
                <div className="col-6">
                  <select name="state" className="form-control mb-3" onChange={handleChange}>
                    <option value="">State</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                  </select>
                </div>
              </div>

              <input name="linkedin" className="form-control mb-3" placeholder="LinkedIn URL" onChange={handleChange}/>

              <button className="btn btn-warning w-100">Register</button>
            </form>

            <div className="text-center mt-3">
              Already have an account? <Link to="/Login">Login</Link>
            </div>
          </div>

        </div>
      </div>

      {/* Animation */}
      <style>{`
        .animated-text { animation: fadeUp 1s ease; }
        .delay { animation-delay: 0.5s; }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(10px); }
          to { opacity:1; transform:translateY(0); }
        }
      `}</style>

    </div>
  );
}

export default Registration;
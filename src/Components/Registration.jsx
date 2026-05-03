import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Registration() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirmPassword: "",
    country: "",
    state: "",
    linkedin: ""
  });

  const validateField = (name, value) => {
    let error = "";

    if (name === "phone") {
      const phoneRegex = /^[6-9]\d{9}$/;
      if (value && !phoneRegex.test(value)) {
        error = "Enter valid 10-digit phone number";
      }
    }

    if (name === "password") {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

      if (value && !passwordRegex.test(value)) {
        error =
          "Min 8 chars, include uppercase, lowercase, number & special char";
      }
    }

    if (name === "confirmPassword") {
      if (value && value !== formData.password) {
        error = "Passwords do not match";
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    const errorMsg = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);

      // 🔥 SEND OTP (instead of register)
      await axios.post("http://localhost:8080/users/send-otp", {
        email: formData.email,
        phone: formData.phone
      });

      // 🔥 STORE FORM DATA
      localStorage.setItem("registerData", JSON.stringify(formData));

      // 🔥 REDIRECT TO OTP PAGE
      navigate("/otp");

    } catch (err) {
      if (err.response?.status === 409) {
        setErrors((prev) => ({
          ...prev,
          email: "User already exists"
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          general: err.response?.data?.message || "Failed to send OTP"
        }));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#f8f9fa" }}
    >
      <div className="card shadow-lg p-4" style={{ width: "800px" }}>
        <div className="row">

          {/* LEFT */}
          <div className="col-md-5 text-center d-flex flex-column justify-content-center">
            <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" width="60" alt="" />
            <h3 className="fw-bold mt-2">Join IntBuddy ...!</h3>
            <p className="text-muted">
              Share your interview experience and help others grow.
            </p>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width="70" alt="" />
          </div>

          {/* RIGHT */}
          <div className="col-md-7">
            <h5 className="text-center mb-3">Create Account</h5>

            {errors.general && (
              <div className="text-danger text-center mb-2">
                {errors.general}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="row">
                <div className="col-6">
                  <input
                    name="name"
                    value={formData.name}
                    className="form-control mb-3"
                    placeholder="Full Name"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-6">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    className="form-control mb-1"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                  />
                  <small className="text-danger">{errors.email}</small>
                </div>
              </div>

              <input
                name="phone"
                value={formData.phone}
                className="form-control mb-1"
                placeholder="Contact Number"
                onChange={handleChange}
                required
              />
              <small className="text-danger">{errors.phone}</small>

              <div className="mb-3 mt-2">
                <label className="fw-semibold">Gender</label><br />
                {["Male", "Female"].map((g) => (
                  <label key={g} className="me-3">
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={formData.gender === g}
                      onChange={handleChange}
                      required
                    />{" "}
                    {g}
                  </label>
                ))}
              </div>

              <div className="row">
                <div className="col-6">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    className="form-control mb-1"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                  />
                  <small className="text-danger">{errors.password}</small>
                </div>

                <div className="col-6">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    className="form-control mb-1"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    required
                  />
                  <small className="text-danger">{errors.confirmPassword}</small>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <select
                    name="country"
                    value={formData.country}
                    className="form-control mb-3"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Country</option>
                    <option>India</option>
                    <option>USA</option>
                  </select>
                </div>

                <div className="col-6">
                  <select
                    name="state"
                    value={formData.state}
                    className="form-control mb-3"
                    onChange={handleChange}
                    required
                  >
                    <option value="">State</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                  </select>
                </div>
              </div>

              <input
                name="linkedin"
                value={formData.linkedin}
                className="form-control mb-3"
                placeholder="LinkedIn URL"
                onChange={handleChange}
              />

              <button
                type="submit"
                className="btn btn-warning w-100"
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Register"}
              </button>
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
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Registration() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

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
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  if (value && !passwordRegex.test(value)) {
    error = "Minimum 8 characters, include letters and numbers";
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
      [name]: errorMsg,
      general: ""
    }));
  };

  // SEND OTP
  const sendOtp = async () => {
    if (!formData.email || !formData.phone) {
      setErrors({ general: "Enter email and phone first" });
      return;
    }

    if (otpSent) return;

    try {
      setLoading(true);

      await axios.post("http://localhost:8080/users/send-otp", {
        email: formData.email,
        phone: formData.phone
      });

      setOtpSent(true);
      setErrors({});
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        general: err.response?.data?.message || "Failed to send OTP"
      }));
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP
  const verifyOtp = async () => {
    if (!otp) {
      setErrors({ general: "Enter OTP first" });
      return;
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:8080/users/verify-otp", {
        email: formData.email,
        otp: otp.trim()
      });

      setOtpVerified(true);
      setErrors({});
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        general: err.response?.data?.message || "Invalid OTP"
      }));
    } finally {
      setLoading(false);
    }
  };

  // FINAL REGISTER
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otpVerified) {
      setErrors({ general: "Please verify OTP first" });
      return;
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:8080/users/register", formData);

      navigate("/login");
    } catch (err) {
      setErrors({
        general: err.response?.data?.message || "Registration failed"
      });
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

              {/* YOUR SAME FIELDS — NO CHANGE */}
              <div className="row">
                <div className="col-6">
                  <input name="name" value={formData.name} className="form-control mb-3" placeholder="Full Name" onChange={handleChange} required />
                </div>

                <div className="col-6">
                  <input type="email" name="email" value={formData.email} className="form-control mb-1" placeholder="Email" onChange={handleChange} required />
                  <small className="text-danger">{errors.email}</small>
                </div>
              </div>

              <input name="phone" value={formData.phone} className="form-control mb-1" placeholder="Contact Number" onChange={handleChange} required />
              <small className="text-danger">{errors.phone}</small>

              <div className="mb-3 mt-2">
                <label className="fw-semibold">Gender</label><br />
                {["Male", "Female"].map((g) => (
                  <label key={g} className="me-3">
                    <input type="radio" name="gender" value={g} checked={formData.gender === g} onChange={handleChange} required /> {g}
                  </label>
                ))}
              </div>

              <div className="row">
                <div className="col-6">
                  <input type="password" name="password" value={formData.password} className="form-control mb-1" placeholder="Password" onChange={handleChange} required />
                  <small className="text-danger">{errors.password}</small>
                </div>

                <div className="col-6">
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} className="form-control mb-1" placeholder="Confirm Password" onChange={handleChange} required />
                  <small className="text-danger">{errors.confirmPassword}</small>
                </div>
              </div>

              {/* OTP BUTTON */}
              {formData.password &&
                formData.confirmPassword &&
                formData.password === formData.confirmPassword &&
                !otpVerified && (
                  <button type="button" className="btn btn-info w-100 mt-2" onClick={sendOtp} disabled={loading}>
                    {loading ? "Sending..." : "Send OTP"}
                  </button>
                )}

              {/*  OTP INPUT */}
              {otpSent && !otpVerified && (
                <>
                  <input type="text" className="form-control mt-2" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                  <button type="button" className="btn btn-success w-100 mt-2" onClick={verifyOtp} disabled={loading}>
                    Verify OTP
                  </button>
                </>
              )}

              {otpVerified && (
                <div className="text-success mt-2 text-center">
                  OTP Verified ✔
                </div>
              )}

              {/* REMAINING FIELDS SAME */}
              <div className="row mt-2">
                <div className="col-6">
                  <select name="country" value={formData.country} className="form-control mb-3" onChange={handleChange} required>
                    <option value="">Country</option>
                    <option>India</option>
                    <option>USA</option>
                  </select>
                </div>

                <div className="col-6">
                  <select name="state" value={formData.state} className="form-control mb-3" onChange={handleChange} required>
                    <option value="">State</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                  </select>
                </div>
              </div>

              <input name="linkedin" value={formData.linkedin} className="form-control mb-3" placeholder="LinkedIn URL" onChange={handleChange} />

              <button type="submit" className="btn btn-warning w-100" disabled={!otpVerified || loading}>
                {loading ? "Processing..." : "Register"}
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
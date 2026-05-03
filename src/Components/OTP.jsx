import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Otp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      const formData = JSON.parse(localStorage.getItem("registerData"));

      const res = await axios.post(
        "http://localhost:8080/users/verify-otp",
        {
          email: formData.email,
          otp: otp
        }
      );

      alert("Registration Successful ✅");

      localStorage.removeItem("registerData");

      navigate("/Login");

    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card p-4 text-center" style={{ width: "400px" }}>
        <h4>Enter OTP</h4>

        <input
          type="text"
          className="form-control my-3"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button className="btn btn-success w-100" onClick={handleVerify}>
          Verify OTP
        </button>
      </div>
    </div>
  );
}

export default Otp;
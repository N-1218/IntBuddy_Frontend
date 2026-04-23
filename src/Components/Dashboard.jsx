import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [user, setUser] = useState({
    name: "Guest",
    email: "",
    phonenumber: ""
  });

  const [offer, setOffer] = useState("");
  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) setUser(JSON.parse(data));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  const getBtnClass = (tab) =>
    `btn w-100 text-start mb-2 ${
      activeTab === tab ? "btn-warning" : "btn-light"
    }`;

  return (
    <div className="bg-light min-vh-100">

      {/* NAVBAR */}
      <nav className="navbar bg-white border-bottom fixed-top px-4 shadow-sm">
        <Link className="navbar-brand fw-bold text-warning" to="/">
          IntBuddy
        </Link>

        <div className="d-flex align-items-center">
          <div className="text-end me-3 d-none d-sm-block">
            <div className="fw-bold small">{user.name}</div>
            <div className="text-muted small">Customer</div>
          </div>

          <img
            src={`https://ui-avatars.com/api/?name=${user.name}`}
            className="rounded-circle"
            width="40"
            alt="user"
          />
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">

          {/* SIDEBAR */}
          <div
            className="col-md-3 col-lg-2 bg-white border-end position-fixed pt-4"
            style={{ top: "60px", height: "100vh" }}
          >
            <div className="px-3">

              <button onClick={() => setActiveTab("overview")} className={getBtnClass("overview")}>
                <i className="bi bi-grid me-2"></i> Overview
              </button>

              <button onClick={() => setActiveTab("comments")} className={getBtnClass("comments")}>
                <i className="bi bi-chat-dots me-2"></i> Comments
              </button>

              <button onClick={() => setActiveTab("form")} className={getBtnClass("form")}>
                <i className="bi bi-file-earmark-text me-2"></i> Form
              </button>

              <hr />

              <button onClick={handleLogout} className="btn btn-outline-danger w-100 text-start">
                <i className="bi bi-box-arrow-right me-2"></i> Logout
              </button>

            </div>
          </div>

          {/* MAIN */}
          <div className="col-md-9 col-lg-10 ms-auto px-4" style={{ marginTop: "80px" }}>

            <h2 className="fw-bold mb-4 text-capitalize">{activeTab}</h2>

            {/* OVERVIEW */}
            {activeTab === "overview" && (
              <div className="card p-4 shadow-sm">
                <h5>User Details</h5>
                <hr />
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phonenumber}</p>
              </div>
            )}

            {/* COMMENTS */}
            {activeTab === "comments" && (
              <div className="card p-5 text-center shadow-sm">
                <h4>No Comments Yet</h4>
              </div>
            )}

            {/* ✅ FORM STEP 1 */}
            {activeTab === "form" && (
              <div className="card p-4 shadow-sm">

                <h4 className="mb-4">Interview Experience - Step 1</h4>

                <div className="row">

                  {/* Anonymous */}
                  <div className="col-12 mb-4">
                    <label className="fw-semibold">Stay anonymous?</label><br />
                    <label className="me-3">
                      <input type="radio" name="anon" /> Yes
                    </label>
                    <label>
                      <input type="radio" name="anon" /> No
                    </label>
                  </div>

                  {/* Company */}
                  <div className="col-md-6 mb-4">
                    <label className="fw-semibold">Company *</label>
                    <input className="form-control" />
                  </div>

                  {/* Role */}
                  <div className="col-md-6 mb-4">
                    <label className="fw-semibold">Role *</label>
                    <input className="form-control" />
                  </div>

                  {/* Offer */}
                  <div className="col-md-6 mb-4">
                    <label className="fw-semibold">Got Offer?</label><br />

                    <label className="me-3">
                      <input type="radio" value="yes" name="offer"
                        onChange={(e) => setOffer(e.target.value)} /> Yes
                    </label>

                    <label>
                      <input type="radio" value="no" name="offer"
                        onChange={(e) => setOffer(e.target.value)} /> No
                    </label>

                    {offer === "no" && (
                      <textarea className="form-control mt-3" placeholder="Why rejected?" />
                    )}
                  </div>

                  {/* Location */}
                  <div className="col-md-6 mb-4">
                    <label className="fw-semibold">Location</label>
                    <select className="form-control">
                      <option>Choose...</option>
                      <option>India</option>
                      <option>USA</option>
                    </select>
                  </div>

                </div>

                {/* Experience */}
                <div className="mb-4">
                  <label className="fw-semibold">Experience</label><br />
                  {["Fresher", "0-2 Years", "2+ Years"].map((exp) => (
                    <label key={exp} className="me-3">
                      <input type="radio" name="exp" /> {exp}
                    </label>
                  ))}
                </div>

                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-warning"
                    onClick={() => setActiveTab("form2")}
                  >
                    Next
                  </button>
                </div>

              </div>
            )}

            {/* ✅ FORM STEP 2 */}
            {activeTab === "form2" && (
              <div className="card p-4 shadow-sm">

                <h4 className="mb-4">Interview Questions</h4>

                {[...Array(count)].map((_, i) => (
                  <div key={i} className="mb-4">
                    <label>Question {i + 1}</label>
                    <input className="form-control mb-2" placeholder="Enter question" />

                    <label>Answer</label>
                    <textarea className="form-control" placeholder="Write answer" />
                  </div>
                ))}

                <button
                  className="btn btn-link"
                  onClick={() => setCount(count + 1)}
                >
                  + Add Question
                </button>

                <div className="d-flex justify-content-between mt-4">
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => setActiveTab("form")}
                  >
                    Back
                  </button>

                  <button className="btn btn-success">
                    Submit
                  </button>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
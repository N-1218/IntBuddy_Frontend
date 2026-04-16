import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="container mt-5 pt-5">
      <div className="card shadow p-4">

        <h3 className="fw-bold mb-3">Your Profile Details</h3>
        <p className="text-muted">Fill in your details to complete your interview submission.</p>

        <div className="mb-4">
          <label className="form-label fw-semibold">Do you want to stay anonymous?</label>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="anon" id="yes" />
              <label className="form-check-label" htmlFor="yes">Yes</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="anon" id="no" />
              <label className="form-check-label" htmlFor="no">No</label>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">Full Name <span className="text-danger">*</span></label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">Email Address <span className="text-danger">*</span></label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">Contact Number <span className="text-danger">*</span></label>
            <input type="tel" className="form-control" placeholder="Enter phone number" />
            <small className="text-muted">Only used for important updates.</small>
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">LinkedIn Profile</label>
            <input type="text" className="form-control" placeholder="Paste your LinkedIn URL" />
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">Highest Qualification <span className="text-danger">*</span></label>
            <input type="text" className="form-control" placeholder="e.g. B.Tech, MCA, BCA" />
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">College / University <span className="text-danger">*</span></label>
            <input type="text" className="form-control" placeholder="Enter your college name" />
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">Field of Study <span className="text-danger">*</span></label>
            <input type="text" className="form-control" placeholder="e.g. Computer Science" />
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">CGPA / Percentage</label>
            <input type="text" className="form-control" placeholder="Enter your score" />
          </div>

        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Your Experience Level <span className="text-danger">*</span></label>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="exp" />
              <label className="form-check-label">Fresher</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="exp" />
              <label className="form-check-label">0 - 2 Years</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="exp" />
              <label className="form-check-label">2+ Years</label>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between mt-4">
          <Link className="btn btn-outline-secondary px-4" to="/ExperianceForm">← Back</Link>
          <Link className="btn btn-warning px-4" to="/ExperianceForm2">Continue →</Link>
        </div>

      </div>
    </div>
  );
}

export default Profile;
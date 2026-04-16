import React, { useState } from "react";
import { Link } from "react-router-dom";

function ExperienceForm() {
  const [offer, setOffer] = useState("");

  return (
    <div className="container mt-5 pt-5">
      <div className="card shadow p-4">

        <h3 className="fw-bold mb-4">Interview Experience</h3>
        <h5 className="fw-bold mb-3">Information</h5>

        <div className="row">

          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">Company you applied to? <span className="text-danger">*</span></label>
            <input type="text" className="form-control" />
            <small className="text-muted">Ex - Amazon, Google, Microsoft</small>
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">Role for which you applied? <span className="text-danger">*</span></label>
            <input type="text" className="form-control" />
            <small className="text-muted">Ex - SDE-1, SDE-2 or SDE-Intern</small>
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">Did you get an offer? <span className="text-danger">*</span></label>
            <div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="offer" value="yes" onChange={(e) => setOffer(e.target.value)} />
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="offer" value="no" onChange={(e) => setOffer(e.target.value)} />
                <label className="form-check-label">No</label>
              </div>
            </div>
            {offer === "no" && (
              <div className="mt-3">
                <label className="form-label fw-semibold">Why were you rejected?</label>
                <textarea className="form-control" rows="3" placeholder="Write your reason..."></textarea>
              </div>
            )}
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">Company Location</label>
            <select className="form-control">
              <option>Choose...</option>
              <option>California</option>
              <option>New York</option>
              <option>India</option>
              <option>Texas</option>
              <option>Delhi</option>
            </select>
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-semibold">Referrer Email Id</label>
            <input type="email" className="form-control" />
          </div>

        </div>

        <div className="d-flex justify-content-between mt-4">
          <Link className="btn btn-warning px-4" to="/Profile">Next →</Link>
          <button className="btn btn-outline-warning px-4">Save</button>
        </div>

      </div>
    </div>
  );
}

export default ExperienceForm;
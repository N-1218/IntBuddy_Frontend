import React, { useState } from "react";
import { Link } from "react-router-dom";

function ExperianceForm2() {

  const [count, setCount] = useState(1);

  function addQuestion() {
    setCount(count + 1);
  }

  var boxes = [];

  for (var i = 0; i < count; i++) {
    boxes.push(
      <div className="col-md-12 mb-4">
        <label className="form-label fw-semibold">
          Interview Question {i + 1}
        </label>

        <input type="text" className="form-control mb-2" placeholder="Enter question" />

        <label className="form-label fw-semibold">Answer</label>

        <textarea className="form-control" rows="3" placeholder="Write answer..."></textarea>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-5">
      <div className="card shadow p-4">

        <h3 className="fw-bold mb-4">Interview Experience</h3>

        <div className="row">

          {boxes}

          <div className="col-md-12">
            <Link type="button" className="btn btn-link" onClick={addQuestion}>+ Add Another
            </Link>
          </div>

        </div>

        <div className="d-flex justify-content-between mt-4">
          <Link className="btn btn-warning px-4" to="/Profile">Next →</Link>
          <Link className="btn btn-outline-warning px-4">Save</Link>
        </div>

      </div>
    </div>
  );
}

export default ExperianceForm2;
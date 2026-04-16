import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card() {
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(true); }, []);

  return (
    <div className="container-fluid py-5 bg-light text-center mt-5" style={{ paddingTop: "60px" }}>

      <h2 className="fw-bold mb-5" style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(-20px)", transition: "all 0.6s ease" }}>
        How To Participate ?
      </h2>

      <div className="row justify-content-center">

        <div className="col-md-3 mb-4" style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(40px)", transition: "all 0.8s ease 0.2s" }}>
          <img src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png" alt="Step 1" className="mb-3" style={{ width: "60px" }} />
          <h5 className="fw-bold text-decoration-underline">STEP 1</h5>
          <p className="text-muted">Fill your interview experience using the email ID through which you will receive your voucher.</p>
        </div>

        <div className="col-md-3 mb-4" style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(40px)", transition: "all 0.8s ease 0.4s" }}>
          <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" alt="Step 2" className="mb-3" style={{ width: "60px" }} />
          <h5 className="fw-bold text-decoration-underline">STEP 2</h5>
          <p className="text-muted">Our team will review your submission and update you once it gets approved.</p>
        </div>

        <div className="col-md-3 mb-4" style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(40px)", transition: "all 0.8s ease 0.6s" }}>
          <img src="https://cdn-icons-png.flaticon.com/128/2331/2331970.png" alt="Step 3" className="mb-3" style={{ width: "60px" }} />
          <h5 className="fw-bold text-decoration-underline">STEP 3</h5>
          <p className="text-muted">Your interview experience will be published on the platform.</p>
        </div>

      </div>

      <Link to="/share" className="btn btn-warning px-4 py-2 fw-semibold mt-4 shadow" style={{ opacity: show ? 1 : 0, transform: show ? "scale(1)" : "scale(0.8)", transition: "all 0.8s ease" }}>
        Share your Story
      </Link>

    </div>
  );
}

export default Card;
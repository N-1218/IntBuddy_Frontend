import React from "react";

function Benefits() {
  return (
    <section className="py-5 bg-white">
      <div className="container text-center">
        
        {/* Simple Heading */}
        <h2 className="fw-bold mb-5 display-5 text-dark">
          Benefits for <span className="text-warning">You</span>
        </h2>

        <div className="row g-4 justify-content-center">
          
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="p-4 h-100 rounded-4 border border-warning-subtle shadow-sm">
              <i className="bi bi-linkedin fs-1 text-primary"></i>
              <h5 className="fw-bold mt-3 ">LinkedIn Exposure</h5>
              <p className="text-muted small">Boost your professional reach and network visibility.</p>
            </div>
          </div>

          {/* Card 2 - The Highlighted Card */}
          <div className="col-md-4">
            <div className="p-4 h-100 rounded-4 border border-warning-subtle shadow-sm ">
              <i className="bi bi-trophy fs-1 text-warning"></i>
              <h5 className="fw-bold mt-3 text-dark">Win Rewards</h5>
              <p className="text-dark opacity-75 small">Stand a chance to win exclusive rewards worth ₹1,000!</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="p-4 h-100 rounded-4 border border-warning-subtle shadow-sm">
              <i className="bi bi-journal-check fs-1 text-dark"></i>
              <h5 className="fw-bold mt-3">Get Published</h5>
              <p className="text-muted small">Share your interview journey with our global community.</p>
            </div>
          </div>

          {/* Card 4 - Centered below */}
          <div className="col-md-4 mt-md-4">
            <div className="p-4 h-100 rounded-4 border border-warning-subtle shadow-sm">
              <i className="bi bi-people fs-1 text-dark"></i>
              <h5 className="fw-bold mt-3">Mentorship Impact</h5>
              <p className="text-muted small">Help aspiring candidates land roles at top tech companies.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Benefits;
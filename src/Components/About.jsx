import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function About() {
  const [show, setShow] = useState(false);

  useEffect(function () {
    setShow(true);
  }, []);

  return (
    <section className="py-5 bg-light mt-5">
      <div className="container">

        {/* Heading */}
        <div
          className="row justify-content-center mb-5 text-center"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(-30px)",
            transition: "0.8s"
          }}
        >
          <div className="col-md-8">
            <span className="text-uppercase text-secondary fw-semibold">Our Platform</span>
            <h2 className="display-4 fw-bold mt-2">About Us</h2>
            <p className="lead text-muted">
              Helping students and job seekers share real interview experiences.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="row text-center">

          <div
            className="col-md-4 mb-4"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(40px)",
              transition: "0.8s 0.2s"
            }}
          >
            <div className="p-4 shadow rounded bg-white h-100">
              <h5 className="fw-bold">Share Experiences</h5>
              <p className="text-muted">Post interview experiences.</p>
            </div>
          </div>

          <div
            className="col-md-4 mb-4"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(40px)",
              transition: "0.8s 0.4s"
            }}
          >
            <div className="p-4 shadow rounded bg-white h-100">
              <h5 className="fw-bold">Learn & Prepare</h5>
              <p className="text-muted">Learn from real interview questions.</p>
            </div>
          </div>

          <div
            className="col-md-4 mb-4"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(40px)",
              transition: "0.8s 0.6s"
            }}
          >
            <div className="p-4 shadow rounded bg-white h-100">
              <h5 className="fw-bold">Help Community</h5>
              <p className="text-muted">Help others by sharing your journey.</p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="row mt-5">

          <div
            className="col-md-6 mb-4"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateX(0)" : "translateX(-40px)",
              transition: "0.8s"
            }}
          >
            <div className="p-4 bg-white shadow rounded h-100">
              <h4 className="fw-bold mb-3">Why Use This Platform?</h4>
              <ul className="text-muted">
                <li>Real interview experiences</li>
                <li>Company-wise preparation</li>
                <li>Helps freshers & job seekers</li>
                <li>Easy to share and explore</li>
              </ul>
            </div>
          </div>

          <div
            className="col-md-6 mb-4"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateX(0)" : "translateX(40px)",
              transition: "0.8s"
            }}
          >
            <div className="p-4 bg-white shadow rounded h-100">
              <h4 className="fw-bold mb-3">What You Can Do</h4>
              <ul className="text-muted">
                <li>Post your experience</li>
                <li>Browse others</li>
                <li>Learn questions</li>
                <li>Improve skills</li>
              </ul>
            </div>
          </div>

        </div>

        <div
          className="text-center mt-4"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "scale(1)" : "scale(0.8)",
            transition: "0.6s"
          }}
        >
          
        </div>

      </div>
    </section>
  );
}

export default About;
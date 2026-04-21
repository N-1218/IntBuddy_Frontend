import React from "react";
import Hero from "../assets/hero.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Home() {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center bg-light overflow-hidden">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE: Floating Text Content */}
          <div className="col-md-6 text-center text-md-start animate-text-float">
            <h1 className="fw-bold display-5">
              Land your dream tech job with <br />
              <span className="text-primary">expert coaching</span>
            </h1>
            <p className="text-muted mt-3">
              Get 1:1 mock interviews, mentorship, and resume reviews from 
              professionals at top tech companies.
            </p>
            <div className="input-group mt-4 shadow-sm rounded-pill overflow-hidden bg-white">
              <input 
                type="text" 
                className="form-control border-0 ps-4" 
                placeholder="What do you want to get better at?" 
              />
              <button className="btn btn-primary px-4">Search</button>
            </div>
          </div>

          {/* RIGHT SIDE: Image & Badge Galaxy */}
          <div className="col-md-6 position-relative mt-5 mt-md-0 d-flex justify-content-center align-items-center">
            
            /* BACKGROUND GLOW */
            <div 
              className="position-absolute bg-primary rounded-circle opacity-10"
              style={{ width: "450px", height: "450px", filter: "blur(60px)", zIndex: 0 }}
            ></div>

            {/* MAIN IMAGE CONTAINER */}
        
            <div className="position-relative float-infinite" style={{ animationDuration: "6s" }}>
              <img src={Hero}  alt="mentor"className="img-fluid shadow-lg rounded-5"  style={{ width: "450px",  zIndex: 2, maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
                }}/>

              {/* --- BADGES --- */}
              
              <div className="position-absolute bg-white shadow-sm rounded-pill px-3 py-2 d-flex align-items-center gap-2 float-infinite" 
                style={{ zIndex: 3, top: '-10%', right: '-10%', animationDelay: '0s' }}>
                <i className="bi bi-google text-danger"></i>
                <small className="fw-bold">Google</small>
              </div>

         
              <div className="position-absolute bg-white shadow-sm rounded-pill px-3 py-2 d-flex align-items-center gap-2 float-infinite" 
                style={{ zIndex: 3, bottom: '5%', left: '-15%', animationDelay: '1.2s' }}>
                <i className="bi bi-cpu-fill text-primary"></i>
                <small className="fw-bold">Meta</small>
              </div>

              <div className="position-absolute bg-white shadow-sm rounded-pill px-3 py-2 d-flex align-items-center gap-2 float-infinite" 
                style={{ zIndex: 3, top: '45%', right: '-25%', animationDelay: '0.5s' }}>
                <i className="bi bi-bag-fill text-warning"></i>
                <small className="fw-bold">Amazon</small>
              </div>

           
              <div className="position-absolute bg-white shadow-sm rounded-pill px-3 py-2 d-flex align-items-center gap-2 float-infinite" 
                style={{ zIndex: 3, top: '15%', left: '-20%', animationDelay: '2s' }}>
                <i className="bi bi-microsoft text-success"></i>
                <small className="fw-bold">Microsoft</small>
              </div>

             
              <div className="position-absolute bg-white shadow-sm rounded-pill px-3 py-2 d-flex align-items-center gap-2 float-infinite" 
                style={{ zIndex: 3, bottom: '15%', right: '-15%', animationDelay: '0.8s' }}>
                <i className="bi bi-play-fill text-danger"></i>
                <small className="fw-bold">Netflix</small>
              </div>

            
              <div className="position-absolute bg-white shadow-sm rounded-pill px-3 py-2 d-flex align-items-center gap-2 float-infinite" 
                style={{ zIndex: 3, top: '70%', left: '-20%', animationDelay: '2.5s' }}>
                <i className="bi bi-apple text-dark"></i>
                <small className="fw-bold">Apple</small>
              </div>

             
              <div className="position-absolute bg-white shadow-sm rounded-pill px-3 py-2 d-flex align-items-center gap-2 float-infinite" 
                style={{ zIndex: 3, top: '-15%', left: '10%', animationDelay: '3s' }}>
                <i className="bi bi-brush text-danger"></i>
                <small className="fw-bold">Adobe</small>
              </div>

            
              <div className="position-absolute bg-white shadow-sm rounded-pill px-3 py-2 d-flex align-items-center gap-2 float-infinite" 
                style={{ zIndex: 3, bottom: '-10%', right: '15%', animationDelay: '1.5s' }}>
                <i className="bi bi-car-front-fill text-dark"></i>
                <small className="fw-bold">Uber</small>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
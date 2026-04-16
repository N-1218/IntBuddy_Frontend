import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">

          <div className="col-md-3 mb-4">
            <h5>About Us</h5>
            <p>MyWebsite is dedicated to providing the best services for our customers. We specialize in web development, design, and digital solutions.</p>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/home" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="#/about" className="text-light text-decoration-none">About</Link></li>
              <li><Link to="/services" className="text-light text-decoration-none">Services</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Contact</h5>
            <p><i className="bi bi-geo-alt-fill"></i> 123 Main Street, Mumbai, India</p>
            <p><i className="bi bi-telephone-fill"></i> +91 9876543210</p>
            <p><i className="bi bi-envelope-fill"></i> info@mywebsite.com</p>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <Link to="#" className="text-light text-center"><i className="bi bi-facebook fs-3 d-block mb-1"></i>Facebook</Link>
              <Link to="#" className="text-light text-center"><i className="bi bi-twitter fs-3 d-block mb-1"></i>Twitter</Link>
              <Link to="#" className="text-light text-center"><i className="bi bi-instagram fs-3 d-block mb-1"></i>Instagram</Link>
              <Link to="#" className="text-light text-center"><i className="bi bi-linkedin fs-3 d-block mb-1"></i>LinkedIn</Link>
            </div>
          </div>

        </div>

        <hr className="bg-light" />

        <div className="row">
          <div className="col-12 text-center">
            <small>© 2026 MyWebsite. All rights reserved.</small>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
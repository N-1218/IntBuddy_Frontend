import React from "react";
import { Link } from "react-router-dom";
function CustomerDashboard() {
  const user = {
    name: "Namrata",
    email: "namrata@gmail.com"
  };

  return (
    <div className="container-fluid">
      <div className="row">

        {/* Sidebar */}
        <div
          className="col-md-3 col-lg-2 bg-dark text-white p-3 position-fixed"
          style={{ top: "70px",
    height: "100vh",
    transform: "translateX(0)",
    transition: "transform 0.5s ease-in-out" }}
        >
          <h4 className="text-center mb-4">Dashboard</h4>

          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <button className="btn btn-outline-light w-100">
                All Comments
              </button>
            </li>
            <li className="nav-item mb-2">
              <button className="btn btn-outline-light w-100">
                Likes
              </button>
            </li>
            <li className="nav-item mb-2">
              <Link className="btn btn-outline-light w-100" to='/ExperianceForm'>Experience Form </Link>
            </li>
            <li className="nav-item mt-4">
              <button className="btn btn-warning w-100">
                Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div
          className="col-md-9 col-lg-10 offset-md-3 offset-lg-2 p-4 text-center"
          style={{ marginTop: "70px" }}
        >
          <h2 className="mb-4">Customer Dashboard</h2>

          <div className="card shadow mx-auto" style={{ maxWidth: "400px" }}>
            <div className="card-body">
              <h4>Welcome, {user.name} ...!</h4>
              <p className="mb-0">Email: {user.email}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default CustomerDashboard;
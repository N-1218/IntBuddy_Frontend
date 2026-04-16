import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div
            className="container py-5"
            style={{ marginTop: "100px" }}
        >
            <div className="row align-items-center">

                {/* Left Side */}
                <div
                    className="col-md-6"
                    style={{
                        opacity: show ? 1 : 0,
                        transform: show ? "translateX(0)" : "translateX(-40px)",
                        transition: "all 0.8s ease"
                    }}
                >
                    <h1 className="fw-bold mb-3">
                        Share your Interview Story & inspire your peers
                    </h1>

                    <p className="fs-5 text-muted mb-2">
                        Internship or Job Interview experiences are accepted.
                    </p>

                    <p className="fs-5 fw-semibold text-success">
                        Uncleared Interview Experiences are also welcome.
                    </p>

                    <Link
                        to="/ExperianceForm"
                        className="btn btn-warning btn-lg mt-3 rounded-pill"
                    >
                        Share Your Experience
                    </Link>
                </div>

                {/* Right Side Image */}
                <div
                    className="col-md-6 text-center"
                    style={{
                        opacity: show ? 1 : 0,
                        transform: show ? "translateX(0)" : "translateX(40px)",
                        transition: "all 0.8s ease"
                    }}
                >
                    <img
                        src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg"
                        alt="Interview"
                        className="img-fluid"
                        style={{
                            maxHeight: "350px",
                            borderRadius: "10px"
                        }}
                    />
                </div>

            </div>
        </div>
    );
}

export default Home;
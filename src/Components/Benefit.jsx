import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Benefits() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <section className="py-5 bg-light"style={{ marginTop: "80px" }}>
            <div className="container text-center">
               
                <h2 className="fw-bold mb-5 text-warning fs-1"style={{ opacity: show ? 1 : 0,  transform: show ? "translateY(0)" : "translateY(-30px)",  transition: "all 0.6s ease" }} >Benefits for you </h2>
                <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-4" style={{  opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(40px)", transition: "all 0.6s ease 0.2s"}}>
                        <div className="p-4 bg-white rounded shadow-lg h-100">
                            <i className="bi bi-link-45deg fs-1 text-primary"></i>
                            <h5 className="fw-semibold mt-3">
                                Exposure to your LinkedIn Profile
                            </h5>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div  className="col-md-4 mb-4" style={{opacity: show ? 1 : 0,transform: show ? "translateY(0)" : "translateY(40px)", transition: "all 0.6s ease 0.4s"}} >
                        <div className="p-4 bg-white rounded shadow-lg h-100">
                            <i className="bi bi-gift fs-1 text-success"></i>
                            <h5 className="fw-semibold mt-3">
                                Chance to win ₹1k Amazon Voucher
                            </h5>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 mb-4"  style={{ opacity: show ? 1 : 0,transform: show ? "translateY(0)" : "translateY(40px)",transition: "all 0.6s ease 0.6s" }}>
                        <div className="p-4 bg-white rounded shadow-lg h-100">
                            <i className="bi bi-chat-dots fs-1 text-warning"></i>
                            <h5 className="fw-semibold mt-3">
                                Publishing your Interview Experience
                            </h5>
                        </div>
                    </div>
                </div>

                {/* Second Row */}
                <div  className="row justify-content-center mt-3"style={{opacity: show ? 1 : 0,transform: show ? "translateY(0)" : "translateY(40px)",transition: "all 0.6s ease 0.8s"}} >
                    <div className="col-md-4">
                        <div className="p-4 bg-white rounded shadow-lg h-100">
                            <i className="bi bi-building fs-1 text-danger"></i>
                            <h5 className="fw-semibold mt-3">
                                Help others get placed in top companies
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Benefits;
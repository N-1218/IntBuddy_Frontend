import React, { useEffect, useState } from "react";

function Benefits() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    // Custom style for consistent card hover effect
    const cardStyle = {
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer"
    };

    return (
        <section className="py-5 bg-light" style={{ marginTop: "80px" }}>
            <div className="container text-center">
                <h2 className="fw-bold mb-5 text-dark display-5 d-inline-block" style={{opacity: show ? 1 : 0,transform: show ? "translateY(0)" : "translateY(-30px)", transition: "all 0.6s ease",animation: "float 3s ease-in-out infinite"}}>Benefits for you</h2>
                <div className="row">
                   
                    <div className="col-md-4 mb-4" style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(40px)", transition: "all 0.6s ease 0.2s" }}>
                        <div 
                            className="p-4 bg-white rounded-4 shadow-sm h-100 border-top border-primary border-4"
                            style={cardStyle}
                            onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
                            onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
                        >
                            <i className="bi bi-linkedin fs-1 text-primary"></i>
                            <h5 className="fw-bold mt-3 text-dark">LinkedIn Exposure</h5>
                            <p className="text-muted small">Boost your professional reach and network visibility.</p>
                        </div>
                    </div>

                  
                    <div className="col-md-4 mb-4" style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(40px)", transition: "all 0.6s ease 0.4s" }}>
                        <div 
                            className="p-4 bg-white rounded-4 shadow-sm h-100 border-top border-primary border-4"
                            style={cardStyle}
                            onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
                            onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
                        >
                            <i className="bi bi-trophy fs-1 "></i>
                            <h5 className="fw-bold mt-3 text-dark">Rewards</h5>
                            <p className="text-muted small">Stand a chance to win rewards worth ₹1,000.</p>
                        </div>
                    </div>

                
                    <div className="col-md-4 mb-4" style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(40px)", transition: "all 0.6s ease 0.6s" }}>
                        <div 
                            className="p-4 bg-white rounded-4 shadow-sm h-100 border-top border-primary border-4"
                            style={cardStyle}
                            onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
                            onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
                        >
                            <i className="bi bi-journal-check fs-1 "></i>
                            <h5 className="fw-bold mt-3 text-dark">Get Published</h5>
                            <p className="text-muted small">Share your interview journey with our global community.</p>
                        </div>
                    </div>
                </div>

               
                <div className="row justify-content-center mt-3" style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(40px)", transition: "all 0.6s ease 0.8s" }}>
                    <div className="col-md-4">
                        <div 
                            className="p-4 bg-white rounded-4 shadow-sm h-100 border-top border-primary border-4"
                            style={cardStyle}
                            onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
                            onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
                        >
                            <i className="bi bi-people fs-1 "></i>
                            <h5 className="fw-bold mt-3 text-dark">Mentorship Impact</h5>
                            <p className="text-muted small">Help aspiring candidates land roles at top companies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Benefits;
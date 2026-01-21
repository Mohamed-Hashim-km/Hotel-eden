"use client";

import React, { useState } from "react";

const CommonAmenities = ({
  title = "Common Amenities",
  subtitle = "Everything You Need for a Comfortable Stay",
  description = "From elegant in-room comforts to thoughtful property-wide amenities, Hotel Eden ensures a seamless and comfortable stay.",
  amenities = [
    { id: 1, title: "24/7 Front Desk & Guest Assistance" },
    { id: 2, title: "Multi-cuisine Restaurants & Rooftop Dining" },
    { id: 3, title: "The Golden Leaf Spa & Wellness" },
    { id: 4, title: "Fitness Studio & Recreation Zone" },
    { id: 5, title: "Banquet & Conference Facilities" },
    { id: 6, title: "Basement Parking" },
    { id: 7, title: "High-Speed Wi-Fi" },
    { id: 8, title: "Room Service & Housekeeping" },
  ],
}) => {
    const [isSignupOpen, setIsSignupOpen] = useState(false);
  return (
    <div className="rts__section section__padding">
      <div className="container">
        {/* Header Section */}
        <div className="row justify-content-center text-center mb-50">
          <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
            <div className="section__topbar">
              <span className="h6 subtitle__icon__three mx-auto">{title}</span>
              {subtitle && <h2 className="section__title mb-30">{subtitle}</h2>}
            </div>
            {description && <p className="description ">{description}</p>}
          </div>
           <div className="d-flex justify-content-center mt-30 gap-3">
              <button href="#" className="theme-btn btn-style fill no-border">
                <span>Get started</span>
              </button>
             <button
                                    className="theme-btn btn-style sm-btn border d-none d-lg-block"
                                    onClick={() => setIsSignupOpen(true)}
                                >
                                    <span>Sign Up</span>
                                </button>
            </div>
        </div>

        {/* Feature List */}
        <div className="row g-4 wow fadeInUp" data-wow-delay=".5s">
          {amenities.map((item, index) => (
            <div key={item.id || index} className="col-xl-3 col-lg-6 col-md-6">
              <div className="card rts__card is__home radius-6 h-100" style={{ minHeight: "170px" }}>
                <div className="card-body d-flex align-items-center justify-content-center h-100">
                  <h6 className="card-title h6 mb-0 text-center">{item.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonAmenities;

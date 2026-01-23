"use client";
import React from "react";

function ServiceSix() {
  const services = [
    "Panoramic Views – Enjoy sweeping rooftop views of Karwar’s skyline and coastline.",
    "Flexible Seating – Spaces designed to suit corporate events, social gatherings or private celebrations.",
    "Curated Menus – Delicious, customized dishes crafted to delight your guests.",
    "Private Spaces – Thoughtfully designed areas for private functions and special gatherings.",
    "Professional Support – Our team ensures every detail, including catering, is perfectly taken care of.",
    "Event Decor – Beautifully designed setups to enhance the theme and ambience of your event.",
    "Parking – Convenient and secure parking facilities for all guests.",
    "Guest Rooms – Comfortable accommodations available for guests attending your event.",
  ];

  return (
    <div className="rts__section section__padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="section__head text-center mb-60">
              <h2 className="section__title">What to Expect</h2>
            </div>
          </div>
        </div>
        {/* Updated to justify-content-center to handle the 8 items gracefully in a 3-col grid */}
        <div className="row g-4 justify-content-center">
          {services.map((item, index) => {
            // Simple extraction of Title and Description based on the separator
            const parts = item.split(" – ");
            const title = parts[0];
            const desc = parts.length > 1 ? parts.slice(1).join(" – ") : "";

            return (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <div className="card rts__card radius-6 text-center h-100 p-4" style={{ backgroundColor: "#fff", border: "1px solid #d3d3d3" }}>
                  <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    {/* Generic decorative icon to match the 'image' placeholder in the design */}
                    <div className="icon mb-4 p-3 rounded-circle" style={{ backgroundColor: "#F3F5F9", color: "#555" }}>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                    </div>
                    <h5 className="card-title h5 mb-3">{title}</h5>
                    <p className="card-text text-muted">{desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServiceSix;

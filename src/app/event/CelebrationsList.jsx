"use client";
import React from "react";

const CelebrationsList = () => {
  const events = [
    "Haldi & Pre-wedding Ceremonies",
    "Birthdays & Anniversaries",
    "Engagements & Receptions",
    "Baby Showers & Naming Ceremonies",
    "First Holy Communion",
    "Family Get-Togethers & Private Parties",
    "Conferences, Seminars & Business Meetings",
    "Product Launches & Corporate Events",
  ];

  return (
    <div className="rts__section section__padding">
      <div className="container">
        <div className="row justify-content-center mb-60">
          <div className="col-lg-12 text-center">
            <h2 className="section__title">Celebrations & Events We Host</h2>
          </div>
        </div>
        <div className="row g-4">
          {events.map((event, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <div className="card rts__card no-border radius-6 text-center h-100 p-4" style={{ backgroundColor: "#F9F9F9" }}>
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="icon mb-3" style={{ color: "#C89D6C" }}>
                    {/* Using a generic decorative dot or similar if specific icons aren't available */}
                  
                  </div>
                  <h6 className="card-title h6 mb-0">{event}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CelebrationsList;

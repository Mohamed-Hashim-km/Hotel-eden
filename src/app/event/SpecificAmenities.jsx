"use client";
import React from "react";
import Link from "next/link";

const SpecificAmenities = () => {
  // Placeholder data to replicate the 4 items in the image
  const amenities = [
    {
      id: 1,
      title: "Specific Amenities #1",
      desc: "Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt arcu.",
    },
    {
      id: 2,
      title: "Specific Amenities #2",
      desc: "Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt arcu.",
    },
    {
      id: 3,
      title: "Specific Amenities #3",
      desc: "Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt arcu.",
    },
    {
      id: 4,
      title: "Specific Amenities #4",
      desc: "Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt arcu.",
    },
  ];

  return (
    <div className="rts__section section__padding">
      <div className="container">
        <div className="row justify-content-center mb-60">
          <div className="col-lg-8 text-center">
            <h2 className="section__title mb-20">Description + Specific Amenities</h2>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {amenities.map((item) => (
            <div key={item.id} className="col-lg-6 col-md-10">
              <div className="amenity-card position-relative rounded-3" style={{ marginBottom: "60px" }}>
                {/* Image Area */}
                <div
                  className="amenity-img position-relative overflow-hidden rounded-3"
                  style={{
                    height: "400px",
                    backgroundColor: "#F3F5F9", // Light grey placeholder
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Placeholder Icon */}
                  <div className="placeholder-icon" style={{ opacity: 0.2 }}>
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#222"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </div>

                  {/* Use actual image if available in future
                                     <img src="..." alt="" className="w-100 h-100 object-fit-cover"/> 
                                     */}
                </div>

                {/* Content Box - Overlapping */}
                <div
                  className="amenity-content position-absolute bg-white p-4 shadow-sm rounded-3"
                  style={{
                    bottom: "-40px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "85%",
                    zIndex: 2,
                  }}
                >
                  <h4 className="title mb-3">{item.title}</h4>
                  <p className="font-sm text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecificAmenities;

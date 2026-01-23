"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const roomTypes = [
  {
    title: "Premium Room",
    description: "A well-appointed, comfortable space ideal for unwinding after a day in the city.",
    gradient: "linear-gradient(135deg, #1e2030 0%, #2d3447 100%)",
  },
  {
    title: "Club Room",
    description: "Spacious and refined, offering added comfort and thoughtful conveniences.",
    gradient: "linear-gradient(180deg, #1a233a 0%, #3a4b6d 100%)",
  },
  {
    title: "Suite Room",
    description: "An expansive and elegant stay experience with enhanced comfort and style.",
    gradient: "linear-gradient(180deg, #1a233a 0%, #5d6d8c 100%)",
  },
  {
    title: "Presidential Room",
    description: "Our most luxurious and spacious accommodation for a truly exceptional stay.",
    gradient: "linear-gradient(135deg, #2a2d45 0%, #4a5b7d 100%)",
  },
];

const RoomsShowcase = () => {
  return (
    <div className="rts__section section__padding">
      <div className="container">
        <div className="row justify-content-center text-center mb-60">
          <div className="col-lg-8">
            <h2 className="title h2 lh-1 mb-20">Spaces Crafted For Mindful Living</h2>
            <p className="description">
              Hotel Eden offers rooms from Premium to Presidential, each blending spacious design with thoughtful amenities for a truly relaxing stay.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {roomTypes.map((room, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="room-showcase-card position-relative overflow-hidden radius-10 h-100"
                style={{
                  background: room.gradient,
                  minHeight: "400px",
                  padding: "30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                }}
              >
                {/* Hover Styles using a <style> block for scoped simplicity in this component */}
                <style jsx>{`
                  .room-showcase-card:hover {
                    transform: scale(1.05);
                    z-index: 10;
                  }
                  .room-showcase-card .description {
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                    transition: all 0.5s ease;
                    transform: translateY(20px);
                  }
                  .room-showcase-card:hover .description {
                    max-height: 200px; /* Arbitrary large enough height */
                    opacity: 1;
                    transform: translateY(0);
                    margin-top: 1rem;
                  }
                `}</style>

                <div className="content text-center z-2">
                  <h3 className="text-white mb-0">{room.title}</h3>
                  <p className="description text-white-50 fs-6 mb-0">{room.description}</p>
                </div>

                {/* Decorative Icon Background */}
                <div
                  className="placeholder-icon position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    opacity: 0.1,
                    pointerEvents: "none",
                  }}
                >
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsShowcase;

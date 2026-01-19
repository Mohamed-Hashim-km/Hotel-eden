"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const RoomsShowcase = () => {
  return (
    <div className="rts__section section__padding">
      <div className="container">
        <div className="row justify-content-center text-center mb-60">
          <div className="col-lg-8">
            {/* <span className="h6 subtitle__icon__two mx-auto d-block">Rooms showcase</span> */}
            <h2 className="title h2 lh-1 mb-20">Spaces Crafted For Mindful Living</h2>
            <p className="description">Hotel Eden offers rooms from Premium to Presidential, each blending spacious design with thoughtful amenities for a truly relaxing stay.</p>
          </div>
        </div>

        <div className="row g-4">
          {/* Big Card - Room Type #1 */}
          <div className="col-lg-6 col-md-12">
            <div
              className="room-showcase-card large-card position-relative overflow-hidden radius-10 h-100"
              style={{
                background: "linear-gradient(135deg, #1e2030 0%, #2d3447 100%)",
                minHeight: "400px",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="content-top">
                <span className="text-uppercase text-white-50 fs-small ls-1 mb-2 d-block">Category</span>
                <h3 className="text-white mb-0">Room Type #1</h3>
                {/* Placeholder image icon/box */}
                <div className="placeholder-icon position-absolute" style={{ right: "10%", bottom: "40%", opacity: 0.2 }}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
              </div>

              <div className="content-bottom d-flex gap-3 mt-auto">
                <Link href="#" className="btn btn-outline-light rounded-2 px-4 py-2">
                  Learn more
                </Link>
                <Link href="#" className="btn btn-light text-dark rounded-2 px-4 py-2 d-flex align-items-center gap-2">
                  Book Now <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>

          {/* Medium Card - Room Type #2 */}
          <div className="col-lg-3 col-md-6">
            <div
              className="room-showcase-card medium-card position-relative overflow-hidden radius-10 h-100"
              style={{
                background: "linear-gradient(180deg, #1a233a 0%, #3a4b6d 100%)",
                minHeight: "400px",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="content-top">
                <span className="text-uppercase text-white-50 fs-small ls-1 mb-2 d-block">Category</span>
                <h3 className="text-white mb-0">Room Type #2</h3>
                <div
                  className="placeholder-icon position-absolute"
                  style={{ right: "50%", bottom: "30%", transform: "translateX(50%)", opacity: 0.2 }}
                >
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
              </div>
              <div className="content-bottom mt-auto">
                <Link href="#" className="btn btn-outline-light rounded-2 px-4 py-2 w-100">
                  Learn more
                </Link>
              </div>
            </div>
          </div>

          {/* Medium Card - Room Type #3 */}
          <div className="col-lg-3 col-md-6">
            <div
              className="room-showcase-card medium-card position-relative overflow-hidden radius-10 h-100"
              style={{
                background: "linear-gradient(180deg, #1a233a 0%, #5d6d8c 100%)",
                minHeight: "400px",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="content-top">
                <span className="text-uppercase text-white-50 fs-small ls-1 mb-2 d-block">Category</span>
                <h3 className="text-white mb-0">Room Type #3</h3>
                <div
                  className="placeholder-icon position-absolute"
                  style={{ right: "50%", bottom: "30%", transform: "translateX(50%)", opacity: 0.2 }}
                >
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
              </div>
              <div className="content-bottom mt-auto">
                <Link href="#" className="btn btn-outline-light rounded-2 px-4 py-2 w-100">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsShowcase;

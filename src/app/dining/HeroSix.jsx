"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const HeroSix = () => {
  return (
    <div className="rts__section section__padding">
      <div className="container">
        <div className="row align-items-center justify-content-center position-relative">
          {/* Background Image Area */}
          <div className="col-lg-11">
            <div
              className="position-relative overflow-hidden radius-10"
              style={{
                minHeight: "600px",
                backgroundColor: "#f3f4f6", // Pale gray placeholder
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90%", // Only take up partial width to allow overlap effect visualization
              }}
            >
              {/* Placeholder Icon */}
              <div className="opacity-25 text-center">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#5d6d8c" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
            </div>
          </div>

          {/* Overlapping Content Card */}
          <div className="col-lg-6 position-absolute" style={{ right: "5%", top: "50%", transform: "translateY(-50%)" }}>
            <div className="hero-content-card bg-white p-5 radius-10 shadow-lg wow fadeInUp" data-wow-delay=".3s">
              <h1 className="content__title mb-20">Dining</h1>
              <p className="content__subtitle mb-30">
                At Eden, dining is an experience shaped by flavour, atmosphere, and thoughtful hospitality. Across our three distinctive restaurants, Hotel Tulip, Oyster Bay and Food & Forest, we offer a range of settings and cuisines to suit every mood and moment.

              </p>
              <Link href="#" className="theme-btn btn-style fill no-border d-inline-flex align-items-center gap-2">
                <span>Book Now</span> 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSix;

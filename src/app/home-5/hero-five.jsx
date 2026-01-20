"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const HeroFive = () => {
  return (
    <div className="rts__section section__padding pt-0">
      <div className="container">
        {/* Dark Banner Card */}
        <div
          className="hero-banner-card position-relative radius-20 overflow-visible text-center pt-10 pb-250"
          style={{
            background: "#6d758f", // Matching the slate/gray color from image roughly
            color: "#fff",
            borderRadius: "20px",
            minHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="title text-white display-4 fw-bold mb-20">10‑Bed Dormitory</h1>
              <p className="description text-white opacity-75 mb-30 mx-auto" style={{ maxWidth: "600px" }}>
Spacious and thoughtfully designed, this dormitory offers a comfortable shared stay for groups, complete with modern amenities and privacy-focused facilities.

              </p>
              <Link href="#" className="btn btn-light rounded-2 px-4 py-2 d-inline-flex align-items-center gap-2 text-dark font-weight-bold">
                <span>Book Your Stay Now
</span> <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Overlapping Image Card */}
        <div className="row justify-content-center" style={{ marginTop: "-100px", position: "relative", zIndex: 2 }}>
          <div className="col-lg-10">
            <div className="bg-white p-3 radius-10 shadow-lg">
              <div
                className="position-relative overflow-hidden radius-10 w-100"
                style={{
                  minHeight: "450px",
                  backgroundColor: "#f3f4f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Placeholder for big image */}
                <div className="opacity-25 text-center">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#5d6d8c" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Column Features Below */}
        <div className="row g-5 mt-30 justify-content-center">
          {/* Feature 1 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="text-center">
              <div className="icon mb-20 d-inline-flex align-items-center justify-content-center text-muted">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <h4 className="title h5 mb-15">Spacious Living</h4>
              <p className="description font-sm text-center mx-auto" style={{ maxWidth: "300px" }}>
                Ut sit integer fringilla amet quam odio turpis interdum nisi massa est facilisi ultrices mauris eget mi.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
            <div className="text-center">
              <div className="icon mb-20 d-inline-flex align-items-center justify-content-center text-muted">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <h4 className="title h5 mb-15">Modern Amenities</h4>
              <p className="description font-sm text-center mx-auto" style={{ maxWidth: "300px" }}>
                Et imperdiet vitae diam ac eget non velit turpis viverra justo col integer feugiat viverra tellus.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="text-center">
              <div className="icon mb-20 d-inline-flex align-items-center justify-content-center text-muted">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <h4 className="title h5 mb-15">Custom Services</h4>
              <p className="description font-sm text-center mx-auto" style={{ maxWidth: "300px" }}>
                Vel quis viverra maecenas tortor sapien et vitae neque porta enim risus augue ut id aliquam susci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFive;

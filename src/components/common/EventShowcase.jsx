"use client";
import React from "react";
import Link from "next/link";

const EventShowcase = ({ title, description, buttonText, buttonLink, imageSrc }) => {
  return (
    <div className="rts__section section__padding">
      <div className="container-fluid ps-0 pe-3 pe-md-5">
        <div className="row align-items-center g-5">
          {/* Left Side: Image */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div
              className="event-showcase-image position-relative overflow-hidden radius-10"
              style={{ minHeight: "600px", backgroundColor: "#f8f9fa", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              {imageSrc ? (
                <img src={imageSrc} alt={title} className="img-fluid w-100 h-100 object-fit-cover" />
              ) : (
                <div className="placeholder-icon opacity-25">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="event-showcase-content pl--50 pl_md--0 pl_sm--0">
              <h2 className="title h2 lh-1 mb-20">{title || "Event Space Showcase"}</h2>
              <p className="description mb-30">
                {description ||
                  "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices."}
              </p>
              <Link href={buttonLink || "#"} className="theme-btn btn-style fill no-border">
                <span>{buttonText || "Learn More"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventShowcase;

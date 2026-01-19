"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const CommonAmenities = () => {
  const amenities = [
    {
      id: 1,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M10 14.66V17c0 .55.47.98 1.06 1.05C12.55 18.18 13.92 18 15 17c1.66 0 3-1.34 3-3 0-1.2-.76-2.24-1.87-2.73"></path>
          <path d="M9 10c0-1.1.9-2 2-2s2 .9 2 2"></path>
          <path d="M15 9c0-1.1.9-2 2-2s2 .9 2 2"></path>
        </svg>
      ),
      title: "24/7 Front Desk & Guest Assistance",
      description: "Indulge in our luxurious spa treatments designed to rejuvenate your mind, body and soul.",
    },
    {
      id: 2,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6L6 18M6 6l12 12"></path>
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        </svg>
      ), // Placeholder icon
      title: "Multi-cuisine Restaurants & Rooftop Dining",
      description: "Experience world-class culinary delights prepared by our expert chefs using fresh ingredients.",
    },
    {
      id: 3,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
      title: "The Golden Leaf Spa & Wellness",
      description: "Stay active in our state-of-the-art fitness center equipped with modern gym amenities.",
    },
  ];

  return (
    <div className="rts__section section__padding">
      <div className="container">
        {/* Header Section */}
        <div className="row justify-content-center text-center mb-50">
          <div className="col-lg-8">
            <h2 className="title h2 lh-1 mb-20">Common Amenities</h2>
            <p className="description mb-30">
              Everything You Need for a Comfortable Stay

            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link href="#" className="theme-btn btn-style fill no-border">
                <span>Get started</span>
              </Link>
              <Link href="#" className="theme-btn btn-style fill no-border">
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Feature Image */}
        <div className="row mb-50">
          <div className="col-12 wow fadeInUp" data-wow-delay=".3s">
            <div
              className="position-relative overflow-hidden radius-10 w-100"
              style={{ minHeight: "500px", backgroundColor: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              {/* Placeholder for big image */}
              <div className="opacity-25">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#5d6d8c" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Column Features */}
        <div className="row g-5">
          {amenities.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`.${item.id + 2}s`}>
              <div className="text-center p-3">
                <div className="icon mb-20 d-inline-flex align-items-center justify-content-center" style={{ color: "#5d6d8c" }}>
                  {item.icon}
                </div>
                <h4 className="title h5 mb-15">{item.title}</h4>
                {/* <p className="description">{item.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonAmenities;

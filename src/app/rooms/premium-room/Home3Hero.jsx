"use client";

import React, { useState } from "react";
import Link from "next/link";
import LoginForm from "../../form/LoginForm";
import SignUpForm from "../../form/SignUpForm";

const Home3Hero = ({title,desc,features}) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <>
      <div className="rts__section section__padding pt-200">
        <div className="container">
          {/* Dark Banner Card */}
          <div
            className="hero-banner-card position-relative radius-20 overflow-visible text-center pt-10 pb-250"
            style={{
              background: "#6d758f", // Matching the slate/gray color from image roughly
              color: "#fff",
              borderRadius: "20px",
              minHeight: "600px",
              display: "flex",
              flexDirection: "column",
              paddingTop: "70px",
            }}
          >
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h1 className="title text-white display-4 fw-bold mb-20">{title}</h1>
                <p className="description text-white opacity-75 mb-30 mx-auto" style={{ maxWidth: "600px" }}>
                 {desc}</p>
                <button
                  className="theme-btn mx-auto btn-style sm-btn border d-none d-lg-block bg-white text-dark"
                  onClick={() => setIsSignupOpen(true)}
                >
                  <span>Sign Up</span>
                </button>
              </div>
            </div>
          </div>

          {/* Overlapping Image Card */}
          <div className="row justify-content-center" style={{ marginTop: "-200px", position: "relative", zIndex: 2 }}>
            <div className="col-lg-10">
              <div className="bg-white  radius-10 ">
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
  {features.map((feature) => (
    <div
      key={feature.id}
      className="col-lg-4 col-md-6 wow fadeInUp"
      data-wow-delay={feature.delay}
    >
      <div className="text-center">
        <div className="icon mb-20 d-inline-flex align-items-center justify-content-center text-muted">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
        <h4 className="title h5 mb-15">{feature.title}</h4>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>

      {/* Login Form Modal */}
      <LoginForm
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSignupOpen={() => {
          setIsLoginOpen(false);
          setIsSignupOpen(true);
        }}
      />
      {/* Sign Up Form Modal */}
      <SignUpForm
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        onLoginOpen={() => {
          setIsSignupOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </>
  );
};

export default Home3Hero;

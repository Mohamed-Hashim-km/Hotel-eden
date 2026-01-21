"use client";

import React, { useState } from "react";
import Link from "next/link";
import LoginForm from "../form/LoginForm";
import SignUpForm from "../form/SignUpForm";

const Home3Hero = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <>
      <div className="relative py-[70px] lg:py-[60px] md:py-[50px] pt-0">
        <div className="container mx-auto px-4">
          {/* Dark Banner Card */}
          <div
            className="hero-banner-card relative rounded-[20px] overflow-visible text-center pt-2.5 pb-[250px]"
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
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-8/12">
                <h1 className="text-h1 text-white font-bold mb-5 loading-[90px]">Premium Room</h1>
                <p className="text-p text-white opacity-75 mb-[30px] mx-auto" style={{ maxWidth: "600px" }}>
                  Designed for guests who value comfort and convenience, the Premium Room at Hotel Eden offers a relaxing space to unwind after a day
                  in the city. Whether you’re here for business or leisure, this room gives you everything you need for a smooth and pleasant stay.
                </p>
                <button
                  className="bg-white text-rts-heading py-[14px] px-[30px] rounded-[5px] font-medium tracking-wide uppercase transition-all duration-300 hover:bg-btn-1 hover:text-white hidden lg:block mx-auto"
                  onClick={() => setIsSignupOpen(true)}
                >
                  <span>Sign Up</span>
                </button>
              </div>
            </div>
          </div>

          {/* Overlapping Image Card */}
          <div className="flex flex-wrap justify-center relative z-[2]" style={{ marginTop: "-100px" }}>
            <div className="w-full lg:w-10/12">
              <div className="bg-white p-3 rounded-[10px] shadow-lg">
                <div
                  className="relative overflow-hidden rounded-[10px] w-full"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[30px] justify-center">
            {/* Feature 1 */}
            <div className="wow fadeInUp" data-wow-delay=".3s">
              <div className="text-center">
                <div className="mb-5 inline-flex items-center justify-center text-gray-400">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <h4 className="text-h5 mb-[15px]">Spacious Living</h4>
                <p className="description font-sm text-center mx-auto" style={{ maxWidth: "300px" }}>
                  Ut sit integer fringilla amet quam odio turpis interdum nisi massa est facilisi ultrices mauris eget mi.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="wow fadeInUp" data-wow-delay=".4s">
              <div className="text-center">
                <div className="mb-5 inline-flex items-center justify-center text-gray-400">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <h4 className="text-h5 mb-[15px]">Modern Amenities</h4>
                <p className="description font-sm text-center mx-auto" style={{ maxWidth: "300px" }}>
                  Et imperdiet vitae diam ac eget non velit turpis viverra justo col integer feugiat viverra tellus.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="wow fadeInUp" data-wow-delay=".5s">
              <div className="text-center">
                <div className="mb-5 inline-flex items-center justify-center text-gray-400">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <h4 className="text-h5 mb-[15px]">Custom Services</h4>
                <p className="description font-sm text-center mx-auto" style={{ maxWidth: "300px" }}>
                  Vel quis viverra maecenas tortor sapien et vitae neque porta enim risus augue ut id aliquam susci.
                </p>
              </div>
            </div>
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

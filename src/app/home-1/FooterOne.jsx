"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

function FooterOne() {
  return (
    <footer className="footer-area" style={{ backgroundColor: "#00071b", color: "#ffffff", paddingTop: "80px" }}>
      <div className="container">
        {/* Top Section: Logo and Main Content */}
        <div className="row mb-5">
          <div className="col-12 mb-5">
            <Link href="/">
              <img src="/assets/images/logo/logo.svg" alt="Hotel Eden" style={{ maxHeight: "60px", filter: "brightness(0) invert(1)" }} />
            </Link>
          </div>

          <div className="row">
            {/* Left Column: Contact Info */}
            <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
              <div className="mb-5">
                <h5 className="text-white mb-3" style={{ fontFamily: "Gilda Display, serif", fontSize: "24px" }}>
                  For Bookings Contact
                </h5>
                <div className="d-flex flex-wrap gap-4 text-white-50">
                  <span>1-800-111-825</span>
                  <span>reservations@edenhotel.com</span>
                </div>
              </div>
              <div>
                <h5 className="text-white mb-3" style={{ fontFamily: "Gilda Display, serif", fontSize: "24px" }}>
                  Customer Support
                </h5>
                <div className="d-flex flex-wrap gap-4 text-white-50">
                  <span>contact@edenhotel.com</span>
                  <span>website.feedback@edenhotel.com</span>
                </div>
              </div>
            </div>

            {/* Middle Column: Links */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <Link href="#" className="text-white-50 text-decoration-none hover-white">
                    Dining
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white-50 text-decoration-none hover-white">
                    Spa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white-50 text-decoration-none hover-white">
                    Event Spaces
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white-50 text-decoration-none hover-white">
                    Karwar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white-50 text-decoration-none hover-white">
                    Gokarna
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white-50 text-decoration-none hover-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white-50 text-decoration-none hover-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Column: Contact Details & Socials */}
            <div className="col-lg-4 col-md-6">
              <ul className="list-unstyled d-flex flex-column gap-3 mb-4 text-white-50">
                <li className="d-flex align-items-center gap-3">
                  <FiPhone size={20} />
                  <span>+91 9376537253</span>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <FiMail size={20} />
                  <span>eden@gmail.com</span>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <FiMapPin size={20} />
                  <span>123 Street, California</span>
                </li>
              </ul>
              <div className="d-flex gap-3">
                <Link
                  href="#"
                  className="text-white border border-secondary rounded p-2 d-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <FaInstagram size={18} />
                </Link>
                <Link
                  href="#"
                  className="text-white border border-secondary rounded p-2 d-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <FaFacebookF size={18} />
                </Link>
                <Link
                  href="#"
                  className="text-white border border-secondary rounded p-2 d-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <FaLinkedinIn size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Destinations Section */}
        <div className="border-top border-secondary py-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="text-white m-0" style={{ fontFamily: "Gilda Display, serif", fontSize: "24px" }}>
              Destinations
            </h5>
            <span className="text-white" style={{ fontSize: "24px" }}>
              -
            </span>
          </div>
          <div className="d-flex gap-5 text-white-50">
            <span>Karwar</span>
            <span>Gokarna</span>
          </div>
        </div>

        {/* Our Brands Section */}
        <div className="border-top border-secondary py-5">
          <div className="d-flex align-items-center flex-wrap gap-5 justify-content-between">
            <h5 className="text-white m-0 me-5" style={{ fontFamily: "Gilda Display, serif", fontSize: "24px", minWidth: "150px" }}>
              Our Brands
            </h5>

            {/* Dummy Logos */}
            <div className="d-flex flex-wrap flex-grow-1 justify-content-between align-items-center gap-4 opacity-75">
              <div className="d-flex align-items-center gap-2">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <div className="lh-1">
                  <span className="d-block fw-bold text-uppercase h5 mb-0 text-white">Terminal 5</span>
                  <span className="small text-white-50" style={{ fontSize: "10px" }}>
                    A VERSATILE HALL BY EDEN
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <svg width="30" height="40" viewBox="0 0 24 32" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 22V32" />
                </svg>
                <div className="lh-1">
                  <span className="d-block fw-bold text-uppercase h4 mb-0 text-white" style={{ fontFamily: "serif" }}>
                    TULIP
                  </span>
                  <span className="small text-white-50" style={{ fontSize: "8px" }}>
                    AN EDEN GOURMET EXPERIENCE
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <div className="lh-1 text-end">
                  <span className="d-block fw-bold text-uppercase h5 mb-0 text-white">Oyster</span>
                  <span className="d-block fw-bold text-uppercase h5 mb-0 text-white">
                    Bay{" "}
                    <span className="small fw-normal text-white-50" style={{ fontSize: "10px" }}>
                      BY EDEN
                    </span>
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <div className="lh-1">
                  <span className="d-block fw-bold text-uppercase h5 mb-0 text-white" style={{ fontFamily: "serif" }}>
                    Food &
                  </span>
                  <span className="d-block fw-bold text-uppercase h5 mb-0 text-white" style={{ fontFamily: "serif" }}>
                    Forest
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <div className="lh-1 text-center">
                  <span className="d-block text-capitalize h5 mb-0 text-white" style={{ fontFamily: "serif" }}>
                    The
                  </span>
                  <span className="d-block text-capitalize h5 mb-0 text-white" style={{ fontFamily: "serif" }}>
                    Golden
                  </span>
                  <span className="d-block text-capitalize h5 mb-0 text-white" style={{ fontFamily: "serif" }}>
                    Leaf{" "}
                    <span className="small text-white-50" style={{ fontSize: "8px" }}>
                      BY EDEN
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-top border-secondary py-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="text-white-50 mb-0 small">Copyright © 2026-27 Milan Hospitality and Management Services. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3 text-white-50 small">
                <Link href="#" className="text-white-50 text-decoration-none">
                  Terms of Service
                </Link>
                <span>|</span>
                <Link href="#" className="text-white-50 text-decoration-none">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-white:hover {
          color: white !important;
        }
      `}</style>
    </footer>
  );
}

export default FooterOne;

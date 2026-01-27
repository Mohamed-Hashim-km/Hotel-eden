"use client";
import React, { useState, useEffect } from "react";
import OffcanvasMenu from "./OffcanvasMenu";
import Link from "next/link";
import LoginForm from "../form/LoginForm";
import SignUpForm from "../form/SignUpForm";
import { FaEnvelope, FaMapMarkerAlt, FaAngleDown, FaSearch } from "react-icons/fa";

function HeaderOne() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    setHydrated(true);

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`main__header header__function ${hydrated && isSticky ? "is__sticky" : ""}`}>
        <div className="container-fluid px-lg-5">
          <div className="row">
            <div className="main__header__wrapper d-flex flex-column w-100 p-0">
              {/* Top Row: Utils | Logo | Actions */}
              <div className="header-top w-100 d-flex justify-content-between align-items-center py-4 position-relative">
                {/* Left: Extra Info */}
                <div className="header-top-left d-none d-lg-flex align-items-center gap-4 text-white">
                  <span className="text-uppercase fw-bold pointer d-flex align-items-center gap-2" style={{ fontSize: "11px", letterSpacing: "1px" }}>
                    EN <FaAngleDown size={10} />
                  </span>
                  <span className="pointer">
                    <FaEnvelope size={12} />
                  </span>

                  {/* Explore Destination with Dropdown */}
                  <div
                    className="position-relative"
                    onMouseEnter={() => setShowLocationDropdown(true)}
                    onMouseLeave={() => setShowLocationDropdown(false)}
                  >
                    <span className="d-flex align-items-center gap-2 pointer py-2">
                      <FaMapMarkerAlt size={12} />
                      <span className="text-uppercase small ls-1" style={{ fontSize: "11px", letterSpacing: "1px" }}>
                        Explore the Destination
                      </span>
                    </span>

                    {/* Dropdown Menu */}
                    {showLocationDropdown && (
                      <div
                        className="position-absolute start-0 bg-white shadow-lg text-dark p-3 rounded-1"
                        style={{
                          top: "100%",
                          minWidth: "220px",
                          zIndex: 1000,
                          marginTop: "-5px",
                        }}
                      >
                        <ul className="list-unstyled m-0 d-flex flex-column gap-2">
                          <li>
                            <Link
                              href="/gokarna"
                              className="text-dark text-uppercase fw-bold d-block hover-primary"
                              style={{ fontSize: "11px", letterSpacing: "1px" }}
                            >
                              Eden Ember Castle Gokarna
                            </Link>
                          </li>
                          <li className="border-bottom opacity-25"></li>
                          <li>
                            <Link
                              href="/karwar"
                              className="text-dark text-uppercase fw-bold d-block hover-primary"
                              style={{ fontSize: "11px", letterSpacing: "1px" }}
                            >
                              Hotel Eden Karwar
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Center: Logo */}
                <div className="main__logo text-center position-absolute start-50 translate-middle-x">
                  <Link href="/">
                    <img style={{ height: "50px", transition: "all 0.4s" }} className="logo__class" src="/assets/images/logo/eden.svg" alt="eden" />
                  </Link>
                </div>

                {/* Right: Book Now */}
                <div className="main__right d-flex align-items-center gap-4">
                  <span className="d-none d-lg-block text-white pointer">
                    <FaSearch size={14} />
                  </span>
                  <Link
                    href="/room/the-ritz-carlton"
                    className="theme-btn btn-style sm-btn fill text-uppercase bg-white text-dark border-0 hover-white"
                    style={{ padding: "8px 25px", fontSize: "11px", letterSpacing: "1px", fontWeight: "bold" }}
                  >
                    <span>Book Now</span>
                  </Link>
                  {/* Mobile Menu Button */}
                  <button className="theme-btn btn-style sm-btn fill menu__btn d-lg-none" onClick={() => setIsOffcanvasOpen(true)}>
                    <span>
                      <img src="/assets/images/icon/menu-icon.svg" alt="menu" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Separator Line */}
              <div className="w-100 border-bottom border-white opacity-25 d-none d-lg-block mb-1"></div>

              {/* Bottom Row: Navigation */}
              <div className="header-bottom w-100 d-flex justify-content-center py-2 d-none d-lg-flex">
                <nav className="navigation__menu" id="main__menu">
                  <ul className="list-unstyled d-flex gap-5 m-0 align-items-center">
                    <li className="navigation__menu--item">
                      <Link href="/" className="navigation__menu--item__link text-uppercase" style={{ letterSpacing: "2px", fontSize: "11px" }}>
                        Stays
                      </Link>
                    </li>
                    <li className="navigation__menu--item">
                      <Link href="/dining" className="navigation__menu--item__link text-uppercase" style={{ letterSpacing: "2px", fontSize: "11px" }}>
                        Dining
                      </Link>
                    </li>
                    <li className="navigation__menu--item">
                      <Link
                        href="/entertainment"
                        className="navigation__menu--item__link text-uppercase"
                        style={{ letterSpacing: "2px", fontSize: "11px" }}
                      >
                        Entertainment
                      </Link>
                    </li>
                    <li className="navigation__menu--item">
                      <Link
                        href="/aquaventure"
                        className="navigation__menu--item__link text-uppercase"
                        style={{ letterSpacing: "2px", fontSize: "11px" }}
                      >
                        Aquaventure World
                      </Link>
                    </li>
                    <li className="navigation__menu--item">
                      <Link
                        href="/experiences"
                        className="navigation__menu--item__link text-uppercase"
                        style={{ letterSpacing: "2px", fontSize: "11px" }}
                      >
                        Experiences
                      </Link>
                    </li>
                    <li className="navigation__menu--item">
                      <Link href="/events" className="navigation__menu--item__link text-uppercase" style={{ letterSpacing: "2px", fontSize: "11px" }}>
                        Events
                      </Link>
                    </li>
                    <li className="navigation__menu--item">
                      <Link href="/offers" className="navigation__menu--item__link text-uppercase" style={{ letterSpacing: "2px", fontSize: "11px" }}>
                        Offers
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <OffcanvasMenu isOpen={isOffcanvasOpen} onClose={() => setIsOffcanvasOpen(false)} />
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
}

export default HeaderOne;

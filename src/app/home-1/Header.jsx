"use client";
import React, { useState, useEffect } from "react";
import OffcanvasMenu from "./OffcanvasMenu";
import Link from "next/link";
import LoginForm from "../form/LoginForm";
import SignUpForm from "../form/SignUpForm";

function HeaderOne() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

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
      {/* header menu */}
      <header className={`main__header header__function ${hydrated && isSticky ? "is__sticky" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="main__header__wrapper">
              <div className="main__nav">
                <div className="navigation d-none d-lg-block">
                  <nav className="navigation__menu" id="main__menu">
                    <ul className="list-unstyled">
                      {/* Home Link (Direct Link) */}
                      <li className="navigation__menu--item">
                        <Link href="/" className="navigation__menu--item__link">
                          Home
                        </Link>
                      </li>
                      <li className="navigation__menu--item has-child has-arrow">
                        <Link href="/" className="navigation__menu--item__link">
                          Locations
                        </Link>
                        <ul className="submenu sub__style" role="menu">
                          <li role="menuitem">
                            <Link href="/gokarna">Gokarna</Link>
                          </li>
                          <li role="menuitem">
                            <Link href="/karwar">Karwar</Link>
                          </li>
                        </ul>
                      </li>
                      {/* Rooms Menu */}
                      <li className="navigation__menu--item has-child has-arrow">
                        <Link href="/" className="navigation__menu--item__link">
                          Rooms
                        </Link>
                        <ul className="submenu sub__style" role="menu">
                          <li role="menuitem" className="has-child has-arrow">
                            <Link href="/">Room Style</Link>
                            <ul className="sub__style" role="menu">
                              <li role="menuitem">
                                <Link href="/rooms/premium-room">Premium Room</Link>
                              </li>
                              <li role="menuitem">
                                <Link href="/rooms/club-room">club-room</Link>
                              </li>
                              <li role="menuitem">
                                <Link href="/rooms/presidential-room">Presidential Room</Link>
                              </li>
                              <li role="menuitem">
                                <Link href="/rooms/suite-room">Suite Room</Link>
                              </li>
                            </ul>
                          </li>
                          <li role="menuitem" className="has-child has-arrow">
                            <Link href="/">Karwar Rooms</Link>
                            <ul className="sub__style" role="menu">
                              <li role="menuitem">
                                <Link href="/rooms/premium-room-twin-bedded">Premium Room (Twin Bedded)</Link>
                              </li>
                              <li role="menuitem">
                                <Link href="/rooms/premium-room-king-size-bedded">Premium Room (King-Size Bedded)</Link>
                              </li>
                              <li role="menuitem">
                                <Link href="/rooms/club-room">Club Rooms</Link>
                              </li>
                              <li role="menuitem">
                                <Link href="/rooms/suite-room-with-balcony">Suite Room (With Balcony)</Link>
                              </li>
                              <li role="menuitem">
                                <Link href="/rooms/suite-room-without-balcony">Suite Room (Without Balcony)</Link>
                              </li>
                              <li role="menuitem">
                                <Link href="/rooms/presidential-room">Presidential Room</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      {/* Pages Menu */}

                      {/* Blog Menu */}
                      <li className="navigation__menu--item has-child has-arrow">
                        <Link href="/" className="navigation__menu--item__link">
                          Blog
                        </Link>
                        <ul className="submenu sub__style" role="menu">
                          <li role="menuitem">
                            <Link href="/blog">Blog</Link>
                          </li>
                          <li role="menuitem">
                            <Link href="/blog/Live-Elegantly-in-Our-Contemporary-Suite-for-Apartment">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
<li className="navigation__menu--item">
                        <Link href="/event" className="navigation__menu--item__link">
                         Events
                        </Link>
                      </li>
                      {/* Contact Link */}
                      <li className="navigation__menu--item">
                        <Link href="/contact" className="navigation__menu--item__link">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Logo */}
              <div className="main__logo">
                <Link href="/">
                  <img className="logo__class" src="/assets/images/logo/eden.svg" alt="eden" />
                </Link>
              </div>

              {/* Right Side Buttons */}
              <div className="main__right">
                {/* Sign In Button */}
                {/* <button className="theme-btn btn-style sm-btn border d-none d-lg-block" onClick={() => setIsLoginOpen(true)}>
                  <span>Sign In</span>
                </button> */}

                {/* Sign Up Button */}
                {/* <button className="theme-btn btn-style sm-btn border d-none d-lg-block" onClick={() => setIsSignupOpen(true)}>
                  <span>Sign Up</span>
                </button> */}

                {/* Book Now Button */}
                <Link href="/room/the-ritz-carlton" className="theme-btn btn-style sm-btn fill">
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
      {/* header menu end */}
    </>
  );
}

export default HeaderOne;

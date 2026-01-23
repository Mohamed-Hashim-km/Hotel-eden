import Link from "next/link";
import React, { useState } from "react";
import SignUpForm from "../form/SignUpForm";
import LoginForm from "../form/LoginForm";

const ResellingCallout = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <>
      <div className="rts__section section__padding" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="row align-items-end mb-40">
            <div className="col-lg-6">
              <div className="section__content__left">
                <h2 className="section__title h2 lh-1 mb-0">Other Amenities</h2>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <button
                className="theme-btn  btn-style sm-btn border d-none d-lg-inline-block bg-white text-dark"
                onClick={() => setIsSignupOpen(true)}
              >
                <span>Learn more</span>
              </button>
            </div>
          </div>
          <div className="row g-30 mb-40">
            <div className="col-lg-4 col-md-6">
              <div className="reselling-feature">
                <h5 className="mb-20">Events</h5>
                <p className="desc mb-0">Perfect for organising events of every kind, from celebrations to conferences.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="reselling-feature">
                <h5 className="mb-20">Dining/restaurant</h5>
                <p className="desc mb-0">Three distinctive dining destinations, each offering a unique ambience and culinary experience.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="reselling-feature">
                <h5 className="mb-20">Rooms</h5>
                <p className="desc mb-0">Elegantly designed rooms that help you unwind and enjoy a truly relaxed stay.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <div
                className="callout-image-box w-100 d-flex align-items-center justify-content-center"
                style={{
                  height: "600px",
                  backgroundImage: "url('/assets/images/pages/contact.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <LoginForm
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSignupOpen={() => {
          setIsLoginOpen(false);
          setIsSignupOpen(true);
        }}
      />
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

export default ResellingCallout;

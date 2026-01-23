"use client";
import Link from "next/link";
import React from "react";

const DiningSpecifics = () => {
  return (
    <div className="rts__section section__padding">
      <div className="container">
        <div className="row justify-content-center mb-60">
          <div className="col-lg-8 text-center">
            <h2 className="section__title mb-20">Our Venues</h2>
            {/* <p className="desc">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p> */}
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {/* Card 1 */}
          <div className="col-lg-6 col-md-10">
            <div className="dining-specific-card position-relative overflow-hidden rounded-3" style={{ height: "500px" }}>
              {/* Background Image */}
              <div
                className="bg-image w-100 h-100"
                style={{
                  backgroundImage: "url('/assets/images/blog/blog-1.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.9)",
                }}
              ></div>

              {/* Gradient Overlay */}
              <div
                className="overlay position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 50%, rgba(30,32,38,0.95) 100%)",
                }}
              ></div>

              {/* Content */}
              <div className="content position-absolute bottom-0 start-0 w-100 p-4 p-md-5">
                <h3 className="text-white mb-2">The Indoor Hall</h3>
                <p className="text-white-50 mb-4">
                  Defined by elegant interiors and ambience, the indoor hall serves as a distinguished venue for celebrations, meetings, and private functions, hosting 80 to 100 guests in comfort

                </p>
                {/* <Link href="#" className="text-white text-decoration-none d-inline-flex align-items-center fw-medium hover-opacity">
                  Learn more
                  <i className="flaticon-right-arrow ms-2" style={{ fontSize: "0.8rem" }}></i>
                </Link> */}
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-6 col-md-10">
            <div className="dining-specific-card position-relative overflow-hidden rounded-3" style={{ height: "500px" }}>
              {/* Background Image */}
              <div
                className="bg-image w-100 h-100"
                style={{
                  backgroundImage: "url('/assets/images/blog/blog-2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.9)",
                }}
              ></div>

              {/* Gradient Overlay */}
              <div
                className="overlay position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 50%, rgba(30,32,38,0.95) 100%)",
                }}
              ></div>

              {/* Content */}
              <div className="content position-absolute bottom-0 start-0 w-100 p-4 p-md-5">
                <h3 className="text-white mb-2">The Rooftop Event Space</h3>
                <p className="text-white-50 mb-4">
                  For grander celebrations, the open-air rooftop venue offers a more expansive setting with breathtaking views of Karwar, making it ideal for larger events with a capacity of 100 to 140 guests.

                </p>
                {/* <Link href="#" className="text-white text-decoration-none d-inline-flex align-items-center fw-medium hover-opacity">
                  Learn more
                  <i className="flaticon-right-arrow ms-2" style={{ fontSize: "0.8rem" }}></i>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningSpecifics;

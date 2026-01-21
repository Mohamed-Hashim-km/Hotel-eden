"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function FacilitiesOne() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      {/* facilities */}
      <div className="rts__section facilities__area has__background has__shape section__padding">
        <div className="section__shape">
          <img src="/assets/images/shape/facility-1.svg" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center text-center mb-40">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="section__topbar">
                <span className="h6 subtitle__icon__three mx-auto">In the Heart of Karwar</span>
                <p className="">
                  Stay close to everything that matters. Hotel Eden’s central location makes it easy to explore Karwar’s beaches, business hubs and
                  local attractions while still enjoying a peaceful and comfortable stay.
                </p>
              </div>
            </div>
          </div>

          {/* Added justify-content-center to fix alignment */}
          <div className="row g-4 justify-content-center">
            {/* Changed col-xl-3 to col-xl-4 to fill the gap */}
            <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card rts__card no-border is__home radius-6">
                <div className="card-body">
                  <div className="icon">
                    <img src="/assets/images/icon/bed.svg" alt="" />
                  </div>
                  <Link href="/">
                    <h6 className="card-title h6 mb-15">Close to Beaches</h6>
                  </Link>
                  <p className="card-text">Minutes away from Karwar’s most scenic coastline and waterfront spots.</p>
                </div>
              </div>
            </div>

            {/* Changed col-xl-3 to col-xl-4 */}
            <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="card rts__card no-border is__home radius-6">
                <div className="card-body">
                  <div className="icon">
                    <img src="/assets/images/icon/security.svg" alt="" />
                  </div>
                  <Link href="/">
                    <h6 className="card-title h6 mb-15">City-Centric Location</h6>
                  </Link>
                  <p className="card-text">Easy access to shopping areas, business zones and transport hubs.</p>
                </div>
              </div>
            </div>

            {/* Changed col-xl-3 to col-xl-4 */}
            <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="card rts__card no-border is__home radius-6">
                <div className="card-body">
                  <div className="icon">
                    <img src="/assets/images/icon/gym.svg" alt="" />
                  </div>
                  <Link href="/">
                    <h6 className="card-title h6 mb-15">Well Connected</h6>
                  </Link>
                  <p className="card-text">Quick access to the railway station, bus stand and major routes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* facilities end */}
    </>
  );
}

export default FacilitiesOne;

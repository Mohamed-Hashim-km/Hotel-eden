"use client";
import React, { useEffect } from "react";
import Rellax from "rellax";
import Link from "next/link";

function AboutThree() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      new Rellax(".rellax", { speed: 1 });
    }
  }, []);

  return (
    <>
      {/* about us */}
      <div className="rts__section about__area is__home__two section__padding">
        <div className="section__shape">
          <img src="/assets/images/about/section__shape.svg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="about__wrapper">
              <div className="content">
                {/* <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                    About Us
                                </span> */}
                <h2 className="content__title wow fadeInUp">Built on Years of Trusted Hospitality</h2>
                <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">
                  Backed by years of hospitality experience, Hotel Eden brings together thoughtful design and warm service. Every detail is carefully
                  curated to ensure a comfortable and memorable stay.
                </p>
                <ul className="content__list wow fadeInUp" data-wow-delay=".3s">
                  <li>
                    <i className="fa-regular fa-check"></i>46 elegantly designed rooms across multiple categories
                  </li>
                  <li>
                    <i className="fa-regular fa-check"></i>Three distinctive dining experiences under one roof
                  </li>
                  <li>
                    <i className="fa-regular fa-check"></i>Spa, fitness studio, recreation zone & banquet facilities
                  </li>
                </ul>
                <Link href="#" className="theme-btn btn-style fill no-border wow fadeInUp mt-4" data-wow-delay=".5s">
                  <span>Discover Our Story</span>
                </Link>
              </div>
              <div className="image ">
                <div className="position-relative ">
                  <div className="jara-mask-1 jarallax image-height">
                    <img src="/assets/images/about/about-2.webp" className="jarallax-img rellax rellax-img" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about us end */}
    </>
  );
}

export default AboutThree;

'use client'
import React, { useEffect, useState } from 'react';
import Rellax from 'rellax';
import Link from 'next/link';
function AboutTwo() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            new Rellax(".rellax", { speed: 1 });
        }
    }, []);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

    return (
        <>
            {/* about us */}
            <div className="rts__section about__area is__home__one section__padding">
                <div className="section__shape">
                    <img src="/assets/images/about/section__shape.svg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="about__wrapper">
                            <div className="content">
                                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                   Spa
                                </span>
                                <h2 className="content__title wow fadeInUp">
                                    The Golden Leaf Spa
                                </h2>
                                <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">
                                    From relaxation therapies to beauty and grooming, The Golden Leaf Spa is designed for complete everyday luxury.

                                </p>
                              <button
                className="theme-btn  btn-style sm-btn border d-none d-lg-inline-block bg-white text-dark"
                onClick={() => setIsSignupOpen(true)}
              >
                <span>Learn more</span>
              </button>
                            </div>
                            <div className="image ">
                                <div
                                    className="position-relative  wow fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    <div className="jara-mask-1 jarallax image-height">
                                        <img
                                            src="/assets/images/about/about-1.webp"
                                            className="jarallax-img rellax rellax-img"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                {/* <div
                                    className="image__card radius-10 wow fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    <div className="icon radius-10 center-item">
                                        <i className="flaticon-people" />
                                    </div>
                                    <div className="content">
                                        <span className="h5">50+</span>
                                        <p>Experience Staff</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us end */}
        </>

    )
}

export default AboutTwo
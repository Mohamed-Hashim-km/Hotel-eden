'use client'
import React, { useEffect } from 'react'
import Rellax from 'rellax';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ActivitiesOne() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            new Rellax(".rellax", { speed: 1 });
        }
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    return (
        <>
            {/* our activities */}
            <div className="rts__section activites section__padding">
                
                <div className="container pt-120">
                    <div className="row g-30">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="activities__image__card">
                                <div className="activities__thumb">
                                    <img
                                        src="/assets/images/pages/activities/3.webp"
                                        width={420}
                                        height={585}
                                        alt="Cultural Tours" // Updated alt
                                    />
                                </div>
                                <div className="activities__meta">
                                    <Link href="#" className="h4 title d-block"> {/* Updated link */}
                                        Cultural Tours
                                    </Link>
                                    <Link href="#" className="theme-btn btn-style border">
                                        <span>View More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Similar updates for other cards */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="activities__image__card">
                                <div className="activities__thumb">
                                    <img
                                        src="/assets/images/pages/activities/4.webp"
                                        width={420}
                                        height={585}
                                        alt="Cultural Tours" // Updated alt
                                    />
                                </div>
                                <div className="activities__meta">
                                    <Link href="#" className="h4 title d-block"> {/* Updated link */}
                                        Cultural Tours
                                    </Link>
                                    <Link href="#" className="theme-btn btn-style border">
                                        <span>View More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Similar updates for other cards */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="activities__image__card">
                                <div className="activities__thumb">
                                    <img
                                        src="/assets/images/pages/activities/5.webp"
                                        width={420}
                                        height={585}
                                        alt="Cultural Tours" // Updated alt
                                    />
                                </div>
                                <div className="activities__meta">
                                    <Link href="#" className="h4 title d-block"> {/* Updated link */}
                                        Cultural Tours
                                    </Link>
                                    <Link href="#" className="theme-btn btn-style border">
                                        <span>View More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Similar updates for other cards */}
                    </div>
                </div>
            </div>
            {/* our activities end */}
        </>
    )
}

export default ActivitiesOne;

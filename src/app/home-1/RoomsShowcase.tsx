"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// Data swapped: Importing JSON here
import posts from "../data/spaces.json";

const RoomsShowcase = () => {
  const swiperRef = useRef(null);

  return (
    <div className="rts__section section__padding">
      <div className="container">
        <div className="row justify-content-center text-center mb-60">
          <div className="col-lg-8">
            <h2 className="title h2 lh-1 mb-20">Spaces That Inspire Every Stay</h2>
            <p className="description">
              From wellness and fitness to recreation and seamless service, Hotel Eden offers thoughtfully curated amenities designed to elevate every moment of your stay.   </p>
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div className="position-relative px-4">
          <Swiper
            modules={[Navigation, Autoplay]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="room-swiper"
            style={{ paddingBottom: "20px" }}
          >
            {/* Swapped Data: Mapping posts instead of roomTypes */}
            {posts
              .filter((data) => data.id >= 1 && data.id <= 5) // Preserved the logic from original RoomOne to ensure data quality
              .map((room, index) => (
                <SwiperSlide key={room.id || index}>
                  <div  className="d-block h-100">
                    <div
                      className="room-showcase-card position-relative overflow-hidden radius-10 h-100"
                      style={{
                        background: `url(${room.image}) no-repeat center center / cover`,
                        minHeight: "450px",
                        padding: "30px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        transition: "all 0.4s ease",
                       
                      }}
                    >
                      {/* Overlay for readability */}
                      <div className="overlay-gradient"></div>

                      <div className="content text-center z-2 position-relative w-100">
                        <h3 className="text-white mb-0 room-title">{room.title}</h3>
                        <div className="description-wrapper">
                          <p className="description text-white-50 fs-6 mb-0 mt-3">{room.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="swiper-nav-btn prev-btn"
            aria-label="Previous Slide"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="swiper-nav-btn next-btn"
            aria-label="Next Slide"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <style jsx>{`
        /* --- Card Interactions --- */
        .room-showcase-card {
           border-radius: 10px;
        }

        .overlay-gradient {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 60%;
            background: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
            transition: height 0.4s ease;
            pointer-events: none;
        }

        .room-showcase-card:hover .overlay-gradient {
            height: 100%; 
            background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4));
        }

        .description-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.5s ease;
          opacity: 0;
        }

        .description {
          overflow: hidden;
        }

        /* Hover: Reveal Text */
        .room-showcase-card:hover .description-wrapper {
          grid-template-rows: 1fr;
          opacity: 1;
        }

        .room-showcase-card:hover {
           transform: translateY(-5px);
           box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        /* --- Navigation Buttons --- */
        .swiper-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 45px;
          height: 45px;
          background: #fff;
          border: 1px solid #eee;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          z-index: 20;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #333;
        }

        .swiper-nav-btn:hover {
          background: #b59451;
          color: #fff;
          border-color: #b59451;
        }

        .prev-btn {
          left: -20px;
        }
        .next-btn {
          right: -20px;
        }

        @media (max-width: 1200px) {
           .prev-btn { left: -10px; }
           .next-btn { right: -10px; }
        }
        
        @media (max-width: 768px) {
           .prev-btn { left: 0; }
           .next-btn { right: 0; }
        }
      `}</style>
    </div>
  );
};

export default RoomsShowcase;
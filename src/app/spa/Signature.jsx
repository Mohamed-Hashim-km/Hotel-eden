"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Core Swiper styles
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import RoomCardOne from "../room/RoomCardOne";


function Signature({ className }) {
// Debug: Check if multiple rooms exist
const posts=[
  {
    id:1,
    image:"/assets/images/pages/contact.webp",
    title:"Aroma Therapy",
    
  },
  {
    id:2,
    image:"/assets/images/pages/contact.webp",
    title:"Signature Massages",
    
  },
  {
    id:3,
    image:"/assets/images/pages/contact.webp",
    title:"Rejuvenation Therapy",
    
  },
  {
    id:4,
    image:"/assets/images/pages/contact.webp",
    title:"Beauty & Grooming ",
    
  },
]

  return (
    <div className={`rts__section section__padding ${className}`}>
      <div className="container">
        <div className="row">
          <div className="section__wrapper mb-40 wow fadeInUp">
            <div className="section__content__left">
              {/* <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                Room
                            </span> */}
              <h2 className="content__title h2 lh-1">Signature Services</h2>
            </div>
            <div className="section__content__right">
              <p>
              A glimpse into our serene spaces, soothing treatments, and the peaceful atmosphere designed for pure relaxation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="row">
        <Swiper
          className="main__room__slider overflow-hidden wow fadeInUp"
          data-wow-delay=".5s"
          modules={[Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          loop={false}
          watchOverflow={true}
          autoplay={false}
          pagination={{ el: ".rts-pagination", clickable: true }}
          speed={1000}
          breakpoints={{
            0: { slidesPerView: 1 },
            575: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 2.5 },
            1200: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
        >
          {/* Dynamic Room Data */}
          {posts.length > 0 ? (
            posts
              .filter((data) => data.id >= 1 && data.id <= 5) // Now filtering only IDs 1 to 4
              .map((data) => (
                <SwiperSlide key={data.id}>
                  <RoomCardOne Slug={data.slug} Img={`${data.image}`} Title={data.title} Price={data.price} Description={data.description} />
                </SwiperSlide>
              ))
          ) : (
            <p>No rooms available</p>
          )}
        </Swiper>

        {/* Pagination */}
        <div className="rts__pagination">
          <div className="rts-pagination" />
        </div>
      </div>
    </div>
  );
}

export default Signature;

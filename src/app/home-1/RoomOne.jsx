"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import RoomCardOne from "../room/RoomCardOne";

// Data swapped from RoomsShowcase
const roomTypes = [
  {
    title: "Premium Room",
    description: "A well-appointed, comfortable space ideal for unwinding after a day in the city.",
    image: "/assets/images/pages/contact.webp",
    slug: "premium-room",
  },
  {
    title: "Club Room",
    description: "Spacious and refined, offering added comfort and thoughtful conveniences.",
    image: "/assets/images/pages/contact.webp",
    slug: "club-room",
  },
  {
    title: "Suite Room",
    description: "An expansive and elegant stay experience with enhanced comfort and style.",
    image: "/assets/images/pages/contact.webp",
    slug: "suite-room",
  },
  {
    title: "Presidential Room",
    description: "Our most luxurious and spacious accommodation for a truly exceptional stay.",
    image: "/assets/images/pages/contact.webp",
    slug: "presidential-room",
  },
  {
    title: "Dormitory",
    description: "A comfortable and well-maintained shared accommodation option.",
    image: "/assets/images/pages/contact.webp",
    slug: "6-bed-dormitory",
  },
];

function RoomOne({ className }) {
  return (
    <div className={`rts__section section__padding ${className}`}>
      <div className="container">
        <div className="row">
          <div className="section__wrapper mb-40 wow fadeInUp">
            <div className="section__content__left">
              <h2 className="content__title h2 lh-1">Spaces Crafted For Mindful Living</h2>
            </div>
            <div className="section__content__right">
              <p>
               Hotel Eden offers rooms from Premium to Presidential, each blending spacious design with thoughtful amenities for a truly relaxing stay.  </p>
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
          {/* Swapped Data: Iterating roomTypes now */}
          {roomTypes.length > 0 ? (
            roomTypes.map((data, index) => (
              <SwiperSlide key={index}>
                {/* Note: roomTypes doesn't have a specific Price field, so passing null or a default string */}
                <RoomCardOne 
                    Slug={data.slug} 
                    Img={data.image} 
                    Title={data.title} 
                    Price="" 
                    Description={data.description} 
                />
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

export default RoomOne;
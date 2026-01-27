"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Core Swiper styles
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

/**
 * @param {Object} props
 * @param {any[]} props.testimonials
 * @param {string} props.textSize
 * @param {string} props.title
 * @param {string} props.description
 */
function TestimonialOne({ testimonials = [], textSize = "", title = " Testimonial", description = "" }) {
  const data = typeof testimonials === "string" ? JSON.parse(testimonials) : testimonials;

  return (
    <>
      {/* client testimonial  */}
      <div className="rts__section section__padding testimonial has__shape">
        <div className="container">
          <div className="row mb-40">
            <div className="d-flex align-items-center justify-content-between position-relative">
              <div className="section__content__left">
                <span className="h6 subtitle__icon__two d-block wow fadeInUp">{title}</span>
                <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">
                  {description}
                </p>
              </div>
              <div className="slider__navigation">
                <div className="nav__btn button-next">
                  <img src="/assets/images/icon/arrow-left-short.svg" alt="" />
                </div>
                <div className="nav__btn button-prev">
                  <img src="/assets/images/icon/arrow-right-short.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="">
                <Swiper
                  className="testimonial__slider overflow-hidden"
                  modules={[Navigation]}
                  direction="horizontal"
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  centeredSlides={false}
                  autoplay={false}
                  navigation={{
                    nextEl: ".button-next",
                    prevEl: ".button-prev",
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 25,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  speed={1000}
                >
                  {data?.map((item, index) => (
                    <SwiperSlide key={index} className="h-auto">
                      <div className="testimonial__item__content h-100 p-5 border radius-10 bg-white shadow-sm d-flex flex-column">
                        <div className="testimonial__content flex-grow-1">
                          <div className="single__slider__item h-100 d-flex flex-column justify-content-between">
                            <div>
                              <div className="slider__rating d-flex align-items-center mb-20 gap-2">
                                {[...Array(item.rating || 5)].map((_, i) => (
                                  <i key={i} className="flaticon-star text-warning" />
                                ))}
                                {item.date && <span className="text-muted mb-0 ms-2">{item.date}</span>}
                              </div>
                              <span
                                className={`slider__text d-block ${textSize}`}
                                style={{ fontSize: "16px", lineHeight: "26px", marginBottom: "30px" }}
                              >
                                "{item.review}"
                              </span>
                            </div>
                            <div className="slider__author__info mt-auto">
                              <div className="slider__author__info__content">
                                <h6 className="mb-0">{item.author}</h6>
                                {item.designation && <span className="text-muted small">{item.designation}</span>}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* client testimonial  end */}
    </>
  );
}

export default TestimonialOne;

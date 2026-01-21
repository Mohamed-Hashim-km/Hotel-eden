'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

function TestimonialOne() {
    return (
        <>
            {/* client testimonial  */}
            <div className="rts__section section__padding testimonial has__shape">
                <div className="container">
                    <div className="row mb-40">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                            <div className="section__content__left">
                                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                   What Our Guests Love About Us
                                </span>
                                <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">From authentic guest experiences and cherished memories, discover why Hotel Eden is the perfect choice for your stay.</p>
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
                        <div className="col-lg-11">
                            <div className="">
                                <Swiper
                                    className="testimonial__slider overflow-hidden"
                                    modules={[Navigation]}
                                    direction="horizontal"
                                    slidesPerView={1}
                                    spaceBetween={0}
                                    loop={true}
                                    centeredSlides={true}
                                    autoplay="false"
                                    navigation={{
                                        nextEl: ".button-next",
                                        prevEl: ".button-prev",
                                    }}
                                    speed={1000}
                                    effect="slide"
                                >
                                    <SwiperSlide>
                                        <div className="testimonial__item__content">
                                            <div className="author__icon">
                                                <img src="/assets/images/author/author-2x.webp" alt="" />
                                            </div>
                                            <div className="testimonial__content">
                                                <div className="single__slider__item ">
                                                    <div className="slider__rating mb-20">
                                                        <i className="flaticon-star" />
                                                        <i className="flaticon-star" />
                                                        <i className="flaticon-star" />
                                                        <i className="flaticon-star" />
                                                        <i className="flaticon-star" />
                                                    </div>
                                                    <span className="slider__text d-block">
                                                         I stayed for 2 nights at Hotel Eden, Karwar, and had an amazing experience. The rooms are spacious and very clean, with useful facilities like a small refrigerator, locker, study table and a comfortable sofa set. The service was always quick and responsive, which made the stay even more comfortable. The in-house restaurant served delicious complimentary breakfast with good variety. We also had our lunch and dinner there on both days, and every dish was truly finger-licking and fresh. Overall, I am very happy with my stay and would highly recommend Hotel Eden, Karwar, to anyone visiting the city.

                                                    </span>
                                                    <div className="slider__author__info">
                                                        <div className="slider__author__info__content">
                                                            <h6 className="mb-0">Singh</h6>
                                                            {/* <span>COO of Apex Solutions</span> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial__item__content">
                                            <div className="author__icon">
                                                <img src="/assets/images/author/author-4.webp" alt="" />
                                            </div>
                                            <div className="testimonial__content">
                                                <div className="single__slider__item ">
                                                    <div className="slider__rating mb-20">
                                                        <i className="flaticon-star" />
                                                        <i className="flaticon-star" />
                                                        <i className="flaticon-star" />
                                                        <i className="flaticon-star" />
                                                        <i className="flaticon-star" />
                                                    </div>
                                                    <span className="slider__text d-block">
                                                       I stayed at Eden Hotel about a month ago, and it was a great experience. The staff were very polite and made my stay even more comfortable. The service was excellent, the rooms were clean, and the overall atmosphere was welcoming. I really appreciated the warm hospitality and professional attitude of the team.
                                                    </span>
                                                    <div className="slider__author__info">
                                                        <div className="slider__author__info__content">
                                                            <h6 className="mb-0">Aayaz vk</h6>
                                                            {/* <span>COO of Apex Solutions</span> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                      <SwiperSlide>
                                        <div className="testimonial__item__content">
                                            <div className="author__icon">
                                                <img src="/assets/images/author/author-4.webp" alt="" />
                                            </div>
                                            <div className="testimonial__content">
                                                <div className="single__slider__item ">
                                                    <div className="slider__rating mb-20">
                                                        <i className="flaticon-star" />
                                                        <i className="flaticon-star" />
                                                        <i className="flaticon-star" />
                                                        <i className="flaticon-star" />
                                                        <i className="flaticon-star" />
                                                    </div>
                                                    <span className="slider__text d-block">
                                                    I returned here for a long stay of 5 days after about a year. Hotel Eden has exceeded expectations on all fronts. The Club room is still clean, spacious and well-maintained. Housekeeping is available 24x7 and does a great job, which is exceptional for a hotel of this tier and price. The staff really makes the place a good stay, and their talent rivals some of the best hotels. The restaurant Tulip has improved greatly in taste. Overall an excellent place to stay for business and events in the area.

                                                    </span>
                                                    <div className="slider__author__info">
                                                        <div className="slider__author__info__content">
                                                            <h6 className="mb-0">Narayan kamath</h6>
                                                            {/* <span>COO of Apex Solutions</span> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* client testimonial  end */}
        </>

    )
}

export default TestimonialOne
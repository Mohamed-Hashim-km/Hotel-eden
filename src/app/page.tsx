"use client"; // Ensure this is at the top!

import React from "react";
import GDPRCookie from "./home-1/GDPRCookie";
import TopBar from "./home-1/TopBar";
import HeaderOne from "./home-1/Header";
import BannerOne from "./home-1/Banner";
import AdvanceForm from "./home-1/AdvanceForm";
import AboutOne from "./home-1/About";
import AboutThree from "./rooms/premium-room/About";
import FacilitiesOne from "./home-1/FacilitiesOne";
import RoomOne from "./home-1/RoomOne";
import RoomsShowcase from "./home-1/RoomsShowcase";
import FaqHomeOne from "./home-1/FaqHomeOne";
import EventShowcase from "./home-1/EventShowcase";
import TestimonialOne from "./home-1/TestimonialOne";
import VideoOne from "./home-1/VideoOne";
import OfferOne from "./home-1/OfferOne";
import GalleryOne from "./home-1/GalleryOne";
import FooterOne from "./home-1/FooterOne";
import BackToTop from "./home-1/BackToTop";
import RoomNine from "./room/RoomNine";
import Home5Blog from "./home-5/Blog";
import NewsletterOne from "./rooms/premium-room/Newsletter";
import HeaderTwo from "./rooms/premium-room/Header";
import posts from "./data/data-post.json";
import faqData from "./data/faq.json";
import testimonialData from "./data/testimonial-one.json";

function Page() {
  // Use PascalCase for Next.js pages
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <GDPRCookie
          settings={{
            title: "Accept Cookies & privacy",
            message:
              "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches.",
            expires: 90, // Cookie expiration in days
          }}
        />
        {/* <TopBar /> */}
        <HeaderOne />
        <BannerOne />
        {/* <AdvanceForm /> */}
        <AboutThree />
        <FacilitiesOne />
        <RoomsShowcase />
        <RoomOne className="" />

        <GalleryOne />
        <TestimonialOne
          title="What Our Guests Love About Us"
          description="From authentic guest experiences and cherished memories, discover why Hotel Eden is the perfect choice for your stay."
          textSize=""
          testimonials={testimonialData}
        />

        <EventShowcase
          title="Signature Spaces For Every Occasion"
          description="From elegant receptions and private celebrations to professional conferences and corporate meetings, Hotel Eden offers thoughtfully designed event spaces that adapt to your vision."
          buttonText="Explore Event Spaces"
          buttonLink="#"
          imageSrc=""
        />
        <FaqHomeOne
          faqData={faqData}
          title="Everything You Need to Know"
          description=" Here are some quick answers to help you plan your stay at Hotel Eden with ease."
        />
        <Home5Blog title="Offering Carousel" description="" data={posts} />
        {/* <VideoOne /> */}
        {/* <OfferOne /> */}

        {/* <AdvanceForm/> */}
        <NewsletterOne />
        <FooterOne />

        <BackToTop />
      </div>
    </>
  );
}

export default Page;

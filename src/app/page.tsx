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

import posts from "./data/location.json";
import faqData from "./data/faq.json";
import testimonialData from "./data/testimonial-one.json";

function Page() {
  // Use PascalCase for Next.js pages
  const facilities = [
  {
    title: "Tulip – The Gourmet Restaurant",
    slug: "tulip-gourmet-restaurant",
    description: "Refined multi-cuisine dining in an elegant setting, where thoughtfully crafted flavours and warm service come together for memorable meals."
  },
  {
    title: "Food & Forest – Rooftop Dining",
    slug: "food-and-forest-rooftop-dining",
    description: "A relaxed rooftop experience with great views, food and crafted cocktails perfect for laid-back evenings and lively gatherings."
  },
  {
    title: "Oyster Bay – Seafood Speciality",
    slug: "oyster-bay-seafood-speciality",
    description: "Fresh coastal flavours inspired by the Konkan coast, serving authentic seafood dishes that celebrate tradition and taste."
  },
  {
    title: "The Golden Leaf Spa",
    slug: "the-golden-leaf-spa",
    description: "A calm sanctuary for relaxation and renewal, offering massages, wellness therapies, and beauty treatments designed to restore balance."
  },
  {
    title: "Terminal 5 – Events & Celebrations",
    slug: "terminal-5-events-and-celebrations",
    description: "A stunning rooftop venue with panoramic views of Karwar, designed for weddings, corporate events, and unforgettable celebrations."
  }
];
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
        <Home5Blog title="In the Heart of Karwar" description="Stay close to everything that matters. Hotel Eden’s central location makes it easy to explore Karwar’s beaches, coastline, and key attractions while still enjoying a peaceful and comfortable stay." data={posts} />
        {/* <FacilitiesOne /> */}
        <RoomsShowcase />
        <RoomOne className="" />

        <GalleryOne title={"A Culinary Experience for Every Mood"} description={" From fine dining and rooftop indulgence to the freshest coastal flavours, Hotel Eden brings you three distinctive dining destinations under one roof."} cta={"Explore All Restaurants"} />
        <TestimonialOne
          title="What Our Guests Love About Us"
          description="From authentic guest experiences and cherished memories, discover why Hotel Eden is the perfect choice for your stay."
          textSize=""
          testimonials={testimonialData}
        />

        <EventShowcase
          title="Signature Spaces For Every Occasion"
          description="From elegant receptions, private celebrations, professional conferences and corporate meetings, Hotel Eden offers thoughtfully designed event spaces that adapt to your vision."
          buttonText="Explore Event Spaces"
          buttonLink="#"
          imageSrc=""
        />
        <FaqHomeOne
          faqData={faqData}
          title="Everything You Need to Know"
          description=" Essential information to help you enjoy a seamless stay at Hotel Eden."
        />
        <Home5Blog title="Offering Carousel"  description="" data={facilities} />
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

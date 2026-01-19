import React from "react";
import HeaderOne from "../home-1/Header";
import BannerSeven from "./Banner";
import RoomFive from "./Room";
import posts from "../data/data-room.json";
import AboutSix from "./About";
import ServiceFour from "./Service";
import TestimonialSeven from "./Testimonial";
import FacilitiesSix from "./Facilities";
import EventOne from "./Event";
import FooterSix from "./Footer";
import BackToTop from "../home-1/BackToTop";
import GDPRCookie from "../home-1/GDPRCookie";
import AboutOne from "../home-1/About";
import RoomEight from "../room/RoomEight";
import GalleryFour from "../resturant/Gallery";
import TestimonialTwo from "../home-2/Testimonial";
import NewsletterOne from "../home-3/Newsletter";
import Home5Blog from "../home-5/Blog";
function page() {
  return (
    <>
      <GDPRCookie
        settings={{
          title: "Accept Cookies & privacy",
          message:
            "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches.",
          expires: 90, // Cookie expiration in days
        }}
      />
      <HeaderOne />
      <RoomEight />
      <GalleryFour />
      <TestimonialTwo />

      <NewsletterOne />

      <Home5Blog />

      {/* <AboutOne />
      <RoomFive posts={posts} />
      <AboutSix />
      <ServiceFour />
      <TestimonialSeven />
      <FacilitiesSix />
      <EventOne /> */}
      <FooterSix />
      <BackToTop />
    </>
  );
}

export default page;

import React from "react";
import TopBar from "../home-1/TopBar";
import HeaderOne from "../home-1/Header";
import BannerSix from "./Banner";
import FacilitiesFive from "./Facilities";
import AboutFive from "./About";
import RoomFour from "./Room";
import posts from "../data/data-room.json";
import ServiceThree from "./Service";
import OfferFour from "./Offer";
import TestimonialSection from "./Testimonial";
import FooterFive from "./Footer";
import BackToTop from "../home-1/BackToTop";
import GDPRCookie from "../home-1/GDPRCookie";
import AboutOne from "../home-1/About";
import ActivitiesOne from "../activities/Activities";
import ServiceTwo from "../home-5/Service";
import GalleryOne from "../home-1/GalleryOne";
import NewsletterOne from "../home-3/Newsletter";
import FooterOne from "../home-1/FooterOne";
import RoomFive from "../home-7/Room";

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
      <TopBar />
      <HeaderOne />
      {/* <BannerSix /> */}
      <AboutOne />
       <RoomFive posts={posts} />
      {/* <ServiceTwo /> */}
      <ActivitiesOne />
      {/* <TestimonialSection className="pb-120" /> */}
      <GalleryOne />
          <NewsletterOne />
      <FooterOne/>
      <BackToTop />
    </>
  );
}

export default page;

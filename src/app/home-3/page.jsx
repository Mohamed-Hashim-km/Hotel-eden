import React from "react";
import HeaderTwo from "./Header";
import BannerThree from "./Banner";
import Home3Hero from "./Home3Hero";
import Amenities from "./Amenities";
import AdvanceForm from "../home-1/AdvanceForm";
import AboutThree from "./About";
import FacilitiesTwo from "../home-2/Facilities";
import RoomTwo from "../home-2/Room";
import posts from "../data/data-room.json";
import TestimonialTwo from "../home-2/Testimonial";
import VideoThree from "./Video";
import OfferThree from "./Offer";
import NewsletterOne from "./Newsletter";
import FooterTwo from "./Footer";
import BackToTop from "../home-1/BackToTop";
import GDPRCookie from "../home-1/GDPRCookie";
import GalleryOne from "../home-1/GalleryOne";
import Home5Blog from "../home-5/Blog";
import FooterOne from "../home-1/FooterOne";
import faqData from "../data/faq.json";

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
      <HeaderTwo />
      {/* <BannerThree /> */}
      <Home3Hero />
      {/* <AdvanceForm /> */}
      {/* <AboutThree /> */}
      <GalleryOne />
      <Amenities />
      {/* <FacilitiesTwo /> */}
      {/* <RoomTwo posts={posts} /> */}
      <TestimonialTwo />
      {/* <VideoThree /> */}
      <NewsletterOne />
      {/* <OfferThree /> */}
      <Home5Blog data={posts} />

      <FooterOne />
      <BackToTop />
    </>
  );
}

export default page;

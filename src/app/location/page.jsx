import React from "react";
import HeaderOne from "../home-1/Header";
import BannerTwo from "./Banner";

import posts from "../data/location.json";

import FooterOne from "../home-1/FooterOne";
import GDPRCookie from "../home-1/GDPRCookie";
import Home5Blog from "../home-5/Blog";

import NewsletterOne from "../rooms/premium-room/Newsletter";
import CommonAmenities from "./CommonAmenities";
import FaqHomeOne from "../home-1/FaqHomeOne";
import faqData from "../data/locationFaq.json";

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
      <BannerTwo />

      <Home5Blog data={posts} />
      <CommonAmenities />
      <FaqHomeOne faqData={faqData} />

      <NewsletterOne />
      {/* <AboutTwo /> */}
      {/* <FacilitiesTwo />
      <RoomTwo posts={posts} />
      <TestimonialTwo />
      <VideoTwo />
      <OfferTwo />
      <GalleryTwo />

      <BackToTop /> */}
      <FooterOne />
    </>
  );
}

export default page;

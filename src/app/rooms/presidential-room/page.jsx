import React from "react";


;

import BackToTop from "../../home-1/BackToTop";
import GDPRCookie from "../../home-1/GDPRCookie";



import faqData from "../../data/faq.json";
import HeaderOne from "../../home-1/Header";
import TestimonialOne from "../../home-1/TestimonialOne";
import Home3Hero from "../premium-room/Home3Hero"
import FooterOne from "../../../app/home-1/FooterOne";
import testimonialData from "../../data/room-type-testimonials.json";
import BlogTwo from "../../home-5/Blog";
import NewsletterOne from "../premium-room/Newsletter";

const posts = [
  {
    id: 1,
    slug: "/rooms/premium-room",
    image: "/assets/images/pages/room/1.webp",
    bannerImg: "/assets/images/pages/room/1.webp",
    title: "Premium Room",
    price: "100$",
    author: "Mack jon",
    description: "Comfort‑focused and peaceful, perfect for business travellers, couples and short stays",
    authorImg: "author__one.png",
    publishedDate: "20 Aug 2024",
  },
  {
    id: 1,
    slug: "/rooms/club-room",
    image: "/assets/images/pages/room/1.webp",
    bannerImg: "/assets/images/pages/room/1.webp",
    title: " Club Room",
    price: "100$",
    author: "Mack jon",
    description: "A more spacious and refined room offering extra comfort and added conveniences for a more relaxed stay",
    authorImg: "author__one.png",
    publishedDate: "20 Aug 2024",
  },
  {
    id: 1,
    slug: "/rooms/suite-room",
    image: "/assets/images/pages/room/1.webp",
    bannerImg: "/assets/images/pages/room/1.webp",
    title: "Suite Room",
    price: "100$",
    author: "Mack jon",
    description: "Designed for guests who enjoy more space, privacy and a more indulgent stay experience.",
    authorImg: "author__one.png",
    publishedDate: "20 Aug 2024",
  },
];

export const features = [
  {
    id: 1,
    title: "Air-Conditioning",
    delay: ".3s",
  },
  {
    id: 2,
    title: "Android TV",
    delay: ".4s",
  },
  {
    id: 3,
    title: "Bathroom",
    delay: ".5s",
  },
  {
    id: 4,
    title: "Complimentary Breakfast",
    delay: ".3s",
  },
  {
    id: 5,
    title: "Electric kettle",
    delay: ".4s",
  },

  {
    id: 3,
    title: "Fan",
    delay: ".5s",
  },
  {
    id: 4,
    title: " Tea/Coffee Maker",
    delay: ".3s",
  },
  {
    id: 5,
    title: " Satellite Channels",
    delay: ".4s",
  },
  {
    id: 1,
    title: "Mini-Fridge",
    delay: ".3s",
  },
];

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
      {/* <BannerThree /> */}
      <Home3Hero
        features={features}
        title={"Presidential Room"}
        desc={
          "The Presidential Room at Hotel Eden is the pinnacle of luxury and space, designed for guests who seek the finest in comfort and exclusivity. With elegantly appointed interiors, expansive layouts and premium furnishings, this room offers an indulgent stay experience."
        }
      />
      <NewsletterOne title={"Book Your Presidential Room Now"} />
      <BlogTwo title="Other Rooms" data={posts} />
      {/* <AdvanceForm /> */}
      {/* <AboutThree /> */}
      {/* <Amenities />
      <GalleryOne /> */}

      {/* <FacilitiesTwo /> */}
      {/* <RoomTwo posts={posts} /> */}
      {/* <TestimonialOne testimonials={testimonialData} /> */}
      {/* <VideoThree /> */}
      {/* <NewsletterOne /> */}
      {/* <OfferThree /> */}
      {/* <Home5Blog data={posts} /> */}

      <FooterOne />
      <BackToTop />
    </>
  );
}

export default page;

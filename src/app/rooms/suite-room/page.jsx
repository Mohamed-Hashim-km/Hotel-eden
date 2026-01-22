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
    title: "Club Room",
    price: "100$",
    author: "Mack jon",
    description: "A more spacious and refined room offering extra comfort and added conveniences for a more relaxed stay",
    authorImg: "author__one.png",
    publishedDate: "20 Aug 2024",
  },
  {
    id: 1,
    slug: "/rooms/presidential-room",
    image: "/assets/images/pages/room/1.webp",
    bannerImg: "/assets/images/pages/room/1.webp",
    title: "Presidential Room",
    price: "100$",
    author: "Mack jon",
    description: "Our most luxurious and expansive accommodation, created for those who prefer the finest in comfort and space",
    authorImg: "author__one.png",
    publishedDate: "20 Aug 2024",
  },
];



export const features = [
  {
    id: 1,
    title: "Complimentary Breakfast",
    delay: ".3s",
  },
  {
    id: 2,
    title: "Fan",
    delay: ".4s",
  },
  {
    id: 3,
    title: "Flat-screen TV",
    delay: ".5s",
  },
  {
    id: 1,
    title: " Free Toiletries",
    delay: ".3s",
  },
  {
    id: 2,
    title: " Mini-Fridge",
    delay: ".4s",
  },
  {
    id: 3,
    title: "Mineral Water",
    delay: ".5s",
  },
   {
    id: 1,
    title: "Satellite Channels",
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
      <Home3Hero features={features} title={"Suite Room"} desc={" The Suite Room at Hotel Eden is designed for guests who enjoy extra space, privacy and refined comfort. With thoughtfully planned interiors and elegant decor, this room creates a sense of luxury without being overwhelming."}/>
      <NewsletterOne title={"Book Your Suite Room Now"} />
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

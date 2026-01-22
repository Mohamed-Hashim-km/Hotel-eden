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
    description: "Comfort‑focused and peaceful, perfect for business travellers, couples and short stays.",
    authorImg: "author__one.png",
    publishedDate: "20 Aug 2024",
  },
  {
    id: 1,
    slug: "/rooms/suite-room",
    image: "/assets/images/pages/room/1.webp",
    bannerImg: "/assets/images/pages/room/1.webp",
    title: " Suite Room",
    price: "100$",
    author: "Mack jon",
    description: "Designed for guests who enjoy more space, privacy and a more indulgent stay experience.",
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
    description: "Our most luxurious and expansive accommodation, created for those who prefer the finest in comfort and space.",
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
    title: "Complimentary Breakfast",
    delay: ".5s",
  },
  {
    id: 4,
    title: "Free Toiletries",
    delay: ".3s",
  },
  {
    id: 5,
    title: "Satellite Channels",
    delay: ".4s",
  },
   {
    id: 3,
    title: "Tea/Coffee Maker",
    delay: ".5s",
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
          <Home3Hero  title={"Club Rooms"} desc={" The Club Room at Hotel Eden offers an elevated stay experience with extra space and thoughtful touches that enhance your comfort. Designed for guests who appreciate a bit more room to unwind, this accommodation combines refined style with practical functionality."} features={features}/>
      <NewsletterOne title={"Book Your Club Room Now"} />
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

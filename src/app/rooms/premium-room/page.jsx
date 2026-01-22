import React from "react";
import HeaderTwo from "./Header";
import BannerThree from "./Banner";
import Home3Hero from "./Home3Hero";
import Amenities from "./Amenities";
import AdvanceForm from "../../home-1/AdvanceForm";
import AboutThree from "./About";
import FacilitiesTwo from "../../location/Facilities";
import RoomTwo from "../../location/Room";

import TestimonialTwo from "../../location/Testimonial";
import VideoThree from "./Video";
import OfferThree from "./Offer";
import NewsletterOne from "./Newsletter";
import FooterTwo from "./Footer";
import BackToTop from "../../home-1/BackToTop";
import GDPRCookie from "../../home-1/GDPRCookie";
import GalleryOne from "../../home-1/GalleryOne";
import Home5Blog from "../../home-5/Blog";
import FooterOne from "../../home-1/FooterOne";
import faqData from "../../data/faq.json";
import HeaderOne from "../../home-1/Header";
import TestimonialOne from "../../home-1/TestimonialOne";


import BlogTwo from "../../home-5/Blog";

const posts = [
  {
    id: 1,
    slug: "/rooms/club-room",
    image: "/assets/images/pages/room/1.webp",
    bannerImg: "/assets/images/pages/room/1.webp",
    title: "Club Room",
    price: "100$",
    author: "Mack jon",
    description: "A more spacious and refined room offering extra comfort and added conveniences for a more relaxed stay.",
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
    title: "Free Toiletries",
    delay: ".5s",
  },
  {
    id: 4,
    title: "Geyser",
    delay: ".3s",
  },
  {
    id: 5,
    title: "Mini-Fridge",
    delay: ".4s",
  },
];

const testimonialData = [
  {
    id: 1,
    author: "Ravindra Tayalur",
    designation: "",
    review:
      "Because all the facilities were excellent. I stayed for two days in Hotel Eden. The property is new and has just completed 5 months. The rooms are big and with modern amenities. The staff at the front desk were polite and helpful. The house keeping was good. The breakfast served was especially nice. Overall a great stay within the budget. I would like to stay there again.",
    img: "/assets/images/author/author-2x.webp",
    rating: 5,
    date: "2 years ago",
  },
  {
    id: 2,
    author: "Natalie Harper",
    designation: "",
    review:
      "This was one of the nicest hotels I've stayed in during my travelling around India for 5 months - and I'm travelling on a budget. It is like a 5 Star hotel but at such a great price! Also the staff are AMAZING!!! I arrived late and was hungry and after a bad day wanted a beer. The bar wasn't open yet so one of the staff went out to get me a beer and even though the kitchen was closed they made a great sandwich with French fries. The restaurant is also great for full meals - lovely tandoori paneer! Thank you all for great hospitality and great service!",
    img: "/assets/images/author/author-4.webp",
    rating: 5,
    date: "2 years ago",
  },
  {
    id: 3,
    author: "Umang Malhotra",
    designation: "",
    review:
      "I loved my stay of 1 Night at Hotel Eden Karvar. Their rooms are big and spacious. The morning breakfast buffet is wide and has a good spread. Service by staff members is also amazing. Room bathrooms are very cozy and rooms are spacious, comfortable. Above all, room prices are affordable.",
    img: "/assets/images/author/author-4.webp",
    rating: 5,
    date: "2 years ago",
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
    <Home3Hero  title={"Premium Room"} desc={" Designed for guests who value comfort and convenience, the Premium Room at Hotel Eden offers a relaxing space to unwind after a day in the city. Whether you’re here for business or leisure, this room gives you everything you need for a smooth and pleasant stay."} features={features}/>
      <NewsletterOne title={"Book Your Premium Room Now"} />
      <BlogTwo title="Other Rooms" data={posts} />
      {/* <AdvanceForm /> */}
      {/* <AboutThree /> */}
      {/* <Amenities />
      <GalleryOne /> */}

      {/* <FacilitiesTwo /> */}
      {/* <RoomTwo posts={posts} /> */}
      <TestimonialOne testimonials={testimonialData} />
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

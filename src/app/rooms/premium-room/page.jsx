
import Home3Hero from "./Home3Hero";

import NewsletterOne from "./Newsletter";

import BackToTop from "../../home-1/BackToTop";
import GDPRCookie from "../../home-1/GDPRCookie";

import FooterOne from "../../home-1/FooterOne";

import HeaderOne from "../../home-1/Header";
import TestimonialOne from "../../home-1/TestimonialOne";
import GalleryOne from "../../home-1/GalleryOne";


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
      "Stayed for two days at the new Hotel Eden. Rooms are spacious with modern amenities, staff were polite and helpful, housekeeping was good, and breakfast was excellent. Great stay within budget.",
    img: "/assets/images/author/author-2x.webp",
    rating: 5,
    date: "2 years ago",
  },
  {
    id: 2,
    author: "Natalie Harper",
    designation: "",
    review:
      "One of the nicest budget hotels I’ve stayed at in India. Staff were amazing, went out of their way to help, and the restaurant served delicious meals. It felt like a 5-star experience at a great price.",
    img: "/assets/images/author/author-4.webp",
    rating: 5,
    date: "2 years ago",
  },
  {
    id: 3,
    author: "Umang Malhotra",
    designation: "",
    review:
      "I loved my 1-night stay at Hotel Eden, Karwar. Spacious, comfortable rooms with cozy bathrooms, great breakfast buffet, and excellent staff service. Affordable and highly recommended.",
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
    <Home3Hero  title={"Premium Room (Twin Bedded)"} desc={"A comfortable private room with twin beds, modern interiors, and all essential amenities for a peaceful stay. Designed for guests who value comfort and convenience, the Premium Room at Hotel Eden offers a relaxing space to unwind after a day in the city."} features={features}/>
    
      {/* <AdvanceForm /> */}
      {/* <AboutThree /> */}
      {/* <Amenities />
      <GalleryOne /> */}
       <GalleryOne /> 

      {/* <FacilitiesTwo /> */}
      {/* <RoomTwo posts={posts} /> */}
      <TestimonialOne testimonials={testimonialData} />
      {/* <VideoThree /> */}
      {/* <NewsletterOne /> */}
      {/* <OfferThree /> */}
      {/* <Home5Blog data={posts} /> */}
        <NewsletterOne title={"Book Your Premium Room Now"} />
      <BlogTwo title="Other Rooms" data={posts} />

      <FooterOne />
      <BackToTop />
    </>
  );
}

export default page;

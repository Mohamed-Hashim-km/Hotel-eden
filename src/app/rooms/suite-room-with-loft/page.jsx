import React from 'react'

import TestimonialFive from '../../home-1/TestimonialOne'
import FooterFour from '../../home-5/Footer'
import BackToTop from '../../home-1/BackToTop'
import GDPRCookie from '../../home-1/GDPRCookie'
import NewsletterOne from '../../rooms/premium-room/Newsletter'
import GalleryOne from '../../home-1/GalleryOne'
import HeaderOne from '../../home-1/Header'
import Amenities from '../../rooms/premium-room/Amenities'
import HeroFive from '../../home-5/hero-five'
import CommonAmenities from '../../karwar/CommonAmenities';
import NewsLetterOne from '../../rooms/premium-room/Newsletter';
import FooterOne from '../../home-1/FooterOne';
import BlogTwo from '../../home-5/Blog'
import TestimonialOne from '../../home-1/TestimonialOne'

// const posts = [
//   {
//     id: 1,
//     slug: "/rooms/10-bed-dormitory",
//     image: "/assets/images/pages/room/1.webp",
//     bannerImg: "/assets/images/pages/room/1.webp",
//     title: "10-Bed Dormitory",
//     price: "100$",
//     author: "Mack jon",
//     description: "A spacious and thoughtfully designed dormitory, perfect for large groups seeking comfort, privacy, and modern amenities.",
//     authorImg: "author__one.png",
//     publishedDate: "20 Aug 2024",
//   },
//   {
//     id: 1,
//     slug: "/rooms/6-bed-dormitory",
//     image: "/assets/images/pages/room/1.webp",
//     bannerImg: "/assets/images/pages/room/1.webp",
//     title: "6-Bed Dormitory",
//     price: "100$",
//     author: "Mack jon",
//     description: "A cozy, group-friendly dormitory offering essential comforts for a relaxed and convenient stay.",
//     authorImg: "author__one.png",
//     publishedDate: "20 Aug 2024",
//   },

//   {
//     id: 1,
//     slug: "/rooms/premium-room-king-size-bedded",
//     image: "/assets/images/pages/room/1.webp",
//     bannerImg: "/assets/images/pages/room/1.webp",
//     title: "Premium Room (King-Size Bedded)",
//     price: "100$",
//     author: "Mack jon",
//     description: "A stylish and comfortable room with a king-size bed, designed for guests who prefer extra space and a relaxed stay.",
//     authorImg: "author__one.png",
//     publishedDate: "20 Aug 2024",
//   },
//   {
//     id: 1,
//     slug: "/rooms/suite-room-with-balcony",
//     image: "/assets/images/pages/room/1.webp",
//     bannerImg: "/assets/images/pages/room/1.webp",
//     title: "Suite Room (With Balcony)",
//     price: "100$",
//     author: "Mack jon",
//     description: "A spacious and refined suite with a private balcony, perfect for guests who enjoy open views and an elevated stay experience.",
//     authorImg: "author__one.png",
//     publishedDate: "20 Aug 2024",
//   },
//   {
//     id: 1,
//     slug: "/rooms/suite-room-without-balcony",
//     image: "/assets/images/pages/room/1.webp",
//     bannerImg: "/assets/images/pages/room/1.webp",
//     title: "Suite Room (Without Balcony)",
//     price: "100$",
//     author: "Mack jon",
//     description: "A spacious and elegant suite offering extra comfort and a calm, relaxing stay environment.",
//     authorImg: "author__one.png",
//     publishedDate: "20 Aug 2024",
//   }
// ];






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



  const posts = [
    {
      title: "10-Bed Dormitory",
      slug: "/rooms/10-bed-dormitory",
      description: "A spacious and thoughtfully designed dormitory, perfect for large groups seeking comfort, privacy, and modern amenities.",
    },
    {
      title: "6-Bed Dormitory",
      slug: "/rooms/6-bed-dormitory",
      description: "A cozy, group-friendly dormitory offering essential comforts for a relaxed and convenient stay.",
    },
    {
      title: "Premium Room",
      slug: "/rooms/premium-room",
      description: "Our most luxurious and spacious accommodation for a truly exceptional stay.",
    },
    {
      title: "Suite Double Room",
      slug: "/rooms/suite-room-double",
      description: "The Suite Double Room features a spacious, elegantly designed interior with a comfortable double bed, modern amenities, and a relaxing atmosphere.",
    },
    {
      title: "Suite Room",
      slug: "/rooms/suite-room",
      description: "An expansive suite with sophisticated decor and thoughtful amenities, designed for comfort and relaxation",
    },
  
  ];

function page() {
  return (
    <>
      <GDPRCookie
        settings={{
          title: "Accept Cookies & privacy",
          message: "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches.",
          expires: 90, 
        }}
      />
      <HeaderOne />
      
      {/* Updated Title and Description for 10-Bed Dormitory */}
      <HeroFive 
        title="Suite Room" 
        description="The Suite Room offers expansive interiors with sophisticated decor, a separate seating or living space, and thoughtful amenities, creating a spacious and comfortable retreat where guests can relax and enjoy an elevated stay experience."
      />

      {/* Fixed Syntax Errors in Props (removed commas) */}
      <CommonAmenities 
        title=""
        subtitle="Room Specific Amenities"
        description=""
        amenities={[
          { id: 1, title: "Air-Conditioning" },
          { id: 1, title: "Attached Bathroom" },
          { id: 1, title: "Complimentary Toiletries" },
          { id: 1, title: "Free Wifi" },
      
          { id: 1, title: "Well-ventilated stay" },

        ]}
      />

       <GalleryOne /> 
       <TestimonialOne testimonials={testimonialData} />
      <NewsletterOne title={"Book Your Stay Now"} />
      <BlogTwo title="Other Rooms" data={posts} />
      <FooterOne />
      <BackToTop />
    </>
  )
}

export default page
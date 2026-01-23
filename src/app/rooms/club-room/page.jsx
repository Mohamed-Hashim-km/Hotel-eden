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

const posts = [
  {
    id: 1,
    slug: "/rooms/premium-room-twin-bedded",
    image: "/assets/images/pages/room/1.webp",
    bannerImg: "/assets/images/pages/room/1.webp",
    title: "Premium Room (Twin Bedded)",
    price: "100$",
    author: "Mack jon",
    description: "A stylish and comfortable room with a twin size bed, designed for guests who prefer extra space and a relaxed stay.",
    authorImg: "author__one.png",
    publishedDate: "20 Aug 2024",
  },
  {
    id: 1,
    slug: "/rooms/premium-room-king-size-bedded",
    image: "/assets/images/pages/room/1.webp",
    bannerImg: "/assets/images/pages/room/1.webp",
    title: "Premium Room (King-Size Bedded)",
    price: "100$",
    author: "Mack jon",
    description: "A stylish and comfortable room with a king-size bed, designed for guests who prefer extra space and a relaxed stay.",
    authorImg: "author__one.png",
    publishedDate: "20 Aug 2024",
  },

  {
    id: 1,
    slug: "/rooms/suite-room-with-balcony",
    image: "/assets/images/pages/room/1.webp",
    bannerImg: "/assets/images/pages/room/1.webp",
    title: "Suite Room (With Balcony)",
    price: "100$",
    author: "Mack jon",
    description: "A spacious and refined suite with a private balcony, perfect for guests who enjoy open views and an elevated stay experience.",
    authorImg: "author__one.png",
    publishedDate: "20 Aug 2024",
  },
  {
    id: 1,
    slug: "/rooms/suite-room-without-balcony",
    image: "/assets/images/pages/room/1.webp",
    bannerImg: "/assets/images/pages/room/1.webp",
    title: "Suite Room (Without Balcony)",
    price: "100$",
    author: "Mack jon",
    description: "A spacious and elegant suite offering extra comfort and a calm, relaxing stay environment.",
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
    description: "Our most luxurious and spacious accommodation for a truly exceptional stay.",
    authorImg: "author__one.png",
    publishedDate: "20 Aug 2024",
  }
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
          message: "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches.",
          expires: 90, 
        }}
      />
      <HeaderOne />
      
      {/* Updated Title and Description for 10-Bed Dormitory */}
      <HeroFive 
        title="Club Rooms" 
        description="The Club Room at Hotel Eden offers an elevated stay experience with extra space and thoughtful touches that enhance your comfort. Designed for guests who appreciate a bit more room to unwind, this accommodation combines refined style with practical functionality."
      />

      {/* Fixed Syntax Errors in Props (removed commas) */}
      <CommonAmenities 
        title=""
        subtitle="Room Specific Amenities"
        description=""
        amenities={[
          { id: 1, title: "Air-Conditioning" },
          { id: 1, title: "Android TV" },
          { id: 1, title: "Complimentary Breakfast" },
          { id: 1, title: "Free Toiletries" },
          { id: 1, title: "Satellite Channels" },
          { id: 1, title: "Tea/Coffee Maker" },
    

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
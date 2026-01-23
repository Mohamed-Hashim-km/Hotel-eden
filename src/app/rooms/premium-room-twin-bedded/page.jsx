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

const posts = [
  {
    id: 1,
    slug: "/rooms/10-bed-dormitory",
    image: "/assets/images/pages/room/1.webp",
    bannerImg: "/assets/images/pages/room/1.webp",
    title: "10-Bed Dormitory",
    price: "100$",
    author: "Mack jon",
    description: "A spacious and thoughtfully designed dormitory, perfect for large groups seeking comfort, privacy, and modern amenities.",
    authorImg: "author__one.png",
    publishedDate: "20 Aug 2024",
  },
  {
    id: 1,
    slug: "/rooms/6-bed-dormitory",
    image: "/assets/images/pages/room/1.webp",
    bannerImg: "/assets/images/pages/room/1.webp",
    title: "6-Bed Dormitory",
    price: "100$",
    author: "Mack jon",
    description: "A cozy, group-friendly dormitory offering essential comforts for a relaxed and convenient stay.",
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
  }
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
        title="Premium Room Twin Bedded" 
        description="The Premium Room Twin Bedded at Eden Ember Castle, Gokarna offers a comfortable and thoughtfully designed space for a relaxed stay. With warm interiors, calming tones, and a peaceful atmosphere, it is ideal for unwinding after a day spent exploring the beaches and the town. The twin-bed layout makes it perfect for guests who prefer both comfort and personal space, ensuring a restful and easy stay."
      />

      {/* Fixed Syntax Errors in Props (removed commas) */}
      <CommonAmenities 
        title=""
        subtitle="Room Specific Amenities"
        description=""
        amenities={[
          { id: 1, title: "Air-Conditioning" },
          { id: 1, title: "Attached Bathroom" },
          { id: 1, title: "Power Backup" },
          { id: 1, title: "Well-ventilated stay" },
          { id: 1, title: "Free Wifi" },
          { id: 1, title: " Fully fenced property" },
        ]}
      />
      
      <NewsletterOne title={"Book Your Stay Now"} />
      <BlogTwo title="Other Rooms" data={posts} />
      <FooterOne />
      <BackToTop />
    </>
  )
}

export default page
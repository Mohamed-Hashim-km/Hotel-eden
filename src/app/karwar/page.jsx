import React from "react";
import HeaderOne from "../home-1/Header";
import BannerTwo from "./Banner";

import posts from "../data/location.json";

import FooterOne from "../home-1/FooterOne";
import GDPRCookie from "../home-1/GDPRCookie";
import Home5Blog from "../home-5/Blog";
import faqData from "../data/locationFaq.json";

import NewsletterOne from "../rooms/premium-room/Newsletter";
import CommonAmenities from "./CommonAmenities";
import PopularFacilities from "./PopularFacilities";
import FaqHomeOne from "../home-1/FaqHomeOne";
import {
  FaWifi,
  FaCar,
  FaUtensils,
  FaSnowflake,
  FaTv,
  FaShieldAlt,
  FaClock,
  FaBriefcase,
  FaVideo,
  FaHeart,
  FaNewspaper,
  FaMapMarkedAlt,
  FaMugHot,
  FaCouch,
  FaSuitcaseRolling,
  FaBatteryFull,
  FaTimesCircle,
} from "react-icons/fa";
import { MdElevator, MdBalcony, MdFamilyRestroom, MdLocalTaxi } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6"; // Ensure consistent arrow icon usage

const facilities = [
  { icon: <FaTimesCircle />, title: "Free Cancellation" },
  { icon: <FaBatteryFull />, title: "Power Backup" },
  { icon: <FaClock />, title: "24-hour front desk" },
  { icon: <FaShieldAlt />, title: "24-hour security" },
  { icon: <FaSnowflake />, title: "Air conditioning" },
  { icon: <FaBriefcase />, title: "Business centre" },
  { icon: <FaVideo />, title: "CCTV in common areas" },
  { icon: <FaVideo />, title: "CCTV outside property" },
  { icon: <MdLocalTaxi />, title: "Cab Service" },
  { icon: <FaUtensils />, title: "Complimentary breakfast" },
  { icon: <FaHeart />, title: "Couples Allowed" },
  { icon: <MdElevator />, title: "Elevator" },
  { icon: <MdFamilyRestroom />, title: "Family rooms" },
  { icon: <FaTv />, title: "Flat-screen TV" },
  { icon: <FaCar />, title: "Free Car Parking" },
  { icon: <FaWifi />, title: "Free Wifi" },
  { icon: <FaCouch />, title: "Fully furnished" },
  { icon: <MdBalcony />, title: "Living Area" },
  { icon: <FaSuitcaseRolling />, title: "Luggage Assistance" },
  { icon: <FaSnowflake />, title: "Mini-Fridge" },
  { icon: <FaNewspaper />, title: "Newspaper" },
  { icon: <FaMapMarkedAlt />, title: "Personalized city tours" },
  { icon: <FaMugHot />, title: "Tea/coffee maker" },
  { icon: <FaClock />, title: "24/7 Front Desk & Guest Assistance" },
  
];
function page() {
  const rooms = [
    {
      title: "Premium Room (Twin Bedded)",
      slug: "/rooms/premium-room-twin-bedded",
      description: "A comfortable private room with twin beds, modern interiors, and all essential amenities for a peaceful stay.",
    },
    {
      title: "Premium Room (King-Size Bedded)",
      slug: "/rooms/premium-room-king-size-bedded",
      description: "A stylish and comfortable room with a king-size bed, designed for guests who prefer extra space and a relaxed stay.",
    },
    {
      title: "Club Room",
      slug: "/rooms/club-room",
      description: "Spacious and refined, offering added comfort and thoughtful conveniences.",
    },
    {
      title: "Suite Room (With Balcony)",
      slug: "/rooms/suite-room-with-balcony",
      description: "A spacious and refined suite with a private balcony, perfect for guests who enjoy open views and an elevated stay experience.",
    },
    {
      title: "Suite Room (Without Balcony)",
      slug: "/rooms/suite-room-without-balcony",
      description: "A spacious and elegant suite offering extra comfort and a calm, relaxing stay environment.",
    },
    {
      title: "Presidential Room",
      slug: "/rooms/presidential-room",
      description: "Our most luxurious and spacious accommodation for a truly exceptional stay.",
    },
  ];


  

 

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

      <Home5Blog
        title="Rooms Designed for Comfort and Space"
        description="At Hotel Eden, every room is crafted to be your personal retreat, combining elegant interiors, modern amenities and space to ensure a truly relaxing stay."
        data={rooms}
      />

      <PopularFacilities
        facilities={facilities}
        title="Popular Facilities"
        subtitle={"Everything You Need for a Comfortable Stay"}
        description="From elegant in-room comforts to thoughtful property-wide amenities, Hotel Eden ensures a seamless and comfortable stay."
      />
      <CommonAmenities   />
      <FaqHomeOne faqData={faqData} />

      {/* <NewsletterOne /> */}
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

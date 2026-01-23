"use client";
import React, { useEffect } from "react";
import TopBar from "../home-1/TopBar";
import HeaderOne from "../home-1/Header";

import BannerVideo from "./Banner";
import AdvanceForm from "../home-1/AdvanceForm";
import AboutOne from "../home-1/About";
import FacilitiesOne from "../home-1/FacilitiesOne";
import RoomOne from "../home-1/RoomOne";
import TestimonialOne from "../home-1/TestimonialOne";
import VideoOne from "../home-1/VideoOne";
import OfferOne from "../home-1/OfferOne";
import GalleryOne from "../home-1/GalleryOne";
import FooterOne from "../home-1/FooterOne";
import BackToTop from "../home-1/BackToTop";
import GDPRCookie from "../home-1/GDPRCookie";
import RoomEight from "../room/RoomEight";
import AboutThree from "../karwar/About";
import BreadcrumbOne from "../breadcrumb/Breadcrumb";
import DiningSpecifics from "../events/DiningSpecifics";
import SpaGift from "./SpaGift";
import Signature from "./Signature";
import ResellingCallout from "./ResellingCallout";

function page() {
  // useEffect(() => {
  //     document.documentElement.setAttribute("data-theme", "dark");
  //     return () => {
  //         document.documentElement.removeAttribute("data-theme"); // Cleanup when leaving this page
  //     };

  // }, []);
  const venueData = [
    {
      id: 1,
      image: "/assets/images/pages/contact.webp",
      title: "Signature Therapies",
      description: "Relaxing and therapeutic massages designed to relieve stress, restore balance, and rejuvenate the body.",
    },
    {
      id: 2,
      image: "/assets/images/pages/contact.webp",
      title: "Rejuvenation Facilities",
      description: "Steam, sauna, and jacuzzi experiences crafted for deep relaxation, detoxification, and renewal.",
    },
    {
      id: 3,
      image: "/assets/images/pages/contact.webp",
      title: "Beauty & Grooming Studio",
      description: "Professional hair, skin, nails, and makeup services to enhance your natural elegance.",
    },
    {
      id: 4,
      image: "/assets/images/pages/contact.webp",
      title: "Skin & Body Rituals",
      description: "Rejuvenating facials, body scrubs, and polishing treatments to refresh and glow.",
    },
    {
      id: 5,
      image: "/assets/images/pages/contact.webp",
      title: "Hair & Scalp Care",
      description: "Specialized hair and scalp treatments for healthy and radiant hair.",
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
      {/* <TopBar /> */}
      <HeaderOne />
      <AboutThree />
      {/* <RoomEight /> */}
      <DiningSpecifics
        title="What to Expect"
        description="A thoughtfully curated wellness experience designed for complete relaxation and renewal."
        venueData={venueData}
      />
      <SpaGift />
      <Signature />
      <ResellingCallout />
      {/* <BannerVideo />
            <AdvanceForm /> */}
      {/* <AboutOne />
            <FacilitiesOne />
            <RoomOne className="pt-120" />
            <TestimonialOne />
            <VideoOne />
            <OfferOne /> */}

      {/* <BreadcrumbOne title="Our Blog" description="Discover The blog where luxury, comfort, and adventure come together." /> */}
      <FooterOne />
      <BackToTop />
    </>
  );
}

export default page;

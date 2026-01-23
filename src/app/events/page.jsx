import React from "react";
import TopBar from "../home-1/TopBar";
import HeaderOne from "../home-1/Header";
import BreadcrumbOne from "../breadcrumb/Breadcrumb";
import EventTwo from "./Event";
import DiningSpecifics from "./DiningSpecifics";
import SpecificAmenities from "./SpecificAmenities";
import CelebrationsList from "./CelebrationsList";
import NewsletterThree from "./Newsletter";
import ServiceSix from "./Service";
import FooterOne from "../home-1/FooterOne";
import BackToTop from "../home-1/BackToTop";
import GDPRCookie from "../home-1/GDPRCookie";
import GalleryOne from "../home-1/GalleryOne";
import TestimonialOne from "../home-1/TestimonialOne";
const testimonialData=[
  {
    "id": 1,
    "author": "IP Das",
    "designation": "",
    "review": "We went to Hotel Eden to organize a buffet party for friends and family. The staff was really helpful. The service was very nice during the event. The room is spacious and ACs were working and would definitely book again for a future event.",
    "img": "/assets/images/author/author-2x.webp",
    "rating": 5,
    "date": "2 months ago"
  },
  {
    "id": 2,
    "author": "Joseph Dias",
    "designation": "",
    "review": "We celebrated our daughter's first holy communion here in the hotel hall. The arrangements and food was on the mark and a special mention to the team for making this event a success",
    "img": "/assets/images/author/author-4.webp",
    "rating": 5,
    "date": "2 years ago"
  },
  {
    "id": 3,
    "author": "Akshat Nagar",
    "designation": "",
    "review": " It happened to celebrate my kid's first birthday at Eden. The venue was really good and the team took care of all the details and requirements. The food and the cake with its ",
    "img": "/assets/images/author/author-4.webp",
    "rating": 5,
    "date": "2 years ago"
  }
]

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
      {/* <TopBar /> */}
      <HeaderOne />
      <BreadcrumbOne
        title="A Destination for Your Finest Celebrations"
        description="Terminal 5 offers both an elegant indoor hall for intimate gatherings and a spacious open rooftop venue with stunning panoramic views of Karwar, making it ideal for everything from private celebrations to grand corporate events."
      />
      {/* <EventTwo /> */}
      <DiningSpecifics />
      {/* <SpecificAmenities /> */}
      <CelebrationsList />

      {/* <NewsletterThree /> */}
      <ServiceSix />
      <GalleryOne title={"Gallery"} description={"A glimpse of Terminal 5, where elegant indoor spaces and stunning rooftop views create unforgettable celebrations"}/>
      <TestimonialOne
              
               
                testimonials={testimonialData}
              />
      <FooterOne />
      <BackToTop />
    </>
  );
}

export default page;

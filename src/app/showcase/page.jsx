"use client";
import React, { Suspense } from "react";
import Link from "next/link";

// Home 1 Components
import Home1Header from "@/app/home-1/Header";
import Home1Footer from "@/app/home-1/FooterOne";
import Home1Banner from "@/app/home-1/Banner";
import Home1About from "@/app/home-1/About";
import Home1Facilities from "@/app/home-1/FacilitiesOne";
import Home1Gallery from "@/app/home-1/GalleryOne";
import Home1Offer from "@/app/home-1/OfferOne";
import Home1Video from "@/app/home-1/VideoOne";
import Home1Testimonial from "@/app/home-1/TestimonialOne";

// Home 2 Components
import Home2Banner from "@/app/home-2/Banner";
import Home2About from "@/app/home-2/About";
import Home2Facilities from "@/app/home-2/Facilities";
import Home2Room from "@/app/home-2/Room";
import Home2Gallery from "@/app/home-2/Gallery";
import Home2Offer from "@/app/home-2/Offer";
import Home2Video from "@/app/home-2/Video";
import Home2Testimonial from "@/app/home-2/Testimonial";

// Home 3 Components
import Home3Header from "@/app/home-3/Header";
import Home3Footer from "@/app/home-3/Footer";
import Home3Banner from "@/app/home-3/Banner";
import Home3About from "@/app/home-3/About";
import Home3Video from "@/app/home-3/Video";
import Home3Offer from "@/app/home-3/Offer";
import Home3Newsletter from "@/app/home-3/Newsletter";

// Home 4 Components
import Home4Banner from "@/app/home-4/Banner";
import Home4Facilities from "@/app/home-4/Facilities";
import Home4Footer from "@/app/home-4/Footer";
import Home4Gallery from "@/app/home-4/Gallery";
import Home4Header from "@/app/home-4/Header";
import Home4Service from "@/app/home-4/Service";
import Home4Testimonial from "@/app/home-4/Testimonial";
import Home4Video from "@/app/home-4/Video";
import Home4Apartment from "@/app/home-4/Apartment";

// Home 5 Components
import Home5Header from "@/app/home-5/Header";
import Home5Banner from "@/app/home-5/Banner";
import Home5About from "@/app/home-5/About";
import Home5Blog from "@/app/home-5/Blog";
import Home5Facilities from "@/app/home-5/Facilities";
import Home5Footer from "@/app/home-5/Footer";
import Home5Newsletter from "@/app/home-5/Newsletter";
import Home5Room from "@/app/home-5/Room";
import Home5Service from "@/app/home-5/Service";
import Home5Testimonial from "@/app/home-5/Testimonial";

// Home 6 Components
import Home6About from "@/app/home-6/About";
import Home6Banner from "@/app/home-6/Banner";
import Home6Facilities from "@/app/home-6/Facilities";
import Home6Footer from "@/app/home-6/Footer";
import Home6Offer from "@/app/home-6/Offer";
import Home6Room from "@/app/home-6/Room";
import Home6Service from "@/app/home-6/Service";
import Home6Testimonial from "@/app/home-6/Testimonial";

// Home 7 Components
import Home7About from "@/app/home-7/About";
import Home7Banner from "@/app/home-7/Banner";
import Home7Event from "@/app/home-7/Event";
import Home7Facilities from "@/app/home-7/Facilities";
import Home7Footer from "@/app/home-7/Footer";
import Home7Room from "@/app/home-7/Room";
import Home7Service from "@/app/home-7/Service";
import Home7Testimonial from "@/app/home-7/Testimonial";

// Common / Other Pages
import Contact from "@/app/contact/Contact";
import BlogOne from "@/app/blog/BlogOne";
import Activities from "@/app/activities/Activities";
import Event from "@/app/event/Event";
import Gallery from "@/app/gallery/Gallery";
import ServicePageService from "@/app/service/Service";
import ResturantAbout from "@/app/resturant/About";

// Error Boundary / Safe Wrapper for Components
const ComponentWrapper = ({ title, children }) => (
  <div className="border border-gray-300 rounded-lg p-6 my-8 shadow-sm">
    <h3 className="text-xl font-bold mb-4 text-primary underline">{title}</h3>
    <div className="bg-white relative overflow-hidden">
      <Suspense fallback={<div>Loading Component...</div>}>{children}</Suspense>
    </div>
  </div>
);

export default function ShowcasePage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">Component Showcase</h1>
      <p className="text-center mb-10">Displaying all available components from the project.</p>

      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Home 1 Components</h2>
          <ComponentWrapper title="Header (Home 1)">
            <Home1Header />
          </ComponentWrapper>
          <ComponentWrapper title="Banner (Home 1)">
            <Home1Banner />
          </ComponentWrapper>
          <ComponentWrapper title="About (Home 1)">
            <Home1About />
          </ComponentWrapper>
          <ComponentWrapper title="Facilities (Home 1)">
            <Home1Facilities />
          </ComponentWrapper>
          <ComponentWrapper title="Gallery (Home 1)">
            <Home1Gallery />
          </ComponentWrapper>
          <ComponentWrapper title="Offer (Home 1)">
            <Home1Offer />
          </ComponentWrapper>
          <ComponentWrapper title="Video (Home 1)">
            <Home1Video />
          </ComponentWrapper>
          <ComponentWrapper title="Testimonial (Home 1)">
            <Home1Testimonial />
          </ComponentWrapper>
          <ComponentWrapper title="Footer (Home 1)">
            <Home1Footer />
          </ComponentWrapper>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Home 2 Components</h2>
          <ComponentWrapper title="Banner (Home 2)">
            <Home2Banner />
          </ComponentWrapper>
          <ComponentWrapper title="About (Home 2)">
            <Home2About />
          </ComponentWrapper>
          <ComponentWrapper title="Facilities (Home 2)">
            <Home2Facilities />
          </ComponentWrapper>
          <ComponentWrapper title="Room (Home 2)">
            <Home2Room />
          </ComponentWrapper>
          <ComponentWrapper title="Gallery (Home 2)">
            <Home2Gallery />
          </ComponentWrapper>
          <ComponentWrapper title="Offer (Home 2)">
            <Home2Offer />
          </ComponentWrapper>
          <ComponentWrapper title="Video (Home 2)">
            <Home2Video />
          </ComponentWrapper>
          <ComponentWrapper title="Testimonial (Home 2)">
            <Home2Testimonial />
          </ComponentWrapper>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Home 3 Components</h2>
          <ComponentWrapper title="Header (Home 3)">
            <Home3Header />
          </ComponentWrapper>
          <ComponentWrapper title="Banner (Home 3)">
            <Home3Banner />
          </ComponentWrapper>
          <ComponentWrapper title="About (Home 3)">
            <Home3About />
          </ComponentWrapper>
          <ComponentWrapper title="Video (Home 3)">
            <Home3Video />
          </ComponentWrapper>
          <ComponentWrapper title="Offer (Home 3)">
            <Home3Offer />
          </ComponentWrapper>
          <ComponentWrapper title="Newsletter (Home 3)">
            <Home3Newsletter />
          </ComponentWrapper>
          <ComponentWrapper title="Footer (Home 3)">
            <Home3Footer />
          </ComponentWrapper>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Home 4 Components</h2>
          <ComponentWrapper title="Header (Home 4)">
            <Home4Header />
          </ComponentWrapper>
          <ComponentWrapper title="Banner (Home 4)">
            <Home4Banner />
          </ComponentWrapper>
          <ComponentWrapper title="Apartment (Home 4)">
            <Home4Apartment />
          </ComponentWrapper>
          {/* <ComponentWrapper title="About (Home 4)">
            <Home4About />
          </ComponentWrapper> */}
          <ComponentWrapper title="Service (Home 4)">
            <Home4Service />
          </ComponentWrapper>
          <ComponentWrapper title="Facilities (Home 4)">
            <Home4Facilities />
          </ComponentWrapper>
          <ComponentWrapper title="Gallery (Home 4)">
            <Home4Gallery />
          </ComponentWrapper>
          <ComponentWrapper title="Video (Home 4)">
            <Home4Video />
          </ComponentWrapper>
          <ComponentWrapper title="Testimonial (Home 4)">
            <Home4Testimonial />
          </ComponentWrapper>
          <ComponentWrapper title="Footer (Home 4)">
            <Home4Footer />
          </ComponentWrapper>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Home 5 Components</h2>
          <ComponentWrapper title="Header (Home 5)">
            <Home5Header />
          </ComponentWrapper>
          <ComponentWrapper title="Banner (Home 5)">
            <Home5Banner />
          </ComponentWrapper>
          <ComponentWrapper title="About (Home 5)">
            <Home5About />
          </ComponentWrapper>
          <ComponentWrapper title="Blog (Home 5)">
            <Home5Blog />
          </ComponentWrapper>
          <ComponentWrapper title="Facilities (Home 5)">
            <Home5Facilities />
          </ComponentWrapper>
          <ComponentWrapper title="Room (Home 5)">
            <Home5Room />
          </ComponentWrapper>
          <ComponentWrapper title="Service (Home 5)">
            <Home5Service />
          </ComponentWrapper>
          <ComponentWrapper title="Newsletter (Home 5)">
            <Home5Newsletter />
          </ComponentWrapper>
          <ComponentWrapper title="Testimonial (Home 5)">
            <Home5Testimonial />
          </ComponentWrapper>
          <ComponentWrapper title="Footer (Home 5)">
            <Home5Footer />
          </ComponentWrapper>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Home 6 Components</h2>
          <ComponentWrapper title="Banner (Home 6)">
            <Home6Banner />
          </ComponentWrapper>
          <ComponentWrapper title="About (Home 6)">
            <Home6About />
          </ComponentWrapper>
          <ComponentWrapper title="Facilities (Home 6)">
            <Home6Facilities />
          </ComponentWrapper>
          <ComponentWrapper title="Room (Home 6)">
            <Home6Room />
          </ComponentWrapper>
          <ComponentWrapper title="Service (Home 6)">
            <Home6Service />
          </ComponentWrapper>
          <ComponentWrapper title="Offer (Home 6)">
            <Home6Offer />
          </ComponentWrapper>
          <ComponentWrapper title="Testimonial (Home 6)">
            <Home6Testimonial />
          </ComponentWrapper>
          <ComponentWrapper title="Footer (Home 6)">
            <Home6Footer />
          </ComponentWrapper>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Home 7 Components</h2>
          <ComponentWrapper title="Banner (Home 7)">
            <Home7Banner />
          </ComponentWrapper>
          <ComponentWrapper title="About (Home 7)">
            <Home7About />
          </ComponentWrapper>
          <ComponentWrapper title="Facilities (Home 7)">
            <Home7Facilities />
          </ComponentWrapper>
          <ComponentWrapper title="Room (Home 7)">
            <Home7Room />
          </ComponentWrapper>
          <ComponentWrapper title="Service (Home 7)">
            <Home7Service />
          </ComponentWrapper>
          <ComponentWrapper title="Event (Home 7)">
            <Home7Event />
          </ComponentWrapper>
          <ComponentWrapper title="Testimonial (Home 7)">
            <Home7Testimonial />
          </ComponentWrapper>
          <ComponentWrapper title="Footer (Home 7)">
            <Home7Footer />
          </ComponentWrapper>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Common / Other Pages</h2>
          <ComponentWrapper title="Contact Page Component">
            <Contact />
          </ComponentWrapper>
          <ComponentWrapper title="Blog One">
            <BlogOne />
          </ComponentWrapper>
          <ComponentWrapper title="Activities">
            <Activities />
          </ComponentWrapper>
          <ComponentWrapper title="Event">
            <Event />
          </ComponentWrapper>
          <ComponentWrapper title="Gallery Page">
            <Gallery />
          </ComponentWrapper>
          <ComponentWrapper title="Services Page">
            <ServicePageService />
          </ComponentWrapper>
          <ComponentWrapper title="Restaurant About">
            <ResturantAbout />
          </ComponentWrapper>
        </section>
      </div>
    </div>
  );
}

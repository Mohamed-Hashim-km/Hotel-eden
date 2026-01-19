"use client";
import React, { Suspense, useState } from "react";
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
import Home1AdvanceForm from "@/app/home-1/AdvanceForm";
import Home1Modal from "@/app/home-1/Modal";
import Home1OffcanvasMenu from "@/app/home-1/OffcanvasMenu";
import Home1RoomOne from "@/app/home-1/RoomOne"; // Distinct from room/RoomOne
import Home1TopBar from "@/app/home-1/TopBar";
import Home1GDPR from "@/app/home-1/GDPRCookie";

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
import Home4Blog from "@/app/home-4/Blog";

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

// Home Dark & Video
import HomeDarkHeader from "@/app/home-dark/Header";
import HomeVideoBanner from "@/app/home-video/Banner";

// About Components
import AboutFacilities from "@/app/about/Facilities";
import AboutTeam from "@/app/about/Team";

// Blog Components
import BlogOne from "@/app/blog/BlogOne";
import BlogDetailsMain from "@/app/blog/BlogDetailsMain";
import BlogInner from "@/app/blog/BlogInner";
import BlogThree from "@/app/blog/BlogThree";
import BlogTwo from "@/app/blog/BlogTwo";
import BlogPostFour from "@/app/blog/PostFour";
import BlogPostOne from "@/app/blog/PostOne";
import BlogPostThree from "@/app/blog/PostThree";
import BlogPostTwo from "@/app/blog/PostTwo";
import PagesBlogBanner from "@/app/pages/components/blog-details/BlogBanner";

// Contact Components
import Contact from "@/app/contact/Contact";

// Event Components
import Event from "@/app/event/Event";
import EventNewsletter from "@/app/event/Newsletter";
import EventService from "@/app/event/Service";

// Gallery Components
import Gallery from "@/app/gallery/Gallery";

// Service Components
import ServicePageService from "@/app/service/Service";

// Restaurant Components
import ResturantAbout from "@/app/resturant/About";
import ResturantFoodMenu from "@/app/resturant/FoodMenu";
import ResturantGallery from "@/app/resturant/Gallery";

// Room Components
import RoomCardOne from "@/app/room/RoomCardOne";
import RoomCardTwo from "@/app/room/RoomCardTwo";
import RoomCardThree from "@/app/room/RoomCardThree";
import RoomCardFour from "@/app/room/RoomCardFour";
import RoomCardFive from "@/app/room/RoomCardFive";
import RoomCardSix from "@/app/room/RoomCardSix";
import RoomOne from "@/app/room/RoomOne";
import RoomTwo from "@/app/room/RoomTwo";
import RoomThree from "@/app/room/RoomThree";
import RoomFour from "@/app/room/RoomFour";
import RoomFive from "@/app/room/RoomFive";
import RoomSix from "@/app/room/RoomSix";
import RoomSeven from "@/app/room/RoomSeven";
import RoomEight from "@/app/room/RoomEight";
import RoomNine from "@/app/room/RoomNine";

// Activities
import Activities from "@/app/activities/Activities";

// Form Components
import FormAdvanceForm from "@/app/form/AdvanceForm";
import FormAdvanceFormTwo from "@/app/form/AdvanceFormTwo";
import FormLoginForm from "@/app/form/LoginForm";
import FormSignUpForm from "@/app/form/SignUpForm";

// Helper Components
import Breadcrumb from "@/app/breadcrumb/Breadcrumb";

// Error Boundary / Safe Wrapper for Components
const ComponentWrapper = ({ title, children }) => (
  <div className="border border-gray-300 rounded-lg p-6 my-8 shadow-sm">
    <h3 className="text-xl font-bold mb-4 text-primary underline">{title}</h3>
    <div className="bg-white relative overflow-hidden text-black">
      <Suspense fallback={<div>Loading Component...</div>}>{children}</Suspense>
    </div>
  </div>
);

// Wrapper for Home 1 Modal
const Home1ModalWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-4">
      <button className="theme-btn btn-style" onClick={() => setIsOpen(true)}>
        Open Modal Demo
      </button>
      <Home1Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} imageSrc="/assets/images/items/modal-1.jpg" />
    </div>
  );
};

// Wrapper for Home 1 Offcanvas
const Home1OffcanvasWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-4">
      <button className="theme-btn btn-style" onClick={() => setIsOpen(true)}>
        Open Offcanvas Menu
      </button>
      <Home1OffcanvasMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default function ShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-10 text-center">Component Showcase</h1>
      <p className="text-center mb-10">Displaying various components from the project (including sub-components).</p>

      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Home 1 Components</h2>
          <ComponentWrapper title="Header (Home 1)">
            <Home1Header />
          </ComponentWrapper>
          <ComponentWrapper title="Top Bar (Home 1)">
            <Home1TopBar />
          </ComponentWrapper>
          <ComponentWrapper title="Offcanvas Menu (Home 1)">
            <Home1OffcanvasWrapper />
          </ComponentWrapper>
          <ComponentWrapper title="Banner (Home 1)">
            <Home1Banner />
          </ComponentWrapper>
          <ComponentWrapper title="Advance Form (Home 1)">
            <Home1AdvanceForm />
          </ComponentWrapper>
          <ComponentWrapper title="Room One (Home 1)">
            <Home1RoomOne />
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
          <ComponentWrapper title="Modal (Home 1)">
            <Home1ModalWrapper />
          </ComponentWrapper>
          <ComponentWrapper title="GDPR Cookie (Home 1)">
            <Home1GDPR />
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
          <ComponentWrapper title="Blog (Home 4)">
            <Home4Blog />
          </ComponentWrapper>
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
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Other Home Variants</h2>
          <ComponentWrapper title="Home Dark Header">
            <HomeDarkHeader />
          </ComponentWrapper>
          <ComponentWrapper title="Home Video Banner">
            <HomeVideoBanner />
          </ComponentWrapper>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">About Page Components</h2>
          <ComponentWrapper title="About Facilities">
            <AboutFacilities />
          </ComponentWrapper>
          <ComponentWrapper title="About Team">
            <AboutTeam />
          </ComponentWrapper>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Blog Components</h2>
          <ComponentWrapper title="Pages Blog Banner">
            <PagesBlogBanner />
          </ComponentWrapper>
          <ComponentWrapper title="Blog One">
            <BlogOne />
          </ComponentWrapper>
          <ComponentWrapper title="Blog Two">
            <BlogTwo />
          </ComponentWrapper>
          <ComponentWrapper title="Blog Three">
            <BlogThree />
          </ComponentWrapper>
          <ComponentWrapper title="Blog Details Main">
            <BlogDetailsMain id="1" />
          </ComponentWrapper>
          <ComponentWrapper title="Blog Inner">
            <BlogInner />
          </ComponentWrapper>
          <ComponentWrapper title="Post One (Card)">
            <BlogPostOne />
          </ComponentWrapper>
          <ComponentWrapper title="Post Two (Card)">
            <BlogPostTwo />
          </ComponentWrapper>
          <ComponentWrapper title="Post Three (Card)">
            <BlogPostThree />
          </ComponentWrapper>
          <ComponentWrapper title="Post Four (Card)">
            <BlogPostFour />
          </ComponentWrapper>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Event Components</h2>
          <ComponentWrapper title="Event">
            <Event />
          </ComponentWrapper>
          <ComponentWrapper title="Event Newsletter">
            <EventNewsletter />
          </ComponentWrapper>
          <ComponentWrapper title="Event Service">
            <EventService />
          </ComponentWrapper>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Restaurant Components</h2>
          <ComponentWrapper title="Restaurant About">
            <ResturantAbout />
          </ComponentWrapper>
          <ComponentWrapper title="Restaurant Food Menu">
            <ResturantFoodMenu />
          </ComponentWrapper>
          <ComponentWrapper title="Restaurant Gallery">
            <ResturantGallery />
          </ComponentWrapper>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Room Components (Cards & Sections)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ComponentWrapper title="Room Card One">
              <RoomCardOne />
            </ComponentWrapper>
            <ComponentWrapper title="Room Card Two">
              <RoomCardTwo />
            </ComponentWrapper>
            <ComponentWrapper title="Room Card Three">
              <RoomCardThree />
            </ComponentWrapper>
            <ComponentWrapper title="Room Card Four">
              <RoomCardFour />
            </ComponentWrapper>
            <ComponentWrapper title="Room Card Five">
              <RoomCardFive />
            </ComponentWrapper>
            <ComponentWrapper title="Room Card Six">
              <RoomCardSix />
            </ComponentWrapper>
          </div>

          <ComponentWrapper title="Room One Layout">
            <RoomOne />
          </ComponentWrapper>
          <ComponentWrapper title="Room Two Layout">
            <RoomTwo />
          </ComponentWrapper>
          <ComponentWrapper title="Room Three Layout">
            <RoomThree />
          </ComponentWrapper>
          <ComponentWrapper title="Room Four Layout">
            <RoomFour />
          </ComponentWrapper>
          <ComponentWrapper title="Room Five Layout">
            <RoomFive />
          </ComponentWrapper>
          <ComponentWrapper title="Room Six Layout">
            <RoomSix />
          </ComponentWrapper>
          <ComponentWrapper title="Room Seven Layout">
            <RoomSeven />
          </ComponentWrapper>
          <ComponentWrapper title="Room Eight Layout">
            <RoomEight />
          </ComponentWrapper>
          <ComponentWrapper title="Room Nine Layout">
            <RoomNine />
          </ComponentWrapper>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Form Components</h2>
          <ComponentWrapper title="Advance Form Two">
            <FormAdvanceFormTwo />
          </ComponentWrapper>
          <ComponentWrapper title="Login Form">
            <FormLoginForm />
          </ComponentWrapper>
          <ComponentWrapper title="Sign Up Form">
            <FormSignUpForm />
          </ComponentWrapper>
          {/* AdvanceForm from Form folder - duplicate name with Home1AdvanceForm? Rename import */}
          <ComponentWrapper title="Advance Form (Generic)">
            <FormAdvanceForm />
          </ComponentWrapper>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Other Components</h2>
          <ComponentWrapper title="Breadcrumb">
            <Breadcrumb title="Showcase Page" description="A showcase of all components" />
          </ComponentWrapper>
          <ComponentWrapper title="Contact Page Component">
            <Contact />
          </ComponentWrapper>
          <ComponentWrapper title="Activities">
            <Activities />
          </ComponentWrapper>
          <ComponentWrapper title="Gallery Page">
            <Gallery />
          </ComponentWrapper>
          <ComponentWrapper title="Services Page">
            <ServicePageService />
          </ComponentWrapper>
        </section>
      </div>
    </div>
  );
}

import GDPRCookie from "../home-1/GDPRCookie";
import HeaderOne from "../home-1/Header";

import Home5Blog from "../home-5/Blog";

import FaqHomeOne from "../home-1/FaqHomeOne";
import faqData from "../data/faqGokarana.json";
import NewsletterOne from "../rooms/premium-room/Newsletter";
import FooterOne from "../home-1/FooterOne";
import posts from "../data/gokarna.json";
import CommonAmenities from "../location/CommonAmenities";

import BannerFour from "./Banner";

// goakarna page
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
      <BannerFour />

      <Home5Blog
        title="Everything You’re Looking For"
        description="Discover the best of Gokarna’s beaches, spirituality and heritage all within easy reach of Eden Ember Castle."
        data={posts}
      />
      <CommonAmenities
        title="Common Amenities"
        subtitle=""
        description="Hotel Eden Castle Ember offers a range of thoughtfully curated facilities to make your visit effortless and enjoyable."
        amenities={[
          { title: "Power Backup" },
          { title: "24-hour security" },
          { title: "Air conditioning" },
          { title: "Bonfire" },
          { title: "CCTV in common areas" },
          { title: "Dining Area" },
          { title: "Family-friendly" },
          { title: "Underground Car Parking" },
          { title: "Free Wifi" },
          { title: "Recreational Areas" },
          { title: "Fully equipped Kitchen" },
          { title: "Indoor Games" },
          { title: "Local Experiences" },
          { title: "Long Stay Discounts" },
          { title: "Multilingual Host" },
          { title: "Private entrance" },
          { title: "Spa & wellness centre" },
          { title: "Swimming Pool" },
        ]}
      />
      <FaqHomeOne faqData={faqData} />

      <NewsletterOne />
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

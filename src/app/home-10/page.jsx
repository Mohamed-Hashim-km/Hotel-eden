'use client'

import TopBar from "../home-1/TopBar";
import HeaderOne from "../home-dark/Header";

import GalleryOne from "../home-1/GalleryOne";
import FooterOne from "../home-1/FooterOne";
import BackToTop from "../home-1/BackToTop";
import GDPRCookie from '../home-1/GDPRCookie';
import RoomEight from '../room/RoomEight';
import AboutThree from '../home-3/About';
import ServiceFive from "../service/Service";
function page() {
    // useEffect(() => {
    //     document.documentElement.setAttribute("data-theme", "dark");
    //     return () => {
    //         document.documentElement.removeAttribute("data-theme"); // Cleanup when leaving this page
    //     };

    // }, []);
    return (
        <>
            <GDPRCookie
                settings={{
                    title: "Accept Cookies & privacy",
                    message: "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches.",
                    expires: 90, // Cookie expiration in days
                }}
            />
            <TopBar />
            <HeaderOne />
            <AboutThree />
            {/* <RoomEight /> */}
            {/* <BannerVideo />
            <AdvanceForm /> */}
            {/* <AboutOne />
            <FacilitiesOne />
            <RoomOne className="pt-120" />
            <TestimonialOne />
            <VideoOne />
            <OfferOne /> */}
            {/* <GalleryOne /> */}
             <ServiceFive />
            <FooterOne />
            <BackToTop />
        </>
    )
}

export default page

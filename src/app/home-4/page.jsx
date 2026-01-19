import React from 'react'
import HeaderThree from './Header'
import BannerFour from './Banner'
import ApartmentOne from './Apartment'
import FacilitiesThree from './Facilities'
import TestimonialFour from './Testimonial'
import VideoFour from './Video'
import BlogOne from './Blog'
import GalleryThree from './Gallery'
import FooterThree from './Footer'
import ServiceOne from './Service'
import postsData from '../data/data-post.json';
import BackToTop from '../home-1/BackToTop'
import GDPRCookie from '../home-1/GDPRCookie'
import RoomSix from '../room/RoomSix'
import NewsletterOne from '../home-3/Newsletter'
import TopBar from '../home-1/TopBar'
import HeaderOne from '../home-1/Header'
import BannerOne from '../home-1/Banner'
import HeaderTwo from '../home-3/Header'
import Home5Blog from '../home-5/Blog'
import posts from '../data/gokarna.json'
import CommonAmenities from '../home-2/CommonAmenities'
import FaqHomeOne from '../home-1/FaqHomeOne'
import faqData from '../data/faqGokarana.json'
import FooterOne from '../home-1/FooterOne'

function page() {
    return (
        <>
            <GDPRCookie
                settings={{
                    title: "Accept Cookies & privacy",
                    message: "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches.",
                    expires: 90, // Cookie expiration in days
                }}
            />
         <HeaderTwo/>
                <BannerFour />
                <Home5Blog title="Everything You’re Looking For" description="Discover the best of Gokarna’s beaches, spirituality and heritage all within easy reach of Eden Ember Castle." data={posts}/>
           
           <CommonAmenities/>
           <FaqHomeOne faqData={faqData}/>
            {/* <ApartmentOne /> */}
            {/* <FacilitiesThree /> */}
            {/* <TestimonialFour />
            <VideoFour />
            <BlogOne posts={postsData} />
            <ServiceOne /> */}
            {/* <GalleryThree /> */}
            <NewsletterOne />
            <FooterOne />
            <BackToTop />
        </>
    )
}

export default page
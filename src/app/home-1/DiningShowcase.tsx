"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

interface DiningItem {
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface DiningShowcaseProps {
  data?: DiningItem[];
  title?: string;
  description?: string;
}

const DiningShowcase: React.FC<DiningShowcaseProps> = ({
  data,
  title,
  description,
}) => {
  const swiperRef = useRef<any>(null);

  const diningItems = data || [
    {
      title: "SHAMIANA",
      description: "Inspired by the celebratory tents and event spaces, Shamiana invites its guests to enjoy a diverse selection...",
      image: "/assets/images/insta/1.webp",
      link: "#",
    },
    {
      title: "HOUSE OF MING",
      description: "The first restaurant to introduce robust Sichuan and Cantonese flavours to India, House of Ming crafts...",
      image: "/assets/images/insta/2.webp",
      link: "#",
    },
    {
      title: "VARQ",
      description: "Experience the finest modern Indian cuisine in an atmosphere of refined elegance and traditional charm...",
      image: "/assets/images/insta/3.webp",
      link: "#",
    },
    {
      title: "MACHAN",
      description: "Presenting a delightful blend of earthy simplicity and urban sophistication, Machan invites its guests...",
      image: "/assets/images/insta/4.webp",
      link: "#",
    },
    {
      title: "GOLDEN DRAGON",
      description: "Experience the finest Asian cuisine in an atmosphere of refined elegance and traditional charm.",
      image: "/assets/images/insta/5.webp",
      link: "#",
    },
    {
      title: "SHAMIANA",
      description: "Inspired by the celebratory tents and event spaces, Shamiana invites its guests to enjoy a diverse selection...",
      image: "/assets/images/insta/1.webp",
      link: "#",
    },
    {
      title: "HOUSE OF MING",
      description: "The first restaurant to introduce robust Sichuan and Cantonese flavours to India, House of Ming crafts...",
      image: "/assets/images/insta/2.webp",
      link: "#",
    },
    {
      title: "VARQ",
      description: "Experience the finest modern Indian cuisine in an atmosphere of refined elegance and traditional charm...",
      image: "/assets/images/insta/3.webp",
      link: "#",
    },
    {
      title: "MACHAN",
      description: "Presenting a delightful blend of earthy simplicity and urban sophistication, Machan invites its guests...",
      image: "/assets/images/insta/4.webp",
      link: "#",
    },
    {
      title: "GOLDEN DRAGON",
      description: "Experience the finest Asian cuisine in an atmosphere of refined elegance and traditional charm.",
      image: "/assets/images/insta/5.webp",
      link: "#",
    },
  ];

  return (
    <div className="dining-showcase-section bg-white position-relative">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap");
      `}</style>

      {/* Header (Optional) */}
      {(title || description) && (
        <div className="container-fluid mb-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {title && <h2 className="section-title">{title}</h2>}
              {description && <p className="section-desc">{description}</p>}
            </div>
          </div>
        </div>
      )}

      {/* Full Width Slider */}
      <div className="full-width-slider">
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => {
            // Correct way to capture instance for buttons to work
            swiperRef.current = swiper;
          }}
          spaceBetween={15}
          slidesPerView={1.4}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { 
              slidesPerView: 3, 
              spaceBetween: 30,
              centeredSlides: true 
            },
            1600: { 
              slidesPerView: 3.5, 
              spaceBetween: 40,
              centeredSlides: true 
            },
          }}
          className="dining-swiper"
        >
          {diningItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="dining-card">
                <div className="image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="dining-image"
                  />
                  <div className="slide-overlay"></div>
                </div>
                <div className="content-container">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.description}</p>
                  <Link href={item.link || "#"} className="more-link">
                    MORE <span className="chevron">›</span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        {/* z-index raised to 100 to ensure they are clickable */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="nav-btn prev-btn"
          aria-label="Previous"
        >
          <FaChevronLeft size={16} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="nav-btn next-btn"
          aria-label="Next"
        >
          <FaChevronRight size={16} />
        </button>
      </div>

      <style jsx>{`
        .dining-showcase-section {
          padding: 60px 0;
          overflow: hidden;
          width: 100%;
        }

        .container-fluid {
          max-width: 100%;
          padding: 0 40px; 
        }

        .full-width-slider {
          width: 100%;
          position: relative;
        }

        :global(.dining-swiper .swiper-wrapper) {
            transition-timing-function: ease-out;
        }
        
        @media (min-width: 1024px) {
           :global(.dining-swiper .swiper-wrapper) {
              /* Shifts the grid to create the off-center strip look */
              transform: translateX(-16%) !important; 
           }
        }

        .dining-swiper {
          padding-bottom: 50px;
          overflow: visible !important; 
        }

        .dining-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          height: 100%;
          opacity: 0.5;
          transition: opacity 0.4s ease, transform 0.4s ease;
          transform: scale(0.95);
        }

        /* Active Slide Styling */
        :global(.swiper-slide-active .dining-card),
        :global(.swiper-slide-next .dining-card) { 
           opacity: 1;
           transform: scale(1);
        }

        .image-container {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          position: relative;
          margin-bottom: 25px;
        }

        .dining-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .dining-card:hover .dining-image {
          transform: scale(1.08);
        }

        .content-container {
          padding: 0 10px;
          text-align: left;
        }

        .card-title {
          font-family: "Playfair Display", serif;
          font-weight: 400;
          font-size: 24px;
          color: #111;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .card-desc {
          font-family: "Helvetica Neue", sans-serif;
          font-size: 14px;
          color: #666;
          line-height: 1.7;
          margin-bottom: 25px;
          font-weight: 300;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .more-link {
          font-size: 12px;
          color: #b59451;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 2px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
        }
        
        .more-link:hover {
          color: #8a6d3b;
        }

        .chevron {
          font-size: 18px;
          margin-left: 5px;
          margin-top: -3px;
        }

        /* --- NAVIGATION BUTTONS --- */
        .nav-btn {
          position: absolute;
          top: 35%; 
          transform: translateY(-50%);
          width: 55px;
          height: 55px;
          background-color: #fff;
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 100; /* High z-index to ensure clickability */
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          color: #333;
          transition: all 0.3s ease;
        }

        .nav-btn:hover {
          background-color: #b59451;
          color: #fff;
          border-color: #b59451;
        }

        /* Mobile / Tablet Default */
        .prev-btn { left: 15px; }
        .next-btn { right: 15px; }

        @media (max-width: 768px) {
          .nav-btn {
            width: 40px;
            height: 40px;
            top: 30%;
          }
        }

        /* Desktop Alignment */
        @media (min-width: 1024px) {
          .prev-btn {
            /* Adjusted to 17.5% to align closer to the inner 2nd card edge */
            left: 17.5%; 
            transform: translate(-50%, -50%); 
          }
          
          .next-btn {
            /* Adjusted to 17.5% from right to align closer to the inner 3rd card edge */
            right: 17.5%; 
            transform: translate(50%, -50%); 
          }
        }
      `}</style>
    </div>
  );
};

export default DiningShowcase;
"use client";

import React from "react";
import Link from "next/link";
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
];

const PopularFacilities = () => {
  return (
    <div className="rts__section section__padding bg-light">
      <div className="container">
        <div className="row justify-content-center text-center mb-50">
          <div className="col-lg-12">
            <h2 className="title h2 mb-20">Popular Facilities</h2>
            <p className="description">Explore the most loved facilities offered by our property.</p>
          </div>
        </div>

        <div className="row g-4 mb-50">
          {facilities.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div className="d-flex align-items-center gap-3">
                <span className="fs-4 text-dark">{item.icon}</span>
                <span className="fw-medium text-dark">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="row justify-content-center">
          <div className="col-auto">
            <Link href="#" className="theme-btn btn-style fill no-border d-flex align-items-center gap-2">
              <span>All Facilities</span>
              
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PopularFacilities;

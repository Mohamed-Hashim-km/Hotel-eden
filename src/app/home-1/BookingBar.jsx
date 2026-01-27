"use client";
import React, { useState, useRef, useEffect, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingBar = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Location States
  const [location, setLocation] = useState("Eden Ember Castle Gokarna");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const locationRef = useRef(null);

  const locations = ["Eden Ember Castle Gokarna", "Hotel Eden Karwar"];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setIsLocationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Counter handlers
  const handleAdultsChange = (operation) => {
    if (operation === "inc") setAdults(adults + 1);
    else if (operation === "dec" && adults > 1) setAdults(adults - 1);
  };

  const handleChildrenChange = (operation) => {
    if (operation === "inc") setChildren(children + 1);
    else if (operation === "dec" && children > 0) setChildren(children - 1);
  };

  // Styles
  const labelStyle = {
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "0.5px",
    marginBottom: "8px",
    display: "block",
  };

  const inputContainerStyle = {
    borderBottom: "1px solid #E6E6E6",
    paddingBottom: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "40px",
    width: "100%",
    position: "relative",
  };

  const textStyle = {
    fontSize: "14px",
    color: "#333",
    fontWeight: "500",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    fontFamily: "var(--font-geist-sans, sans-serif)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "90%",
  };

  const counterBtnStyle = {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    border: "1px solid #eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontSize: "14px",
    color: "#777",
  };

  // Dropdown Styles
  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    minWidth: "220px",
    backgroundColor: "#fff",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    zIndex: 100,
    marginTop: "5px",
    padding: "5px 0",
    borderRadius: "4px",
    border: "1px solid #eee",
  };

  const dropdownItemStyle = {
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "13px",
    color: "#333",
    transition: "background 0.2s",
    textTransform: "uppercase",
    fontWeight: "500",
  };

  // Custom Date Input
  const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
    <div
      onClick={onClick}
      ref={ref}
      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}
    >
      <span style={textStyle}>{value || "SELECT DATES"}</span>
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5 5L9 1" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  ));
  CustomDateInput.displayName = "CustomDateInput";

  return (
    <div
      className="booking-bar-wrapper"
      style={{
        backgroundColor: "#fff",
        padding: "30px 40px",
        boxShadow: "0px 10px 40px rgba(0,0,0,0.05)",
        marginTop: "40px",
        position: "relative",
        zIndex: 10,
        borderRadius: "0px",
      }}
    >
      <div className="row g-4 align-items-end">
        {/* Location Section */}
        <div className="col-lg-3 col-md-6">
          <div className="booking-field" ref={locationRef}>
            <label className="text-uppercase content__title" style={{ ...labelStyle, color: "inherit" }}>
              Location
            </label>
            <div style={{ ...inputContainerStyle, cursor: "pointer" }} onClick={() => setIsLocationOpen(!isLocationOpen)}>
              <span style={textStyle}>{location}</span>
              {/* SVG Icon for Dropdown */}
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: isLocationOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  marginLeft: "auto",
                }}
              >
                <path d="M1 1L5 5L9 1" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {isLocationOpen && (
                <div style={dropdownStyle}>
                  {locations.map((loc, index) => (
                    <div
                      key={index}
                      style={dropdownItemStyle}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLocation(loc);
                        setIsLocationOpen(false);
                      }}
                      onMouseEnter={(e) => (e.target.style.background = "#f9f9f9")}
                      onMouseLeave={(e) => (e.target.style.background = "transparent")}
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Check In/Out Section */}
        <div className="col-lg-3 col-md-6">
          <div className="booking-field">
            <label className="text-uppercase content__title" style={{ ...labelStyle, color: "inherit" }}>
              Check-in/Check-out
            </label>
            <div style={inputContainerStyle}>
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                placeholderText="SELECT DATES"
                className="border-0 p-0 w-100"
                dateFormat="dd MMM yyyy"
                wrapperClassName="w-100"
                customInput={<CustomDateInput />}
              />
            </div>
          </div>
        </div>

        {/* Adults & Children Section */}
        <div className="col-lg-3 col-md-6">
          <div className="row g-0">
            {/* Adults */}
            <div className="col-6 pe-3">
              <label className="text-uppercase content__title" style={{ ...labelStyle, color: "inherit" }}>
                Adults
              </label>
              <div style={{ ...inputContainerStyle, justifyContent: "flex-start", gap: "10px" }}>
                <button onClick={() => handleAdultsChange("dec")} style={counterBtnStyle}>
                  &minus;
                </button>
                <span style={{ ...textStyle, minWidth: "15px", textAlign: "center", color: "#333" }}>{adults}</span>
                <button onClick={() => handleAdultsChange("inc")} style={counterBtnStyle}>
                  &#43;
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="col-6 ps-2">
              <label className="text-uppercase content__title" style={{ ...labelStyle, color: "inherit" }}>
                Children
              </label>
              <div style={{ ...inputContainerStyle, justifyContent: "flex-start", gap: "10px" }}>
                <button onClick={() => handleChildrenChange("dec")} style={counterBtnStyle}>
                  &minus;
                </button>
                <span style={{ ...textStyle, minWidth: "15px", textAlign: "center", color: "#333" }}>{children}</span>
                <button onClick={() => handleChildrenChange("inc")} style={counterBtnStyle}>
                  &#43;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Promo Code & Button Section */}
        <div className="col-lg-3 col-md-6">
          <div className="row g-0 align-items-end">
            {/* Promo Code */}
            <div className="col-5 pe-3">
              <label className="text-uppercase content__title" style={{ ...labelStyle, color: "inherit" }}>
                Promo Code
              </label>
              <div style={inputContainerStyle}>
                <input type="text" style={{ ...textStyle, border: "none", outline: "none", width: "100%", textTransform: "none" }} />
              </div>
            </div>

            {/* Button */}
            <div className="col-7">
              <button
                className="theme-btn btn-style sm-btn fill text-uppercase w-100"
                style={{
                  borderRadius: "0",
                  padding: "0",
                  height: "45px",
                  fontSize: "12px",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingBar;

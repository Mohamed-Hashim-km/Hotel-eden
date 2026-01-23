"use client";

import React from "react";
import Link from "next/link";

const PopularFacilities = ({ title, subtitle, description, facilities }) => {
  return (
    <div className="rts__section section__padding bg-light">
      <div className="container">
        <div className="row justify-content-center text-center mb-50">
          <div className="col-lg-8">
            <span className="h6 subtitle__icon__three mx-auto">{title}</span>
            {subtitle && <h2 className="title h2 mb-20">{subtitle}</h2>}
            <p className="description">{description}</p>
          </div>
        </div>

        {/* Flexbox Container */}
        <div className="d-flex flex-wrap gap-4 mb-50">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-center gap-3"
              // flex-grow: 1 fills space, flex-basis: 220px sets base width
              style={{ flex: "1 1 220px" }}
            >
              <span className="fs-4 text-dark">{item.icon}</span>
              <span className="fw-medium text-dark">{item.title}</span>
            </div>
          ))}

          {/* Spacers to prevent last row items from stretching too wide */}
          <div style={{ flex: "1 1 220px", height: "0" }}></div>
          <div style={{ flex: "1 1 220px", height: "0" }}></div>
          <div style={{ flex: "1 1 220px", height: "0" }}></div>
        </div>
      </div>
    </div>
  );
};

export default PopularFacilities;
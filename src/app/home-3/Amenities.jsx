"use client";

import React, { useState } from "react";
import faqData from "../data/faq.json";

const Amenities = () => {
  const [activeId, setActiveId] = useState(1);

  const toggleAccordion = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="rts__section section__padding">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center mb-50">
          <div className="col-lg-8 text-center wow fadeInUp" data-wow-delay=".3s">
            <h2 className="title h2 lh-1 mb-20 text-capitalize">Amenities</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
          </div>
        </div>

        {/* Accordion */}
        <div className="row justify-content-center">
          <div className="col-lg-10 wow fadeInUp" data-wow-delay=".5s">
            <div className="accordion-wrapper">
              {faqData.map((item, index) => {
                const numberFormatted = (index + 1).toString().padStart(2, "0");
                const isActive = activeId === item.id;

                return (
                  <div
                    key={item.id}
                    className={`accordion-item ${isActive ? "active" : ""} border-bottom pb-3 mb-3`}
                    onClick={() => toggleAccordion(item.id)}
                    style={{ cursor: "pointer", border: "none" }}
                  >
                    <div className="d-flex align-items-center justify-content-between py-3">
                      <div className="d-flex align-items-center gap-4">
                        <span className="h4 text-muted mb-0" style={{ minWidth: "40px" }}>
                          {numberFormatted}
                        </span>
                        <h5 className="accordion-title h5 mb-0 text-dark">{item.question}</h5>
                      </div>
                      <span className="icon h4 mb-0 text-muted fw-light">{isActive ? "×" : "+"}</span>
                    </div>

                    <div
                      className="accordion-body"
                      style={{
                        maxHeight: isActive ? "200px" : "0",
                        opacity: isActive ? 1 : 0,
                        overflow: "hidden",
                        transition: "all 0.3s ease-in-out",
                        paddingLeft: "70px", // Align with title
                      }}
                    >
                      <p className="faq-answer mt-2 text-muted">{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;

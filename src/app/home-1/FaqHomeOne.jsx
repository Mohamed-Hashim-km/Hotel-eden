"use client";

import React, { useState } from "react";

const FaqHomeOne = ({ faqData, title, description }) => {
  const [activeId, setActiveId] = useState(1);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="rts__section section__padding">
      <div className="container">
        <div className="row">
          {/* Left Side: Title and Description */}
          <div className="col-lg-5 mb-4 mb-lg-0 wow fadeInUp" data-wow-delay=".3s">
            <div className="faq__content__left">
              <h2 className="title h2 lh-sm mb-20 text-capitalize">{title || "Frequently Asked Questions"}</h2>
              <p className="description">
                {description || "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sitoler aliquam sit nullam."}
              </p>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="col-lg-7 wow fadeInUp" data-wow-delay=".5s">
            <div className="faq__accordion">
              {faqData.map((item) => (
                <div key={item.id} className={`accordion-item border rounded-3 mb-3 overflow-hidden ${activeId === item.id ? "active" : ""}`}>
                  <div
                    className="accordion-header p-4 d-flex justify-content-between align-items-center cursor-pointer"
                    onClick={() => toggleAccordion(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <h6 className="mb-0 text-dark fw-bold">{item.question}</h6>
                    <span className="icon">
                      {activeId === item.id ? (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L13 13M1 13L13 1" stroke="#5d6d8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 1V13M1 7H13" stroke="#5d6d8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </div>

                  {activeId === item.id && (
                    <div className="accordion-body px-4 pb-4">
                      <p className="mb-0 text-muted">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqHomeOne;

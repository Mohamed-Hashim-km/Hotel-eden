"use client";

import React, { useState } from "react";
import faqData from "../data/faq.json";

const Amenities = () => {
  const [activeId, setActiveId] = useState(1);

  const toggleAccordion = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="relative py-[70px] lg:py-[60px] md:py-[50px]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-wrap justify-center mb-[50px]">
          <div className="w-full lg:w-8/12 text-center wow fadeInUp" data-wow-delay=".3s">
            <h2 className="text-h2 leading-none mb-5 text-gray-900 capitalize">Amenities</h2>
            <p className="text-rts-para">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
          </div>
        </div>

        {/* Accordion */}
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-10/12 wow fadeInUp" data-wow-delay=".5s">
            <div className="w-full">
              {faqData.map((item, index) => {
                const numberFormatted = (index + 1).toString().padStart(2, "0");
                const isActive = activeId === item.id;

                return (
                  <div
                    key={item.id}
                    className={`border-b border-gray-200 pb-3 mb-3 ${isActive ? "active" : ""}`} // "active" might be used by JS elsewhere or just styling, keeping it for now but styling handled by state
                    onClick={() => toggleAccordion(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-4">
                        <span className="text-h4 text-gray-500 mb-0" style={{ minWidth: "40px" }}>
                          {numberFormatted}
                        </span>
                        <h5 className="text-h5 mb-0 text-gray-900">{item.question}</h5>
                      </div>
                      <span className="text-h4 mb-0 text-gray-500 font-light">{isActive ? "×" : "+"}</span>
                    </div>

                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out pl-[70px]"
                      style={{
                        maxHeight: isActive ? "200px" : "0",
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      <p className="mt-2 text-gray-500">{item.answer}</p>
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

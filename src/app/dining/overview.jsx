"use client";
import React, { useState } from "react";
import Image from "next/image";

const overviewData = {
  tulip: [
    { id: 1, title: "Dish #1", image: "/assets/images/gallery/01.jpg" },
    { id: 2, title: "Dish #2", image: "/assets/images/gallery/02.jpg" },
    { id: 3, title: "Dish #3", image: "/assets/images/gallery/03.jpg" },
  ],
  oyster: [
    { id: 1, title: "Seafood #1", image: "/assets/images/gallery/05.jpg" },
    { id: 2, title: "Seafood #2", image: "/assets/images/gallery/06.jpg" },
    { id: 3, title: "Seafood #3", image: "/assets/images/gallery/01.jpg" },
  ],
  forest: [
    { id: 1, title: "Nature #1", image: "/assets/images/gallery/03.jpg" },
    { id: 2, title: "Nature #2", image: "/assets/images/gallery/04.jpg" },
    { id: 3, title: "Nature #3", image: "/assets/images/gallery/05.jpg" },
  ],
};

function Overview() {
  const [activeTab, setActiveTab] = useState("tulip");

  return (
    <div className="rts__section section__padding">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8  text-center wow fadeInUp">
            {/* <span className="h6 subtitle__icon__three d-block mb-3"></span> */}
            <h2 className="content__title h2 lh-1 mb-3">A World of Dining </h2>
            <p className="max-w-600 mx-auto">Discover diverse flavours and memorable dining experiences across our signature restaurants.</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="row justify-content-center wow fadeInUp" data-wow-delay=".2s">
          <div className="col-lg-12">
            <ul className="nav nav-tabs nav-justified border-bottom-0 w-100 mb-5" style={{ borderBottom: "1px solid #E6E8EC" }}>
              {["tulip", "oyster", "forest"].map((tab) => (
                <li className="nav-item" key={tab}>
                  <button
                    className={`nav-link border-0 bg-transparent pb-3 fw-bold  position-relative w-100 ${activeTab === tab ? "text-dark" : "text-muted"}`}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      fontSize: "18px",
                      letterSpacing: "1px",
                      color: activeTab === tab ? "#1F2937" : "#9CA3AF",
                    }}
                  >
                    {tab === "tulip" ? "Tulip" : tab === "oyster" ? "Oyster Bay" : "Food & Forest"}
                    {activeTab === tab && (
                      <span className="position-absolute bottom-0 start-0 w-100" style={{ height: "2px", backgroundColor: "#5D6D7E" }} />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="row g-4 wow fadeInUp" data-wow-delay=".4s">
          {overviewData[activeTab].map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <div className="position-relative overflow-hidden rounded-3" style={{ height: "450px" }}>
                <div className="position-absolute w-100 h-100">
                  {/* Placeholder for Image */}
                  <div
                    className="w-100 h-100"
                    style={{
                      background: "#8a9ab1",
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  {/* Gradient Overlay */}
                  <div
                    className="position-absolute bottom-0 start-0 w-100 h-100"
                    style={{
                      background: "linear-gradient(to top, rgba(30, 39, 56, 0.9) 0%, rgba(30, 39, 56, 0.4) 50%, transparent 100%)",
                    }}
                  ></div>
                </div>
                <div className="position-absolute text-start p-4 w-100" style={{ top: "20%" }}>
                  {/* Image Icon Placeholder - matching the "icon" in the design reference if needed, otherwise just text */}
                  <h3 className="text-white fw-bold mb-0">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;

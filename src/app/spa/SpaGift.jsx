import Link from "next/link";
import React from "react";

const SpaGift = () => {
  return (
    <div className="rts__section section__padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="spa-gift-box text-center rounded-3 position-relative"
              style={{
                backgroundColor: "#636A7D",
                padding: "100px 20px",
              }}
            >
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className="section__title text-white mb-3">Gift a Spa Treatment</h2>
                  <p className="text-white mb-40 mx-auto" style={{ maxWidth: "600px" }}>
                    Turn your gift into an experience. From calming therapies to rejuvenating rituals, our spa treatments offer indulgence that lasts beyond the moment.
 </p>
                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link href="/room/the-ritz-carlton" className="theme-btn btn-style sm-btn fill">
                    <span>Get in touch</span>
                  </Link>
                    <Link
                      href="#"
                      className="theme-btn btn-style sm-btn"
                      style={{ border: "1px solid rgba(255,255,255,0.5)", background: "transparent", color: "white" }}
                    >
                      <span>Learn more</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaGift;

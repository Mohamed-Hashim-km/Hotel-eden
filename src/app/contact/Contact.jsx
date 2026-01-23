import React from "react";

function ContactOne() {
  return (
    <>
      {/* contact area */}
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-30 align-items-center">
            <div className="col-lg-6">
              <div className="rts__contact">
                <div className="mb-60">
                  <span className="h6 subtitle__icon__two d-block wow fadeInUp">Get in Touch</span>
                  <h2 className="content__title wow fadeInUp">Plan your Eden experience.</h2>
                </div>
                <div className="contact-info-block">
                  <div className="mb-4">
                    <span className="d-block  text-muted small mb-1">Call</span>
                    <a href="tel:+919686804784" className="h4 d-block text-dark">
                      +91 96868 04784
                    </a>
                  </div>
                  <div>
                    <span className="d-block text-muted small mb-1">Email</span>
                    <a href="mailto:info@padival-grand-hotel.com" className="h4 d-block text-dark">
                      info@padival-grand-hotel.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact__image">
                <img className="rounded-2 w-100 img-fluid" src="/assets/images/pages/contact.webp" width={645} height={560} alt="contact__image" />
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-120">
          <div className="row g-30 align-items-center">
            <div className="col-lg-6">
              <div className="contact__map">
                <iframe
                  className="w-100"
                  height={560}
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=phuket+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  title="Map showing the location of My Business"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact__info">
                <div className="contact__info__item">
                  <h4>Hotel Info Center</h4>
                  <p>
                    Open Hours: Monday – Sunday <br />
                    Telephone:&nbsp;+12505550199 <br />
                    Fax: +12505550199 <br />
                    Email:&nbsp;info@moonlit.com
                  </p>
                </div>
                <div className="contact__info__item">
                  <h4>Hotel location</h4>
                  <p>
                    Address: The Ritz-Carlton (California, USA) <br />
                    Telephone:&nbsp;+12505550199 <br />
                    Fax: +12505550199 <br />
                    Email:&nbsp;info@moonlit.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact area end */}
    </>
  );
}

export default ContactOne;

import Link from "next/link";
import React from "react";

function NewsletterOne() {
  return (
    <>
      {/* newsletter section */}
      <div className="relative py-[70px] lg:py-[60px] md:py-[50px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full text-center wow fadeInUp relative z-[1]">
              {/* is__separate usually means some spacing or bg, assuming separate section styling. 
                                 footer__newsletter is likely centering and spacing. 
                                 Checking style.css output would refine this, but basic layout: */}
              <span className="text-h4 mb-0 block leading-tight text-rts-heading font-gilda">
                Your perfect stay in Karwar is <br className="" /> just a moment away.
              </span>
              <Link
                href="/room/the-ritz-carlton"
                className="inline-block mt-[30px] bg-transparent border border-btn-1 text-btn-1 px-[30px] py-[14px] rounded-[5px] uppercase font-medium tracking-wide hover:bg-btn-1 hover:text-white transition-all duration-300"
              >
                <span>Book Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* newsletter section end */}
    </>
  );
}

export default NewsletterOne;

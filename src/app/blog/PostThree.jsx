import Link from "next/link";
import React from "react";

function PostThree(props) {
  const { Slug, Img, Title, Category, Author, AuthorImg, Description } = props;
  return (
    <>
      <div className="relative rounded-[10px] bg-white shadow-md overflow-hidden h-full flex flex-col group">
        <div className="relative overflow-hidden">
          <Link href={`/blog/${Slug || "details"}`} className="block overflow-hidden">
            <img
              className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
              src={Img || "/assets/images/pages/blog/1.webp"}
              alt=""
            />
          </Link>
        </div>
        <div className="flex-grow flex flex-col items-start p-[30px]">
          <Link href="#" className="text-sm font-medium text-btn-1 mb-2.5 uppercase tracking-wider hover:text-rts-heading transition-colors">
            {Category || "Urban Oasis Living"}
          </Link>
          {Title && <h6 className="text-h6 text-rts-heading mb-4 hover:text-btn-1 transition-colors">{Title}</h6>}
          <p className="text-rts-para mb-[30px]">
            {/* Using dangerouslySetInnerHTML if description contains HTML, otherwise just render */}
            {Description ||
              "Why I say old chap that is spiffing in my flat such a fibber mufty mush, porkies barney pukka only a quid a what a load of rubbish good time."}
          </p>
          <div className="mt-auto">
            <button className="inline-block bg-btn-1 border border-btn-1 text-white px-[25px] py-[12px] rounded-[5px] uppercase font-medium tracking-wide hover:bg-transparent hover:text-btn-1 transition-all duration-300">
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostThree;

import React from "react";
import PostThree from "../blog/PostThree";
import posts from "../data/data-post.json";

/**
 * @param {Object} props
 * @param {any} props.data
 * @param {string} [props.title]
 * @param {string} [props.description]
 */
function BlogTwo({ data, title, description }) {
  return (
    <>
      {/* blog style */}
      <div className="relative py-[70px] lg:py-[60px] md:py-[50px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-10">
            <div className="w-full lg:w-1/2 wow fadeInUp" data-wow-delay=".3s">
              <div className="mb-5">
                {title && <span className="text-h6 text-rts-heading block mb-[10px] relative inline-block">{title}</span>}
                {description && <p className="text-h2 font-gilda text-rts-heading">{description}</p>}
              </div>
            </div>
          </div>
          {/* row end */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
            {(data || posts).map((post, index) => {
              return (
                <div key={index} className="w-full">
                  {
                    <PostThree
                      Slug={post.slug}
                      Title={post.title}
                      Img={post.image}
                      Category={post.category}
                      AuthorImg={post.authorImg}
                      Author={post.author}
                      Description={post.description}
                    />
                  }
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* blog style end */}
    </>
  );
}

export default BlogTwo;

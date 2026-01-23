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
      <div className="rts__section blog is__home__three section__padding">
        <div className="container">
          <div className="row justify-content-center text-center mb-40">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="section__topbar">
              { title && <span className="h6 subtitle__icon__three mx-auto">{title}</span>}
               { description && <p className="section__title">{description}</p>}
              </div>
            </div>
          </div>
          {/* row end */}
          <div className="row g-30">
            {(data || posts).map((data, index) => {
              return (
                <div key={index} className="col-lg-6 col-xl-4 col-md-6">
                  {
                    <PostThree
                      Slug={data.slug}
                      Title={data.title}
                      Img={data.image}
                      Category={data.category}
                      AuthorImg={data.authorImg}
                      Author={data.author}
                      Description={data.description}
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

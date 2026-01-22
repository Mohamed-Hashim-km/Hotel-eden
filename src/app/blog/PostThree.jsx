import Link from "next/link";
import React from "react";

function PostThree(props) {
  const { Slug, Img, Title, Category, Author, AuthorImg, Description } = props;
  return (
    <>
      <div className="blog__item is__has__radius h-100 d-flex flex-column">
        <div className="blog__item__thumb">
          <Link href={`${Slug || "details"}`}>
            <img height={250} width={360} src={Img || "/assets/images/pages/blog/1.webp"} alt="" />
          </Link>
        </div>
        <div className="blog__item__meta flex-grow-1 d-flex flex-column align-items-start">
         {Category && <Link href="#" className="blog__item__meta__cat">
            {Category}
          </Link>}
          {Title && <h6>{Title}</h6>}
         {Description && <p className="blog__item__meta__description">
            {Description }  </p>}
          <div className="mt-auto">
            <Link href={`${Slug || "details"}`}><button className="theme-btn btn-style sm-btn fill">
              <span>Learn More</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostThree;

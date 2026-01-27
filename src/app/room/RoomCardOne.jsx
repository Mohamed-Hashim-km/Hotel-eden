import Link from 'next/link';
import React from 'react'

function RoomCardOne(props) {
    const {
        Slug,
        Img,
        Title,
        Price,
        Description
    } = props;
    return (
      <Link href={`/rooms/${Slug}`}>
      <div className="room__slide__box radius-6">
            <div className="room__thumbnail jara-mask-2 jarallax">
                <img
                    height={585}
                    width={420}
                    className="radius-6 jarallax-img"
                    src={Img || "/assets/images/pages/room/1.webp"}
                    alt=""
                />
            </div>
            <div className="room__content">
                <Link href={`/rooms/${Slug}`} className="room__title">
                    <h5>{Title}</h5>
                </Link>
                <div className="room__content__meta">
                    {/* <span>
                        <i className="flaticon-construction" /> 35 sqm
                    </span>
                    <span>
                        <i className="flaticon-user" />2 Person
                    </span> */}
                    <span>
                        {/* <i className="flaticon-user" /> */}
                        {Description}
                    </span>
                </div>
                {/* <span className="h4 rent mb-0 mt-15 d-block">{Price || '120$'}</span> */}
            </div>
        </div>
      </Link>
    )
}

export default RoomCardOne
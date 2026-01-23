import Link from 'next/link'
import React from 'react'

function NewsletterOne({title=<>Your perfect stay in Karwar is <br className=''/> just a moment away.</>}) {
    return (
        <>
            {/* newsletter section */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row">
                        <div className="footer__newsletter is__separate wow fadeInUp">
                            <span className="h4 mb-0">{title}</span>
                              <Link href="/room/the-ritz-carlton" className="theme-btn btn-style sm-btn fill">
                                    <span>Book Now</span>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* newsletter section end */}
        </>

    )
}

export default NewsletterOne
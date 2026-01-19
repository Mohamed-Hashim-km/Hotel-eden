import React from 'react'

function NewsletterOne() {
    return (
        <>
            {/* newsletter section */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row">
                        <div className="footer__newsletter is__separate wow fadeInUp">
                            <span className="h2 mb-0">Your perfect stay in Karwar is just a moment away.</span>
                            <div className="rts__form">
                                <form action="#" method="post">
                                    <input
                                        type="email"
                                        name="email"
                                        id="subscription"
                                        placeholder="Enter your mail"
                                        required=""
                                    />
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* newsletter section end */}
        </>

    )
}

export default NewsletterOne
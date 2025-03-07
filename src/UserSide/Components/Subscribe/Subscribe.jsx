import pic from "../images/resource/business-booster-chart.jpg"

export default function  Subscribe(){


    return(
        <>
                <section className="boxcar-pricing-section-five">
            <div className="row g-0">
                {/* <!-- image-column --> */}
                <div className="image-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-column wow fadeInUp animated"
                        style={{visibility:"visible", animationName: "fadeInUp"}}>
                        <div className="image-box">
                            <figure className="image"><img src={pic} alt=""/></figure>
                        </div>
                    </div>
                </div>
                <div className="content-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-column wow fadeInUp animated" data-wow-delay="100ms"
                        style={{visibility: "visible", animationDelay:" 100ms", animationName: "fadeInUp"}}>
                        <div className="boxcar-title light">
                            <h2>Power Up Your Leads, Accelerate Your Growth!</h2>
                            <div className="text">Branding + Business = Look no further than Enggpro's Business Booster, the
                                ultimate
                                cost-effective solution for
                                turbocharging your business growth.</div>
                        </div>
                        <a href="#" className="read-more">Subscribe Now <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                height="14" viewBox="0 0 14 14" fill="none">
                                <g clip-path="url(#clip0_634_2156)">
                                    <path
                                        d="M13.6106 0H5.05509C4.84013 0 4.66619 0.173943 4.66619 0.388901C4.66619 0.603859 4.84013 0.777802 5.05509 0.777802H12.6719L0.113453 13.3362C-0.0384687 13.4881 -0.0384687 13.7342 0.113453 13.8861C0.189396 13.962 0.288927 14 0.388422 14C0.487917 14 0.587411 13.962 0.663391 13.8861L13.2218 1.3277V8.94447C13.2218 9.15943 13.3957 9.33337 13.6107 9.33337C13.8256 9.33337 13.9996 9.15943 13.9996 8.94447V0.388901C13.9995 0.173943 13.8256 0 13.6106 0Z"
                                        fill="white"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_634_2156">
                                        <rect width="14" height="14" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>


        {/* <!-- Fun Fact Section --> */}
        <section className="boxcar-fun-fact-section">
            <div className="large-container">
                <div className="fact-counter">
                    <div className="row">
                        {/* <!-- Counter block Two--> */}
                        <div className="counter-block col-lg-3 col-md-3 col-sm-4 wow fadeInUp">
                            <div className="inner wow fadeInUp">
                                <div className="content">
                                    <div className="widget-counter"><span className="count-text" data-speed="3000"
                                            data-stop="18000">0</span>+</div>
                                    <h6 className="counter-title">Global Suppliers</h6>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Counter block Two--> */}
                        <div className="counter-block col-lg-3 col-md-3 col-sm-4 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner wow fadeInUp" data-wow-delay="100ms">
                                <div className="content">
                                    <div className="widget-counter"><span className="count-text" data-speed="3000"
                                            data-stop="9000">0</span>+</div>
                                    <h6 className="counter-title">Buyers Database</h6>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Counter block Two--> */}
                        <div className="counter-block col-lg-3 col-md-3 col-sm-4 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner wow fadeInUp" data-wow-delay="200ms">
                                <div className="content">
                                    <div className="widget-counter"><span className="count-text" data-speed="3000"
                                            data-stop="2500">0</span>+</div>
                                    <h6 className="counter-title">Active RFQs</h6>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Counter block Two--> */}
                        <div className="counter-block col-lg-3 col-md-3 col-sm-4 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner wow fadeInUp" data-wow-delay="300ms">
                                <div className="content">
                                    <div className="widget-counter"><span className="count-text" data-speed="3000"
                                            data-stop="30">0</span>+</div>
                                    <h6 className="counter-title">Countries</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Fun Fact Section--> */}
        </>
    )
}
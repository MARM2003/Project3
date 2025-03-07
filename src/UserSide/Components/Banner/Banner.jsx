import React, { useState } from "react";
const Banner = () => {
   

    return (
        <>
             {/* <!-- BANNER SECTION --> */}
        <section className="boxcar-banner-section-v1">
            <div className="container">
                <div className="banner-content">
                    <span className="wow fadeInUp">Your Gateway to Verified B2B Engineering Leads</span>
                    <h2 className="wow fadeInUp" data-wow-delay="100ms">Find the Right Vendors, Instantly!</h2>
                    <div className="form-tabs">

                        <div className="form-tab-content">
                            <div className="form-tab-content wow fadeInUp" data-wow-delay="300ms">
                                <div className="form-tab-pane current" id="tab-1">
                                    <form>
                                        <div className="form_boxes line-r ">
                                            <input type="text" className="form-control mt-3"
                                                placeholder="Search by item, company or country"/>
                                        </div>

                                        <div className="form_boxes">

                                            <select className="form-control mt-3">
                                                <option>From the sectors</option>
                                                <option>Mechanical</option>
                                                <option>Piping</option>
                                                <option>Electrical</option>
                                                <option>Instrumentation</option>
                                                <option>Thermal</option>
                                                <option>Metal</option>
                                                <option>Structural</option>
                                                <option>Oil & Gas</option>
                                                <option>Marin</option>
                                                <option>Safety</option>
                                                <option>Engineering Services</option>
                                            </select>


                                        </div>
                                        <div className="form-submit">
                                            <button type="submit" className="theme-btn"><i
                                                    className="flaticon-search"></i>Search
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <ul className="model-links">
                                <li>
                                    <a href="#" title="">

                                        Valves
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="">

                                        Piping
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="">

                                        Gasket
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="">

                                        Flanges
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="">

                                        Cables
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- BANNER SECTION END -->                */}
        </>
    )

    
};

export default Banner;

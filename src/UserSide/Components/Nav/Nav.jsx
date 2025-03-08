import React, { useState } from "react";
import logo from "../images/logo.png";

const Header = () => {
    
    const [showMainCanvas, setShowMainCanvas] = useState(false);
    const [showSubCanvas, setShowSubCanvas] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleShowMainCanvas = () => setShowMainCanvas(true);
    const handleShowSubCanvas = (dropdown) => {
        setActiveDropdown(dropdown);
        setShowMainCanvas(false);
        setShowSubCanvas(true);
    };

    const handleBackToMain = () => {
        setShowSubCanvas(false);
        setShowMainCanvas(true);
    };

    const handleCloseMainCanvas = () => {
        setShowMainCanvas(false);
    };

    const handleCloseSubCanvas = () => {
        setShowSubCanvas(false);
    };

    return (
        <>
           {/* <!-- Main Header--> */}
        <header className="boxcar-header header-style-v1 header-default">
            <div className="header-inner">
                <div className="inner-container">
                    {/* <!-- Main box --> */}
                    <div className="c-box">
                        <div className="logo-inner">
                            <div className="logo"><a href="#"><img src={logo} alt="" title=""/></a>
                            </div>

                        </div>

                        {/* <!--Nav Box--> */}
                        <div className="nav-out-bar">
                            <nav className="nav main-menu">
                                <ul className="navigation" id="navbar">
                                    <li className="current-dropdown current"><span>Explore <span><i className="fa-solid fa-angle-down"></i></span></span>

                                        <ul className="dropdown">
                                            <li><a href="#">Mechanical</a></li>
                                            <li><a href="#">Piping</a></li>
                                            <li><a href="#">Electrical</a></li>
                                            <li><a href="#">Instrumentation</a></li>
                                            <li><a href="#">Thermal</a></li>
                                            <li><a href="#">Metal</a></li>
                                            <li><a href="#">Structural</a></li>
                                            <li><a href="#">Oil & Gas Exploration</a></li>
                                            <li><a href="#">Oil & Gas Production</a></li>
                                            <li><a href="#">Marine</a></li>
                                            <li><a href="#">Safety</a></li>
                                            <li><a href="#">Engineering Services</a></li>
                                            <li><a href="#">Explore All Vendors</a></li>
                                        </ul>
                                    </li>
                                    <li className="current-dropdown current"><span>For Buyers <span><i className="fa-solid fa-angle-down"></i></span></span>
                                        <ul className="dropdown">
                                            <li><a href="#">Register As A Buyer</a></li>
                                            <li><a href="#">Float RFQ</a></li>
                                        </ul>
                                    </li>
                                    <li className="current-dropdown current"><span>For Vendors <span><i className="fa-solid fa-angle-down"></i></span></span>
                                        <ul className="dropdown">
                                            <li><a href="#">Register As A Vendor</a></li>
                                            <li><a href="#">Business Leads</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Business Booster</a>
                                    </li>
                                </ul>
                            </nav>
                            {/* <!-- Main Menu End--> */}
                        </div>

                        <div className="right-box">
                            <a href="#" title="" className="box-account">
                                <span className="icon">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_147_6490)">
                                            <path
                                                d="M7.99998 9.01221C3.19258 9.01221 0.544983 11.2865 0.544983 15.4161C0.544983 15.7386 0.806389 16.0001 1.12892 16.0001H14.871C15.1935 16.0001 15.455 15.7386 15.455 15.4161C15.455 11.2867 12.8074 9.01221 7.99998 9.01221ZM1.73411 14.8322C1.9638 11.7445 4.06889 10.1801 7.99998 10.1801C11.9311 10.1801 14.0362 11.7445 14.2661 14.8322H1.73411Z"
                                                fill="white" />
                                            <path
                                                d="M7.99999 0C5.79171 0 4.12653 1.69869 4.12653 3.95116C4.12653 6.26959 5.86415 8.15553 7.99999 8.15553C10.1358 8.15553 11.8735 6.26959 11.8735 3.95134C11.8735 1.69869 10.2083 0 7.99999 0ZM7.99999 6.98784C6.50803 6.98784 5.2944 5.62569 5.2944 3.95134C5.2944 2.3385 6.43231 1.16788 7.99999 1.16788C9.54259 1.16788 10.7056 2.36438 10.7056 3.95134C10.7056 5.62569 9.49196 6.98784 7.99999 6.98784Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_147_6490">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                Sign in</a>
                            <div className="btn">
                                <a href="#" className="header-btn-two">Add Listing</a>
                            </div>
                            <div className="mobile-navigation">
                                <a href="#nav-mobile" title="" onClick={handleShowMainCanvas}>
                                    {/* <!-- <i className="fa fa-bars"></i> --> */}
                                    <svg width="22" height="11" viewBox="0 0 22 11" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="22" height="2" fill="white" />
                                        <rect y="9" width="22" height="2" fill="white" />
                                    </svg>

                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Mobile Menu  --> */}
                </div>
            </div>

            {/* <!-- Header Search --> */}
            {/* <div className="search-popup">
                <span className="search-back-drop"></span>
                <button className="close-search"><span className="fa fa-times"></span></button>

                <div className="search-inner">
                    <form method="post" action="#">
                        <div className="form-group">
                            <input type="search" name="search-field" value="" placeholder="Search..." required=""/>
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div> */}
            {/* <!-- End Header Search --> */}

            <div id="nav-mobile"></div>
        </header>
        {/* <!-- End header-section --> */}


        {/* Main Offcanvas */}
        <div className={`offcanvas offcanvas-start ${showMainCanvas ? "show" : ""}`} tabIndex="-1" id="offcanvasExample">
                <div className="offcanvas-body">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title">Menu</h5>
                        <button type="button" className="btn-close" onClick={handleCloseMainCanvas}></button>
                    </div>
                    <ul className="list-unstyled">
                        <li>
                            <a className="nav-link bg-primary bg-opacity-10 rounded-3 p-3 d-flex justify-content-between align-items-center text-dark fw-semibold"
                                onClick={() => handleShowSubCanvas("explore")}>
                                Explore
                                <span className="text-dark">&gt;</span>
                            </a>
                        </li>
                        <li className="mt-2">
                            <a className="nav-link bg-primary bg-opacity-10 rounded-3 p-3 d-flex justify-content-between align-items-center text-dark fw-semibold"
                                onClick={() => handleShowSubCanvas("buyers")}>
                                For Buyers
                                <span className="text-dark">&gt;</span>
                            </a>
                        </li>
                        <li className="mt-2">
                            <a className="nav-link bg-primary bg-opacity-10 rounded-3 p-3 d-flex justify-content-between align-items-center text-dark fw-semibold"
                                onClick={() => handleShowSubCanvas("vendors")}>
                                For Vendors
                                <span className="text-dark">&gt;</span>
                            </a>
                        </li>
                        <li className="mt-3">
                            <a className="nav-link text-dark fw-semibold" href="#">Business Booster</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            
            {/* Sub Offcanvas for Dropdowns */}
            <div className={`offcanvas offcanvas-start ${showSubCanvas ? "show" : ""}`} tabIndex="-1">
                <div className="offcanvas-header">
                <span className=" me-2" onClick={handleBackToMain}>
                <i class="fa-solid fa-chevron-left"></i>
                </span>
                    <h5 className="offcanvas-title">
                        {activeDropdown === "explore" ? "Explore" : activeDropdown === "buyers" ? "For Buyers" : "For Vendors"}
                    </h5>

                    <button type="button" className="btn-close" onClick={handleCloseSubCanvas}></button>
                </div>
                {/* Back Button */}
               
                <div className="offcanvas-body">
                    <ul className="list-unstyled custom-can ms-3">
                        {activeDropdown === "explore" && (
                            <>
                                <li className=""><a className="nav-link" href="#">Mechanical</a></li>
                                <li><a className="nav-link" href="#">Piping</a></li>
                                <li><a className="nav-link" href="#">Electrical</a></li>
                                <li><a className="nav-link" href="#">Instrumentation</a></li>
                                <li><a className="nav-link" href="#">Thermal</a></li>
                                <li><a className="nav-link" href="#">Metal</a></li>
                                <li><a className="nav-link" href="#">Structural</a></li>
                                <li><a className="nav-link" href="#">Oil & Gas Exploration</a></li>
                                <li><a className="nav-link" href="#">Oil & Gas Production</a></li>
                                <li><a className="nav-link" href="#">Marine</a></li>
                                <li><a className="nav-link" href="#">Safety</a></li>
                                <li><a className="nav-link" href="#">Engineering Services</a></li>
                                <li><a className="nav-link" href="#">Explore All Vendors</a></li>
                            </>
                        )}
                        {activeDropdown === "buyers" && (
                            <>
                                <li><a className="nav-link" href="#">Register as Buyer</a></li>
                                <li><a className="nav-link" href="#">Float RFQ</a></li>
                            </>
                        )}
                        {activeDropdown === "vendors" && (
                            <>
                                <li><a className="nav-link" href="#">Register as Vendor</a></li>
                                <li><a className="nav-link" href="#">Business Leads</a></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>

        </>
    );


};

export default Header;
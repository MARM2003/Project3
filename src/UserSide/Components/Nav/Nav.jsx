import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import "./Nav.css";
import { MdOutlinePersonOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [showMainCanvas, setShowMainCanvas] = useState(false);
    const [showSubCanvas, setShowSubCanvas] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleShowMainCanvas = () => setShowMainCanvas(true);
    const handleCloseMainCanvas = () => setShowMainCanvas(false);
    const handleShowSubCanvas = (dropdown) => {
        setActiveDropdown(dropdown);
        setShowSubCanvas(true);
    };
    const handleCloseSubCanvas = () => setShowSubCanvas(false);

    return (
        <>
            {/* Navbar */}
            <nav className="navbar  navbar-expand-lg" style={{ backgroundColor: "rgb(10, 10, 58)" }}>
                <div className="container d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Company Logo" style={{ width: "150px", height: "auto", maxHeight: "60px" }} />
                    </a>

                    {/* Desktop Menu */}
                    <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light cursor-pointer" href="#" id="exploreDropdown" data-bs-toggle="dropdown">
                                    Explore
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Mechanical</a></li>
                                    <li><a className="dropdown-item" href="#">Piping</a></li>
                                    <li><a className="dropdown-item" href="#">Electrical</a></li>
                                    <li><a className="dropdown-item" href="#">Instrumentation</a></li>
                                    <li><a className="dropdown-item" href="#">Thermal</a></li>
                                    <li><a className="dropdown-item" href="#">Metal</a></li>
                                    <li><a className="dropdown-item" href="#">Structural</a></li>
                                    <li><a className="dropdown-item" href="#">Oil & Gas Exploration</a></li>
                                    <li><a className="dropdown-item" href="#">Oil & Gas Production</a></li>
                                    <li><a className="dropdown-item" href="#">Marine</a></li>
                                    <li><a className="dropdown-item" href="#">Safety</a></li>
                                    <li><a className="dropdown-item" href="#">Engineering Services</a></li>
                                    <li><a className="dropdown-item" href="#">Explore All Vendors</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light cursor-pointer" href="#" id="buyersDropdown" data-bs-toggle="dropdown">
                                    For Buyers
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Register as Buyer</a></li>
                                    <li><a className="dropdown-item" href="#">Float RFQ</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light cursor-pointer" href="#" id="vendorsDropdown" data-bs-toggle="dropdown">
                                    For Vendors
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Register as Vendor</a></li>
                                    <li><a className="dropdown-item" href="#">Business Leads</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light cursor-pointer" href="#">Business Booster</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light cursor-pointer" onClick={() => navigate("/login")}>
                                    <span className="icon "><MdOutlinePersonOutline /></span> Sign In
                                </a>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-primary ms-2 cursor-pointer">Add Listing</button>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu (Offcanvas) */}
                    <div className="d-flex align-items-center d-lg-none">
                        <a className="nav-link me-3 text-light cursor-pointer" onClick={() => navigate("/login")}>
                            <span className="icon"><MdOutlinePersonOutline /></span> Sign In
                        </a>
                        <button className="navbar-toggler bg-light cursor-pointer" type="button" onClick={handleShowMainCanvas}>
                            <span className="navbar-toggler-icon bg-light"></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Offcanvas */}
            <div className={`offcanvas offcanvas-start ${showMainCanvas ? "show" : ""}`} tabIndex="-1">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Menu</h5>
                    <button type="button" className="btn-close" onClick={handleCloseMainCanvas}></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="list-unstyled cursor-pointer">
                        <li><a className="nav-link " onClick={() => handleShowSubCanvas("explore")}>Explore</a></li>
                        <li><a className="nav-link cursor-pointer" onClick={() => handleShowSubCanvas("buyers")}>For Buyers</a></li>
                        <li><a className="nav-link cursor-pointer" onClick={() => handleShowSubCanvas("vendors")}>For Vendors</a></li>
                        <li><a className="nav-link cursor-pointer" href="#">Business Booster</a></li>
                        <li><button className="btn btn-primary mt-3 cursor-pointer">Add Listing</button></li>
                    </ul>
                </div>
            </div>

            {/* Sub Offcanvas for Dropdowns */}
            <div className={`offcanvas offcanvas-end ${showSubCanvas ? "show" : ""}`} tabIndex="-1">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">
                        {activeDropdown === "explore" ? "Explore" : activeDropdown === "buyers" ? "For Buyers" : "For Vendors"}
                    </h5>
                    <button type="button" className="btn-close" onClick={handleCloseSubCanvas}></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="list-unstyled">
                        {activeDropdown === "explore" && (
                            <>
                                <li><a className="nav-link" href="#">Mechanical</a></li>
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

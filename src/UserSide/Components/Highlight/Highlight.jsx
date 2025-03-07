import React, { useRef, useState, useEffect } from "react";
import { BsBookmark, BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import imgCom from "../images/companies/1.jpg";

const companies = [
    { name: "RABS Industries", role: "Manufacturer", employees: "51-100", location: "Tokyo, Japan", products: "15", imgSrc: imgCom },
    { name: "Tech Solutions", role: "Supplier", employees: "200-500", location: "New York, USA", products: "50", imgSrc: imgCom },
    { name: "XYZ Global Exports", role: "Exporter", employees: "100-300", location: "Berlin, Germany", products: "30", imgSrc: imgCom },
    { name: "ABC Tech", role: "Manufacturer", employees: "500-1000", location: "London, UK", products: "100", imgSrc: imgCom },
    { name: "DEF Industries", role: "Supplier", employees: "100-250", location: "Paris, France", products: "25", imgSrc: imgCom },
];

const HighlightsSection = () => {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (scrollRef.current) {
                setCanScrollLeft(scrollRef.current.scrollLeft > 0);
                setCanScrollRight(scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
            }
        };
        checkScroll();
        scrollRef.current?.addEventListener("scroll", checkScroll);
        return () => scrollRef.current?.removeEventListener("scroll", checkScroll);
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.firstChild.offsetWidth + 20;
            scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center">
     <h2 className="fw-bold">Highlights From Enggpro</h2>
     <a href="#" className="btn-title">
       View All{" "}
       <svg
         xmlns="http://www.w3.org/2000/svg"
         width="14"
         height="14"
         viewBox="0 0 14 14"
         fill="none"
       >
         <path
           d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z"
           fill="#050B20"
         ></path>
       </svg>
     </a>
   </div>

            {/* Tabs */}
            <ul className="nav nav-tabs mb-4 justify-content-left">
                {["Electrical", "Mechanical", "Piping"].map((tab) => (
                    <li className="nav-item" key={tab}>
                        <a className="nav-link" href="#">{tab}</a>
                    </li>
                ))}
            </ul>

            {/* Card Slider */}
            <div className="position-relative">
                <div ref={scrollRef} className="d-flex flex-nowrap gap-3 overflow-hidden" style={{ scrollBehavior: "smooth", width: "100%" }}>
                    {companies.map((company, index) => (
                        <div key={index} className="card flex-shrink-0 shadow-sm" style={{ width: "300px" }}>
                            <div className="position-relative">
                                <img src={company.imgSrc} className="card-img-top p-3" alt={company.name} />
                                <BsBookmark className="position-absolute top-0 end-0 m-3 text-white mt-4" size={24} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{company.name}</h5>
                                <p className="text-muted">{company.role}</p>
                                <hr />
                                <p className="small mb-1"><strong>Employees:</strong> {company.employees}</p>
                                <p className="small mb-1"><strong>Location:</strong> {company.location}</p>
                                <hr />
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className="fw-bold mb-0">{company.products}</p>
                                        <small>Products</small>
                                    </div>
                                    <a href="#" className="text-decoration-none text-primary">
                                        View Details <BsArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Buttons */}
            <div className="d-flex justify-content-center mt-3 mb-4">
                <button className="btn btn-light mx-2 shadow" onClick={() => scroll("left")} disabled={!canScrollLeft}>
                    <BsChevronLeft size={24} />
                </button>
                <button className="btn btn-light mx-2 shadow" onClick={() => scroll("right")} disabled={!canScrollRight}>
                    <BsChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default HighlightsSection;

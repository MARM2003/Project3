// import React, { useRef, useState, useEffect } from "react";
// import { Container, Card, Button, Nav } from "react-bootstrap";
// import { BsBookmark, BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import imgCom from "../images/1.jpg";

// const companies = [
//     { name: "RABS Industries", role: "Manufacturer", employees: "51-100", location: "Tokyo, Japan", products: "15", imgSrc: imgCom },
//     { name: "Tech Solutions", role: "Supplier", employees: "200-500", location: "New York, USA", products: "50", imgSrc: imgCom },
//     { name: "XYZ Global Exports", role: "Exporter", employees: "100-300", location: "Berlin, Germany", products: "30", imgSrc: imgCom },
//     { name: "ABC Tech", role: "Manufacturer", employees: "500-1000", location: "London, UK", products: "100", imgSrc: imgCom },
//     { name: "DEF Industries", role: "Supplier", employees: "100-250", location: "Paris, France", products: "25", imgSrc: imgCom },
// ];

// const HighlightsSection = () => {
//     const scrollRef = useRef(null);
//     const [canScrollLeft, setCanScrollLeft] = useState(false);
//     const [canScrollRight, setCanScrollRight] = useState(false);

//     useEffect(() => {
//         const checkScroll = () => {
//             if (scrollRef.current) {
//                 setCanScrollLeft(scrollRef.current.scrollLeft > 0);
//                 setCanScrollRight(scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
//             }
//         };
//         checkScroll();
//         scrollRef.current?.addEventListener("scroll", checkScroll);
//         return () => scrollRef.current?.removeEventListener("scroll", checkScroll);
//     }, []);

//     const scroll = (direction) => {
//         if (scrollRef.current) {
//             const scrollAmount = scrollRef.current.firstChild.offsetWidth + 20;
//             scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
//         }
//     };

//     return (
//         <Container className="mt-5">
//             <h2 className="fw-bold text-center">Highlights From Enggpro</h2>

//             <Nav variant="tabs" defaultActiveKey="Electrical" className="mb-4">
//                 {["Electrical", "Mechanical", "Piping"].map((tab) => (
//                     <Nav.Item key={tab}>
//                         <Nav.Link eventKey={tab}>{tab}</Nav.Link>
//                     </Nav.Item>
//                 ))}
//             </Nav>

//             <div className="d-flex justify-content-center position-relative">
//                 <div ref={scrollRef} className="d-flex flex-nowrap gap-3 overflow-hidden" style={{ scrollBehavior: "smooth", width: "100%" }}>
//                     {companies.map((company, index) => (
//                         <Card key={index} className="shadow-sm flex-shrink-0" style={{ width: "300px" }}>
//                             <div className="position-relative">
//                                 <Card.Img variant="top" src={company.imgSrc} className="p-3" />
//                                 <BsBookmark className="position-absolute top-0 end-0 m-3 text-white mt-4" size={24} />
//                             </div>
//                             <Card.Body>
//                                 <Card.Title className="fw-bold">{company.name}</Card.Title>
//                                 <Card.Text className="text-muted">{company.role}</Card.Text>
//                                 <hr />
//                                 <p className="small mb-1"><strong>Employees:</strong> {company.employees}</p>
//                                 <p className="small mb-1"><strong>Location:</strong> {company.location}</p>
//                                 <hr />
//                                 <div className="d-flex justify-content-between align-items-center">
//                                     <div>
//                                         <p className="fw-bold mb-0">{company.products}</p>
//                                         <small>Products</small>
//                                     </div>
//                                     <Button variant="link" className="text-primary p-0">
//                                         View Details <BsArrowRight />
//                                     </Button>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     ))}
//                 </div>
//             </div>

//             <div className="d-flex justify-content-center mt-3 mb-4">
//                 <Button variant="light" className="mx-2 shadow" onClick={() => scroll("left")} disabled={!canScrollLeft}>
//                     <BsChevronLeft size={24} />
//                 </Button>
//                 <Button variant="light" className="mx-2 shadow" onClick={() => scroll("right")} disabled={!canScrollRight}>
//                     <BsChevronRight size={24} />
//                 </Button>
//             </div>
//         </Container>
//     );
// };

// export default HighlightsSection;
import React, { useRef, useState, useEffect } from "react";
import { BsBookmark, BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import imgCom from "../images/1.jpg";

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
            <h2 className="fw-bold text-center">Highlights From Enggpro</h2>

            {/* Tabs */}
            <ul className="nav nav-tabs mb-4 justify-content-center">
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

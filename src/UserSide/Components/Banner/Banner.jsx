// import React, { useState } from "react";
// import { Dropdown, Button, FormControl, InputGroup, Container } from "react-bootstrap";
// import { FaSearch } from "react-icons/fa";
// import "./Banner.css";

// const Banner = () => {
//     const [selectedCategory, setSelectedCategory] = useState("From the sectors");

//     const handleSelect = (eventKey) => {
//         setSelectedCategory(eventKey);
//     };

//     return (
//         <div className="banner">
//             <Container className="py-5 text-center">
//                 <h1 className="mb-4">Find the Best Vendors for Your Needs</h1>

//                 <div className="bg-white p-4 rounded rounded-4 shadow-lg d-flex flex-column flex-md-row align-items-center justify-content-center w-100">
//                     <InputGroup className="w-100 w-md-auto mb-2 mb-md-0 me-md-2">
//                         <FormControl
//                             type="text"
//                             placeholder="Search by item, company or country"
//                             className="rounded"
//                         />
//                     </InputGroup>


//                     <Dropdown onSelect={handleSelect} className="w-100 w-md-auto mb-2 mb-md-0 me-md-2">
//                         <Dropdown.Toggle variant="light" className="rounded">
//                             {selectedCategory}
//                         </Dropdown.Toggle>
//                         <Dropdown.Menu style={{ maxHeight: "200px", overflowY: "auto" }}>
//                             <Dropdown.Item eventKey="Mechanical">Mechanical</Dropdown.Item>
//                             <Dropdown.Item eventKey="Piping">Piping</Dropdown.Item>
//                             <Dropdown.Item eventKey="Electrical">Electrical</Dropdown.Item>
//                             <Dropdown.Item eventKey="Instrumentation">Instrumentation</Dropdown.Item>
//                             <Dropdown.Item eventKey="Thermal">Thermal</Dropdown.Item>
//                             <Dropdown.Item eventKey="Metal">Metal</Dropdown.Item>
//                             <Dropdown.Item eventKey="Structural">Structural</Dropdown.Item>
//                             <Dropdown.Item eventKey="Oil & Gas Exploration">Oil & Gas Exploration</Dropdown.Item>
//                             <Dropdown.Item eventKey="Oil & Gas Production">Oil & Gas Production</Dropdown.Item>
//                             <Dropdown.Item eventKey="Safety">Safety</Dropdown.Item>
//                             <Dropdown.Item eventKey="Engineering Services">Engineering Services</Dropdown.Item>
//                         </Dropdown.Menu>
//                     </Dropdown>

//                     <Button variant="primary" className="w-50 w-md-auto rounded">
//                         <FaSearch className="me-1" /> Search
//                     </Button>
//                 </div>
//             </Container>
//         </div>
//     );
// };

// export default Banner;



import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Banner.css"
const Banner = () => {
    const [selectedCategory, setSelectedCategory] = useState("From the sectors");

    const handleSelect = (event) => {
        setSelectedCategory(event.target.innerText);
    };

    return (
        <div className=" text-white text-center py-5 banner">
            <div className="container">
                <h1 className="mb-4">Find The Right Vendors,Instantly </h1>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="bg-white p-4 rounded-4 shadow-lg d-flex flex-column flex-md-row align-items-center gap-2">
                            
                            {/* Search Input */}
                            <div className="flex-grow-1">
                                <input
                                    type="text"
                                    className="form-control rounded"
                                    placeholder="Search by item, company or country"
                                />
                            </div>

                            {/* Dropdown */}
                            <div className="dropdown w-25 w-md-auto">
                                <button
                                    className="btn btn-light dropdown-toggle w-100"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                >
                                    {selectedCategory}
                                </button>
                                <ul className="dropdown-menu" style={{ maxHeight: "200px", overflowY: "auto" }}>
                                    {[
                                        "Mechanical",
                                        "Piping",
                                        "Electrical",
                                        "Instrumentation",
                                        "Thermal",
                                        "Metal",
                                        "Structural",
                                        "Oil & Gas Exploration",
                                        "Oil & Gas Production",
                                        "Safety",
                                        "Engineering Services",
                                    ].map((category) => (
                                        <li key={category}>
                                            <button className="dropdown-item" onClick={handleSelect}>
                                                {category}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Search Button */}
                            <button className="btn btn-primary d-flex align-items-center rounded">
                                <FaSearch className="me-1" /> Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

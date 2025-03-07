// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import mech from "../images/sectors/mechanical.svg";
// import { MdOutlineArrowOutward } from "react-icons/md";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Explore = () => {
//   const categories = [
//     "Mechanical",
//     "Piping",
//     "Electrical",
//     "Instrumentation",
//     "Metal",
//     "Structural",
//   ];

//   return (
//     <Container fluid className="d-flex py-5">
//       <div className="bg-light border rounded-4 p-4 w-100 w-md-75 w-lg-50 shadow-lg">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <p className="fw-bold fs-5 fs-md-4 fs-lg-3 mb-0">Explore Vendors from Leading Sectors</p>
//           <p className="fw-bold fs-6 fs-md-5 fs-lg-4 text-primary mb-0" style={{ cursor: "pointer" }}>
//             Show all sectors
//           </p>
//         </div>

//         {/* Grid View for Large Screens */}
//         <div className="d-none d-md-block">
//           <Row className="g-3">
//             {categories.map((category, index) => (
//               <Col key={index} xs={6} sm={4} md={4} lg={2}>
//                 <Card className="border border-dark bg-white rounded text-center shadow p-3" style={{ height: "180px" }}>
//                   <Card.Img
//                     variant="top"
//                     src={mech}
//                     alt={category}
//                     className="img-fluid"
//                     style={{ maxHeight: "80px", objectFit: "contain" }}
//                   />
//                   <Card.Body className="d-flex flex-column align-items-center">
//                     <Card.Title className="fs-6 fw-semibold text-wrap text-center" style={{ maxWidth: "100px" }}>
//                       {category}
//                     </Card.Title>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </div>

//         {/* Scrollable View for Small Screens */}
//         <div className="d-md-none overflow-auto" style={{ maxWidth: "100%", scrollbarWidth: "thin", scrollbarColor: "#ccc transparent" }}>
//           <div className="d-flex gap-3 flex-nowrap">
//             {categories.map((category, index) => (
//               <div
//                 key={index}
//                 className="border border-dark bg-white rounded text-center shadow p-3"
//                 style={{ minWidth: "120px", height: "180px" }}
//               >
//                 <img
//                   src={mech}
//                   alt={category}
//                   className="img-fluid"
//                   style={{ maxHeight: "80px", objectFit: "contain" }}
//                 />
//                 <div className="fw-semibold fs-6 text-wrap text-wrap" style={{ maxWidth: "100px" }}>
//                   {category}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

// {/* 
//         <div className="w-100 d-flex justify-content-between mt-5 ">
//           <div className="bg-warning border pt-5 ps-3 pe-3 rounded-4 me-2 pb-5">
//             <p className="fw-bold fs-5 fs-md-4 fs-lg-3 mb-0">For Vendors</p>
//             <p className="fw-bold fs-5 fs-md-4 fs-lg-3 mb-0 mb-5">Start Selling</p>
//             <p style={{ textAlign: "justify" }}>At Enggpro, you have the power to increase your business exponentially by taking part in the online engineering supply-chain and brand and advertise your company, products and services to a large number of targeted buyers globally.</p>

//             <section className="d-flex justify-content-between">

//               <p><Button className="btn btn-primary ps-3 pe-3 pt-2 pb-2">Get Started <MdOutlineArrowOutward /></Button></p>
//               <img src={mech} alt="" style={{ maxHeight: "80px", objectFit: "contain" }} />
//               <p></p>
//             </section>
//           </div>
//           <div className=" border pt-5 ps-3 pe-3 rounded-4 ms-2" style={{ backgroundColor: "#ff5733", color: "white", }}>

//             <p className="fw-bold fs-5 fs-md-4 fs-lg-3 mb-0">For Buyers!</p>
//             <p className="fw-bold fs-5 fs-md-4 fs-lg-3 mb-0 mb-5">Start Buying</p>
//             <p style={{ textAlign: "justify" }}>With Enggpro.com, you can find the most trusted suppliers of Electrical, Mechanical, Thermal, Marine, Oil & Gas exploration and production, Piping, Instrumentation, Metal, Structural, Safety Equipment Sectors and EPC Service Providers.</p>

//             <section className="d-flex justify-content-between">

//               <p><Button className="btn btn-primary ps-3 pe-3 pt-2 pb-2">Get Started <MdOutlineArrowOutward /></Button></p>
//               <img src={mech} alt="" style={{ maxHeight: "80px", objectFit: "contain" }} />
//               <p></p>
//             </section>
//           </div>
//         </div> */}

// <div className="mt-5">
//       <Row className="g-4"> 
        
//         <Col xs={12} md={6}>
//           <div className="bg-warning border p-4 rounded-4 h-100">
//             <p className="fw-bold fs-5 fs-md-4 fs-lg-3 mb-0">For Vendors!</p>
//             <p className="fw-bold fs-5 fs-md-4 fs-lg-3 mb-4">Start Selling</p>
//             <p className="text-justify">
//               At Enggpro, you have the power to increase your business exponentially by taking part in the online engineering supply chain and brand and advertise your company, products, and services to a large number of targeted buyers globally.
//             </p>

//             <div className="d-flex justify-content-between align-items-center mt-4">
//               <Button className="btn btn-primary px-4 py-2">
//                 Get Started <sup> <MdOutlineArrowOutward /></sup>
//               </Button>
//               <img src={mech} alt="Vendor" style={{ maxHeight: "80px", objectFit: "contain" }} />
//             </div>
//           </div>
//         </Col>

        
//         <Col xs={12} md={6}>
//           <div className="border p-4 rounded-4 h-100" style={{ backgroundColor: "#ff5733", color: "white" }}>
//             <p className="fw-bold fs-5 fs-md-4 fs-lg-3 mb-0">For Buyers!</p>
//             <p className="fw-bold fs-5 fs-md-4 fs-lg-3 mb-4">Start Buying</p>
//             <p className="text-justify">
//               With Enggpro.com, you can find the most trusted suppliers of Electrical, Mechanical, Thermal, Marine, Oil & Gas exploration and production, Piping, Instrumentation, Metal, Structural, Safety Equipment Sectors, and EPC Service Providers.
//             </p>

//             <div className="d-flex justify-content-between align-items-center mt-4">
//               <Button className="btn btn-primary px-4 py-2">
//                 Create RFQ <sup> <MdOutlineArrowOutward /></sup>
//               </Button>
//               <img src={mech} alt="Buyer" style={{ maxHeight: "80px", objectFit: "contain" }} />
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </div>
//       </div>



//     </Container>
//   );
// };

// export default Explore;


import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import mech from "../images/sectors/mechanical.svg";

const Explore = () => {
  const categories = [
    "Mechanical",
    "Piping",
    "Electrical",
    "Instrumentation",
    "Metal",
    "Structural",
  ];

  return (
    <div className="container-fluid d-flex py-5">
      <div className="bg-light border rounded-4 p-4 w-100 w-md-75 w-lg-50 shadow-lg">
        
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <p className="fw-bold fs-5 fs-md-4 fs-lg-3 mb-0">Explore Vendors from Leading Sectors</p>
          <p className="fw-bold fs-6 fs-md-5 fs-lg-4 text-primary mb-0" style={{ cursor: "pointer" }}>
            Show all sectors
          </p>
        </div>

        {/* Grid View for Large Screens */}
        <div className="d-none d-md-block">
          <div className="row g-3">
            {categories.map((category, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-2">
                <div className="border border-dark bg-white rounded text-center shadow p-3" style={{ height: "180px" }}>
                  <img src={mech} alt={category} className="img-fluid" style={{ maxHeight: "80px", objectFit: "contain" }} />
                  <p className="fs-6 fw-semibold text-wrap text-center m-0" style={{ maxWidth: "100px" }}>{category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable View for Small Screens */}
        <div className="d-md-none overflow-auto" style={{ maxWidth: "100%", scrollbarWidth: "thin", scrollbarColor: "#ccc transparent" }}>
          <div className="d-flex gap-3 flex-nowrap">
            {categories.map((category, index) => (
              <div key={index} className="border border-dark bg-white rounded text-center shadow p-3" style={{ minWidth: "120px", height: "180px" }}>
                <img src={mech} alt={category} className="img-fluid" style={{ maxHeight: "80px", objectFit: "contain" }} />
                <p className="fs-6 fw-semibold text-wrap text-center m-0" style={{ maxWidth: "100px" }}>{category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vendor & Buyer Sections */}
        <div className="mt-5">
          <div className="row g-4">
            
            {/* Vendor Section */}
            <div className="col-12 col-md-6">
              <div className="bg-warning border p-4 rounded-4 h-100">
                <p className="fw-bold fs-5 fs-md-4 fs-lg-3 mb-0">For Vendors!</p>
                <p className="fw-bold fs-5 fs-md-4 fs-lg-3 mb-4">Start Selling</p>
                <p className="text-justify">
                  At Enggpro, you have the power to increase your business exponentially by taking part in the online engineering supply chain and brand and advertise your company, products, and services to a large number of targeted buyers globally.
                </p>
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <button className="btn btn-primary px-4 py-2">
                    Get Started <MdOutlineArrowOutward />
                  </button>
                  <img src={mech} alt="Vendor" style={{ maxHeight: "80px", objectFit: "contain" }} />
                </div>
              </div>
            </div>

            {/* Buyer Section */}
            <div className="col-12 col-md-6">
              <div className="border p-4 rounded-4 h-100" style={{ backgroundColor: "#ff5733", color: "white" }}>
                <p className="fw-bold fs-5 fs-md-4 fs-lg-3 mb-0">For Buyers!</p>
                <p className="fw-bold fs-5 fs-md-4 fs-lg-3 mb-4">Start Buying</p>
                <p className="text-justify">
                  With Enggpro.com, you can find the most trusted suppliers of Electrical, Mechanical, Thermal, Marine, Oil & Gas exploration and production, Piping, Instrumentation, Metal, Structural, Safety Equipment Sectors, and EPC Service Providers.
                </p>
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <button className="btn btn-primary px-4 py-2">
                    Create RFQ <MdOutlineArrowOutward />
                  </button>
                  <img src={mech} alt="Buyer" style={{ maxHeight: "80px", objectFit: "contain" }} />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Explore;

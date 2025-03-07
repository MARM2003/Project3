// import subsImg from '../images/business-booster-chart.jpg'
// import { MdOutlineArrowOutward } from "react-icons/md";
// import { Button, Col, Container, Row } from "react-bootstrap";

// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function Subscribe() {

//     return (
//         <>
//             <Container fluid className="mt-0">
//                 <Row className="align-items-center bg-dark">

//                     <Col xs={12} md={6} className="text-center">
//                         <img src={subsImg} alt="Subscription" className="img-fluid" />
//                     </Col>


//                     <Col xs={12} md={6} className=" text-white d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
//                         <section className="p-4 pt-0 w-100">
//                             <p className="fs-1 text-center text-md-start">Power Up Your Leads, Accelerate Your Growth!</p>
//                             <p className="fs-5 text-justify d-none d-md-block">
//                                 Branding + Business = Look no further than Enggpro's Business Booster, the ultimate cost-effective solution for turbocharging your business growth.
//                             </p>
//                             <div className="text-center text-md-start">
//                                 <Button className="btn btn-primary mt-3">
//                                     Subscribe Now <sup><MdOutlineArrowOutward /></sup>
//                                 </Button>
//                             </div>
//                         </section>
//                     </Col>
//                 </Row>
//                 <Container className="mt-5">
//                 <div  className=" w-100 mx-auto">
//             <Row className='ms-5 me-5 '>
//                     <Col xs={12} sm={6} md={3} className='' >
//                         <p className='mb-0 fw-bold fs-5'>18000+</p>
//                         <p className='mt-0'>Global Suppliers</p>
//                     </Col>
//                     <Col xs={12} sm={6} md={3} >
//                     <p className='mb-0 fw-bold fs-5'>9000+</p>
//                     <p>Buyers Database</p>
//                     </Col>
//                     <Col xs={12} sm={6} md={3} >
//                     <p className='mb-0 fw-bold fs-5'>2500+</p>
//                     <p>Active RFQs</p>
//                     </Col>
//                     <Col xs={12} sm={6} md={3} >
//                     <p className='mb-0 fw-bold fs-5'>30+</p>
//                     <p>Countries</p>
//                     </Col>
//                 </Row>
//             </div>
//                 </Container>
            
               
//             </Container>

//             <hr className='ms-4 me-4' />
//         </>
//     )
// }


import subsImg from '../images/business-booster-chart.jpg';
import { MdOutlineArrowOutward } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Subscribe() {
    return (
        <>
            <div className="container-fluid mt-0">
                <div className="row align-items-center bg-dark">
                    <div className="col-12 col-md-6 text-center">
                        <img src={subsImg} alt="Subscription" className="img-fluid" />
                    </div>

                    <div className="col-12 col-md-6 text-white d-flex justify-content-center align-items-center">
                        <section className="p-4 pt-0 w-100">
                            <p className="fs-1 text-center text-md-start">Power Up Your Leads, Accelerate Your Growth!</p>
                            <p className="fs-5 text-justify d-none d-md-block">
                                Branding + Business = Look no further than Enggpro's Business Booster, the ultimate cost-effective solution for turbocharging your business growth.
                            </p>
                            <div className="text-center text-md-start">
                                <button className="btn btn-primary mt-3">
                                    Subscribe Now <sup><MdOutlineArrowOutward /></sup>
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="w-100 mx-auto">
                    <div className="row text-center">
                        <div className="col-12 col-sm-6 col-md-3">
                            <p className="mb-0 fw-bold fs-5">18000+</p>
                            <p className="mt-0">Global Suppliers</p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <p className="mb-0 fw-bold fs-5">9000+</p>
                            <p>Buyers Database</p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <p className="mb-0 fw-bold fs-5">2500+</p>
                            <p>Active RFQs</p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <p className="mb-0 fw-bold fs-5">30+</p>
                            <p>Countries</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <hr className='ms-4 me-4' />
        </>
    );
}

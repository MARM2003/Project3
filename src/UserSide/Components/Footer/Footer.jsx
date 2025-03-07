// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="text-light py-5 mt-4" style={{backgroundColor:"rgb(10, 10, 58)"}}>
//       <Container>
//         <Row className="mb-4">
//           <Col md={6}>
//             <h4>Join Enggpro</h4>
//             <p>Stay updated with the latest innovations and trends in engineering products and services!</p>
//           </Col>
//           <Col md={6} className="d-flex align-items-center">
//             <Form className="w-100 d-flex">
//               <Form.Control type="email" placeholder="Your e-mail address" className="me-2 rounded rounded-4" />
//               <Button  className="btn-primary rounded rounded-4 w-25">Sign Up</Button>
//             </Form>
//           </Col>
//           <hr />
//         </Row>
//         <Row>
//           <Col md={3} sm={6}>
//             <h5 className="fw-bold fs-3">Useful Links</h5>
//             <ul className="list-unstyled">
//               <li>About Us</li>
//               <li>Careers</li>
//               <li>Blog</li>
//               <li>FAQs</li>
//               <li>Finance</li>
//               <li>Contact Us</li>
//             </ul>
//           </Col>
//           <Col md={3} sm={6}>
//             <h5 className="fw-bold fs-3">Quick Links</h5>
//             <ul className="list-unstyled">
//               <li>Get in Touch</li>
//               <li>Help center</li>
//               <li>Live chat</li>
//               <li>How it works</li>
//             </ul>
//           </Col>
//           <Col md={3} sm={6}>
//             <h5 className="fw-bold fs-3">Sectors</h5>
//             <ul className="list-unstyled">
//               <li>Mechanical</li>
//               <li>Piping</li>
//               <li>Electrical</li>
//               <li>Instrumentation</li>
//               <li>Thermal</li>
//               <li>Metal</li>
//               <li>Structural</li>
//               <li>Oil & Gas Exploration</li>
//               <li>Oil & Gas Production</li>
//               <li>Marine</li>
//               <li>Safety</li>
//               <li>Engineering Services</li>
//             </ul>
//           </Col>
//           <Col md={3} sm={6} className="text-center">
//             <Button  className="d-block mb-2">Download on the Apple Store</Button>
//             <Button  className="d-block mb-3">Get in on Google Play</Button>
//             <h5 className="fw-bold fs-3">Connect With Us</h5>
//             <div className="d-flex justify-content-center gap-3 fw-bold fs-3">
//               <FaFacebookF />
//               <FaTwitter />
//               <FaInstagram />
//               <FaLinkedin />
//             </div>
//           </Col>
//         </Row>
//         <Row className="mt-4">
//         <hr className="ms-0 me-0"/>
//           <Col className="text-center">
//             <p>© 2025 Enggpro.com. All rights reserved.</p>
//             <p>
//               <a href="/" className="text-light">Terms & Conditions</a> •{" "}
//               <a href="/" className="text-light">Privacy Notice</a>
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="text-light py-5 mt-4" style={{ backgroundColor: "rgb(10, 10, 58)" }}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6">
            <h4>Join Enggpro</h4>
            <p>Stay updated with the latest innovations and trends in engineering products and services!</p>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <form className="w-100 d-flex">
              <input type="email" placeholder="Your e-mail address" className="form-control me-2 rounded-4" />
              <button className="btn btn-primary rounded-4 w-25">Sign Up</button>
            </form>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h5 className="fw-bold fs-5">Useful Links</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Finance</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5 className="fw-bold fs-5">Quick Links</h5>
            <ul className="list-unstyled">
              <li>Get in Touch</li>
              <li>Help Center</li>
              <li>Live Chat</li>
              <li>How It Works</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5 className="fw-bold fs-5">Sectors</h5>
            <ul className="list-unstyled">
              <li>Mechanical</li>
              <li>Piping</li>
              <li>Electrical</li>
              <li>Instrumentation</li>
              <li>Thermal</li>
              <li>Metal</li>
              <li>Structural</li>
              <li>Oil & Gas Exploration</li>
              <li>Oil & Gas Production</li>
              <li>Marine</li>
              <li>Safety</li>
              <li>Engineering Services</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 text-center">
            <button className="btn btn-light d-block mb-2 w-100">Download on the Apple Store</button>
            <button className="btn btn-light d-block mb-3 w-100">Get it on Google Play</button>
            <h5 className="fw-bold fs-5">Connect With Us</h5>
            <div className="d-flex justify-content-center gap-3 fs-4">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <hr />
        <div className="row mt-4 text-center">
          <div className="col">
            <p>© 2025 Enggpro.com. All rights reserved.</p>
            <p>
              <a href="/" className="text-light">Terms & Conditions</a> •
              <a href="/" className="text-light"> Privacy Notice</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

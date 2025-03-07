
// import LoginForm from "../Forms/Login.jsx";
// import RegisterForm from "../Forms/Register.jsx";
// import React, { useState, useEffect } from "react";
// import { Container, Nav, Tab, Row, Col } from "react-bootstrap";

// const AuthForm = () => {
//   const [activeTab, setActiveTab] = useState("login");

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const tab = searchParams.get("tab");
//     const email = searchParams.get("email");

//     if (tab === "register") {
//       setActiveTab("register");
//       if (email) {
//         localStorage.setItem("googleEmail", email);
//       }
//     }
//   }, [location]);

//   return (
//     <Container fluid className="d-flex justify-content-center align-items-center vh-100">
//       <Row className="w-100 d-flex justify-content-center">
//         <Col xs={12} sm={10} md={8} lg={6} xl={5}>
//           <div className="p-4 shadow-lg rounded bg-white">
//             <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
//               <Nav variant="tabs" className="justify-content-center">
//                 <Nav.Item>
//                   <Nav.Link eventKey="login">Sign In</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link eventKey="register">Register</Nav.Link>
//                 </Nav.Item>
//               </Nav>

//               <Tab.Content>
//                 <Tab.Pane eventKey="login" active={activeTab === "login"}>
//                   <LoginForm />
//                 </Tab.Pane>

//                 <Tab.Pane eventKey="register" active={activeTab === "register"}>
//                   <RegisterForm />
//                 </Tab.Pane>
//               </Tab.Content>
//             </Tab.Container>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AuthForm;

import LoginForm from "../Forms/Login.jsx";
import RegisterForm from "../Forms/Register.jsx";
import React, { useState, useEffect } from "react";

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState("login");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const tab = searchParams.get("tab");
    const email = searchParams.get("email");

    if (tab === "register") {
      setActiveTab("register");
      if (email) {
        localStorage.setItem("googleEmail", email);
      }
    }
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <div className="p-4 shadow-lg rounded bg-white">
            
            {/* Tabs Navigation */}
            <ul className="nav nav-tabs justify-content-center">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "login" ? "active" : ""}`}
                  onClick={() => setActiveTab("login")}
                >
                  Sign In
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "register" ? "active" : ""}`}
                  onClick={() => setActiveTab("register")}
                >
                  Register
                </button>
              </li>
            </ul>

            {/* Tab Content */}
            <div className="tab-content mt-3">
              <div className={`tab-pane fade ${activeTab === "login" ? "show active" : ""}`}>
                <LoginForm />
              </div>
              <div className={`tab-pane fade ${activeTab === "register" ? "show active" : ""}`}>
                <RegisterForm />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

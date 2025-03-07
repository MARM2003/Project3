// // // import React, { useRef } from "react";
// // // import { Card, Button, Container } from "react-bootstrap";
// // // import { BsChevronLeft, BsChevronRight, BsCheckCircle } from "react-icons/bs";
// // // import "./FeedBack.css";

// // // const reviews = [
// // //   {
// // //     id: 1,
// // //     rating: "★★★★★",
// // //     title: "Effective Lead Generation",
// // //     text: "Enggpro is a powerful B2B portal connecting buyers with top engineering...",
// // //     author: "S Jhons - ENG Sol LLC",
// // //   },
// // //   {
// // //     id: 2,
// // //     rating: "★★★★★",
// // //     title: "Great Customer Support",
// // //     text: "The support team was really helpful and guided us at every step...",
// // //     author: "A Smith - Tech Solutions",
// // //   },
// // //   {
// // //     id: 3,
// // //     rating: "★★★★★",
// // //     title: "Seamless Experience",
// // //     text: "Enggpro provided a seamless experience from start to finish...",
// // //     author: "L Brown - Innovate Corp",
// // //   },
// // //   {
// // //     id: 4,
// // //     rating: "★★★★★",
// // //     title: "Excellent Platform",
// // //     text: "A game-changer in the B2B industry with excellent vendor connections...",
// // //     author: "M Lee - Global Enterprises",
// // //   },
// // //   {
// // //     id: 4,
// // //     rating: "★★★★★",
// // //     title: "Excellent Platform",
// // //     text: "A game-changer in the B2B industry with excellent vendor connections...",
// // //     author: "M Lee - Global Enterprises",
// // //   },
// // //   {
// // //     id: 4,
// // //     rating: "★★★★★",
// // //     title: "Excellent Platform",
// // //     text: "A game-changer in the B2B industry with excellent vendor connections...",
// // //     author: "M Lee - Global Enterprises",
// // //   },
// // //   {
// // //     id: 4,
// // //     rating: "★★★★★",
// // //     title: "Excellent Platform",
// // //     text: "A game-changer in the B2B industry with excellent vendor connections...",
// // //     author: "M Lee - Global Enterprises",
// // //   },
// // // ];

// // // const CustomerReviews = () => {
// // //   const scrollRef = useRef(null);

// // //   const scroll = (direction) => {
// // //     if (scrollRef.current) {
// // //       const scrollAmount = scrollRef.current.firstChild.offsetWidth + 20; // Move one card at a time
// // //       scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
// // //     }
// // //   };

// // //   return (
   
// // //     <div fluid className="reviews-section " style={{backgroundColor:"rgba(232, 238, 239, 0.764) "}}>
// // //       <h2 className="fw-bold">What Our Customers Say</h2>
// // //       <div className="reviews-wrapper" ref={scrollRef}>
// // //         {reviews.map((review) => (
// // //           <Card key={review.id} className="review-card">
// // //             <Card.Body>
// // //               <div className="rating">{review.rating} <BsCheckCircle className="verified-icon" /> <span className="verified-text">Verified</span></div>
// // //               <Card.Title className="fw-bold">{review.title}</Card.Title>
// // //               <Card.Text>{review.text}</Card.Text>
// // //               <Card.Text className="author">
// // //                 {review.author} <br />
                
// // //               </Card.Text>
// // //             </Card.Body>
// // //           </Card>
// // //         ))}
// // //       </div>

 
// // //       <div className="navigation-buttons">
// // //         <Button className="nav-btn bg-primary" onClick={() => scroll("left")}>
// // //           <BsChevronLeft size={30} />
// // //         </Button>
// // //         <Button className="nav-btn bg-primary" onClick={() => scroll("right")}>
// // //           <BsChevronRight size={30} />
// // //         </Button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CustomerReviews;
// // import React, { useRef, useState, useEffect } from "react";
// // import { Card, Button, Container } from "react-bootstrap";
// // import { BsChevronLeft, BsChevronRight, BsCheckCircle } from "react-icons/bs";
// // import "./FeedBack.css";

// // const reviews = [
// //   { id: 1, rating: "★★★★★", title: "Effective Lead Generation", text: "Enggpro is a powerful B2B portal connecting buyers with top engineering...", author: "S Jhons - ENG Sol LLC" },
// //   { id: 2, rating: "★★★★★", title: "Great Customer Support", text: "The support team was really helpful and guided us at every step...", author: "A Smith - Tech Solutions" },
// //   { id: 3, rating: "★★★★★", title: "Seamless Experience", text: "Enggpro provided a seamless experience from start to finish...", author: "L Brown - Innovate Corp" },
// //   { id: 4, rating: "★★★★★", title: "Excellent Platform", text: "A game-changer in the B2B industry with excellent vendor connections...", author: "M Lee - Global Enterprises" },
// //   { id: 5, rating: "★★★★★", title: "Reliable Services", text: "I highly recommend Enggpro for its efficient services...", author: "K Patel - TechVision" }
// // ];

// // const CustomerReviews = () => {
// //   const scrollRef = useRef(null);
// //   const [canScrollLeft, setCanScrollLeft] = useState(false);
// //   const [canScrollRight, setCanScrollRight] = useState(true);

// //   const checkScroll = () => {
// //     if (scrollRef.current) {
// //       setCanScrollLeft(scrollRef.current.scrollLeft > 0);
// //       setCanScrollRight(
// //         scrollRef.current.scrollLeft + scrollRef.current.clientWidth < scrollRef.current.scrollWidth
// //       );
// //     }
// //   };

// //   useEffect(() => {
// //     checkScroll();
// //     window.addEventListener("resize", checkScroll);
// //     return () => window.removeEventListener("resize", checkScroll);
// //   }, []);

// //   const scroll = (direction) => {
// //     if (scrollRef.current) {
// //       const scrollAmount = scrollRef.current.firstChild.offsetWidth + 20;
// //       scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
// //     }
// //   };

// //   return (
// //     <Container fluid className="reviews-section" style={{ backgroundColor: "rgba(232, 238, 239, 0.764)" }}>
// //       <h2 className="fw-bold">What Our Customers Say</h2>
// //       <div className="reviews-wrapper" ref={scrollRef} onScroll={checkScroll}>
// //         {reviews.map((review) => (
// //           <Card key={review.id} className="review-card">
// //             <Card.Body>
// //               <div className="rating">{review.rating} <BsCheckCircle className="verified-icon" /> <span className="verified-text">Verified</span></div>
// //               <Card.Title className="fw-bold">{review.title}</Card.Title>
// //               <Card.Text>{review.text}</Card.Text>
// //               <Card.Text className="author">{review.author}</Card.Text>
// //             </Card.Body>
// //           </Card>
// //         ))}
// //       </div>
// //       <div className="navigation-buttons">
// //         {canScrollLeft && (
// //           <Button className="nav-btn bg-primary" onClick={() => scroll("left")}> <BsChevronLeft size={30} /> </Button>
// //         )}
// //         {canScrollRight && (
// //           <Button className="nav-btn bg-primary" onClick={() => scroll("right")}> <BsChevronRight size={30} /> </Button>
// //         )}
// //       </div>
// //     </Container>
// //   );
// // };

// // export default CustomerReviews;
// import React, { useRef, useState, useEffect } from "react";
// import { BsChevronLeft, BsChevronRight, BsCheckCircle } from "react-icons/bs";
// // import "./FeedBack.css";

// const reviews = [
//   { id: 1, rating: "★★★★★", title: "Effective Lead Generation", text: "Enggpro is a powerful B2B portal connecting buyers with top engineering...", author: "S Jhons - ENG Sol LLC" },
//   { id: 2, rating: "★★★★★", title: "Great Customer Support", text: "The support team was really helpful and guided us at every step...", author: "A Smith - Tech Solutions" },
//   { id: 3, rating: "★★★★★", title: "Seamless Experience", text: "Enggpro provided a seamless experience from start to finish...", author: "L Brown - Innovate Corp" },
//   { id: 4, rating: "★★★★★", title: "Excellent Platform", text: "A game-changer in the B2B industry with excellent vendor connections...", author: "M Lee - Global Enterprises" },
//   { id: 5, rating: "★★★★★", title: "Reliable Services", text: "I highly recommend Enggpro for its efficient services...", author: "K Patel - TechVision" }
// ];

// const CustomerReviews = () => {
//   const scrollRef = useRef(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   const checkScroll = () => {
//     if (scrollRef.current) {
//       setCanScrollLeft(scrollRef.current.scrollLeft > 0);
//       setCanScrollRight(
//         scrollRef.current.scrollLeft + scrollRef.current.clientWidth < scrollRef.current.scrollWidth
//       );
//     }
//   };

//   useEffect(() => {
//     checkScroll();
//     window.addEventListener("resize", checkScroll);
//     return () => window.removeEventListener("resize", checkScroll);
//   }, []);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = scrollRef.current.firstChild.offsetWidth + 20;
//       scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="container-fluid py-5 bg-light">
//       <h2 className="fw-bold text-center mb-4">What Our Customers Say</h2>
//       <div className="position-relative">
//         <div className="d-flex overflow-auto" ref={scrollRef} onScroll={checkScroll} style={{ scrollBehavior: 'smooth', gap: '20px', paddingBottom: '10px' }}>
//           {reviews.map((review) => (
//             <div key={review.id} className="card p-3" style={{ minWidth: "300px", flex: "0 0 auto" }}>
//               <div className="card-body">
//                 <div className="d-flex align-items-center">
//                   <span className="me-2">{review.rating}</span>
//                   <BsCheckCircle className="text-success" />
//                   <span className="ms-1 text-muted">Verified</span>
//                 </div>
//                 <h5 className="fw-bold mt-2">{review.title}</h5>
//                 <p className="card-text">{review.text}</p>
//                 <p className="text-muted mb-0">{review.author}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button className="btn btn-primary position-absolute start-0 top-50 translate-middle-y" onClick={() => scroll("left")} disabled={!canScrollLeft}>
//           <BsChevronLeft size={30} />
//         </button>
//         <button className="btn btn-primary position-absolute end-0 top-50 translate-middle-y" onClick={() => scroll("right")} disabled={!canScrollRight}>
//           <BsChevronRight size={30} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomerReviews;
import React, { useRef, useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight, BsCheckCircle } from "react-icons/bs";

const reviews = [
  { id: 1, rating: "★★★★★", title: "Effective Lead Generation", text: "Enggpro is a powerful B2B portal connecting buyers with top engineering...", author: "S Jhons - ENG Sol LLC" },
  { id: 2, rating: "★★★★★", title: "Great Customer Support", text: "The support team was really helpful and guided us at every step...", author: "A Smith - Tech Solutions" },
  { id: 3, rating: "★★★★★", title: "Seamless Experience", text: "Enggpro provided a seamless experience from start to finish...", author: "L Brown - Innovate Corp" },
  { id: 4, rating: "★★★★★", title: "Excellent Platform", text: "A game-changer in the B2B industry with excellent vendor connections...", author: "M Lee - Global Enterprises" },
  { id: 5, rating: "★★★★★", title: "Reliable Services", text: "I highly recommend Enggpro for its efficient services...", author: "K Patel - TechVision" }
];

const CustomerReviews = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(scrollRef.current.scrollLeft + scrollRef.current.clientWidth < scrollRef.current.scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.firstChild.offsetWidth + 20;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="container-fluid py-5 bg-light">
      <h2 className="fw-bold text-center mb-4">What Our Customers Say</h2>
      
      <div className="position-relative">
        {/* Scrollable Reviews Wrapper */}
        <div className="d-flex overflow-auto flex-nowrap px-2 px-md-5" ref={scrollRef} onScroll={checkScroll} style={{ scrollBehavior: "smooth", gap: "20px", paddingBottom: "10px" }}>
          {reviews.map((review) => (
            <div key={review.id} className="card p-3 flex-shrink-0" style={{ minWidth: "280px", flex: "0 0 auto" }}>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <span className="me-2">{review.rating}</span>
                  <BsCheckCircle className="text-success" />
                  <span className="ms-1 text-muted">Verified</span>
                </div>
                <h5 className="fw-bold mt-2">{review.title}</h5>
                <p className="card-text">{review.text}</p>
                <p className="text-muted mb-0">{review.author}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {canScrollLeft && (
          <button className="btn btn-primary position-absolute start-0 top-50 translate-middle-y d-none d-md-block" onClick={() => scroll("left")} disabled={!canScrollLeft}>
            <BsChevronLeft size={30} />
          </button>
        )}
        {canScrollRight && (
          <button className="btn btn-primary position-absolute end-0 top-50 translate-middle-y d-none d-md-block" onClick={() => scroll("right")} disabled={!canScrollRight}>
            <BsChevronRight size={30} />
          </button>
        )}
      </div>

      {/* Responsive Grid for Small Screens */}
      <div className="row mt-4 d-md-none">
        {reviews.map((review) => (
          <div key={review.id} className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card p-3">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <span className="me-2">{review.rating}</span>
                  <BsCheckCircle className="text-success" />
                  <span className="ms-1 text-muted">Verified</span>
                </div>
                <h5 className="fw-bold mt-2">{review.title}</h5>
                <p className="card-text">{review.text}</p>
                <p className="text-muted mb-0">{review.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CustomerReviews;

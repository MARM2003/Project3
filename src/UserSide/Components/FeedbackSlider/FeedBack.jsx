// import React, { useRef, useState, useEffect } from "react";

// const reviews = [
//   { id: 1, rating: "★★★★★", title: "Effective Lead Generation", text: "Enggpro is a powerful B2B portal connecting buyers with top engineering...", author: "S Jhons - ENG Sol LLC" },
//   { id: 2, rating: "★★★★★", title: "Great Customer Support", text: "The support team was really helpful and guided us at every step...", author: "A Smith - Tech Solutions" },
//   { id: 3, rating: "★★★★★", title: "Seamless Experience", text: "Enggpro provided a seamless experience from start to finish...", author: "L Brown - Innovate Corp" },
//   { id: 4, rating: "★★★★★", title: "Excellent Platform", text: "A game-changer in the B2B industry with excellent vendor connections...", author: "M Lee - Global Enterprises" },
//   { id: 5, rating: "★★★★★", title: "Reliable Services", text: "I highly recommend Enggpro for its efficient services...", author: "K Patel - TechVision" }
// ];

// const CustomerReviews = () => {
  
//   return (
//     // <!-- boxcar-customers-section -->
//     <section class="boxcar-customers-section">
//         <div class="boxcar-container">
//             <div class="boxcar-title wow fadeInUp">
//                 <h2>What our customers say</h2>
//                 <div class="text"></div>
//             </div>
//             <div class="row car-slider-three wow fadeInUp" data-wow-delay="200ms">
//                 {/* <!-- customer-block  --> */}
//                 <div class="customer-block col-lg-3 col-md-6 col-sm-12">
//                     <div class="inner-box">
//                         <div class="rating-area">
//                             <ul class="rating">
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                             </ul>
//                             <span><i class="fa-solid fa-circle-check"></i>Verified</span>
//                         </div>
//                         <h6 class="title">Effective Lead Generation</h6>
//                         <div class="text">Enggpro is a powerful B2B portal connecting buyers with top engineering
//                             product manufacturers, suppliers, and service providers worldwide.</div>
//                         <span>S Jhons - ENG Sol LLC</span>
//                     </div>
//                 </div>
//                 {/* <!-- customer-block  --> */}
//                 <div class="customer-block col-lg-3 col-md-6 col-sm-12">
//                     <div class="inner-box">
//                         <div class="rating-area">
//                             <ul class="rating">
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                             </ul>
//                             <span><i class="fa-solid fa-circle-check"></i>Verified</span>
//                         </div>
//                         <h6 class="title">Effective Lead Generation</h6>
//                         <div class="text">Enggpro is a powerful B2B portal connecting buyers with top engineering
//                             product manufacturers, suppliers, and service providers worldwide.</div>
//                         <span>S Jhons - ENG Sol LLC</span>
//                     </div>
//                 </div>
//                 {/* <!-- customer-block  --> */}
//                 <div class="customer-block col-lg-3 col-md-6 col-sm-12">
//                     <div class="inner-box">
//                         <div class="rating-area">
//                             <ul class="rating">
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                             </ul>
//                             <span><i class="fa-solid fa-circle-check"></i>Verified</span>
//                         </div>
//                         <h6 class="title">Effective Lead Generation</h6>
//                         <div class="text">Enggpro is a powerful B2B portal connecting buyers with top engineering
//                             product manufacturers, suppliers, and service providers worldwide.</div>
//                         <span>S Jhons - ENG Sol LLC</span>
//                     </div>
//                 </div>
//                 {/* <!-- customer-block  --> */}
//                 <div class="customer-block col-lg-3 col-md-6 col-sm-12">
//                     <div class="inner-box">
//                         <div class="rating-area">
//                             <ul class="rating">
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                             </ul>
//                             <span><i class="fa-solid fa-circle-check"></i>Verified</span>
//                         </div>
//                         <h6 class="title">Effective Lead Generation</h6>
//                         <div class="text">Enggpro is a powerful B2B portal connecting buyers with top engineering
//                             product manufacturers, suppliers, and service providers worldwide.</div>
//                         <span>S Jhons - ENG Sol LLC</span>
//                     </div>
//                 </div>
//                 {/* <!-- customer-block  --> */}
//                 <div class="customer-block col-lg-3 col-md-6 col-sm-12">
//                     <div class="inner-box">
//                         <div class="rating-area">
//                             <ul class="rating">
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                             </ul>
//                             <span><i class="fa-solid fa-circle-check"></i>Verified</span>
//                         </div>
//                         <h6 class="title">Effective Lead Generation</h6>
//                         <div class="text">Enggpro is a powerful B2B portal connecting buyers with top engineering
//                             product manufacturers, suppliers, and service providers worldwide.</div>
//                         <span>S Jhons - ENG Sol LLC</span>
//                     </div>
//                 </div>
//                 {/* <!-- customer-block  --> */}
//                 <div class="customer-block col-lg-3 col-md-6 col-sm-12">
//                     <div class="inner-box">
//                         <div class="rating-area">
//                             <ul class="rating">
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                             </ul>
//                             <span><i class="fa-solid fa-circle-check"></i>Verified</span>
//                         </div>
//                         <h6 class="title">Effective Lead Generation</h6>
//                         <div class="text">Enggpro is a powerful B2B portal connecting buyers with top engineering
//                             product manufacturers, suppliers, and service providers worldwide.</div>
//                         <span>S Jhons - ENG Sol LLC</span>
//                     </div>
//                 </div>
//                 {/* <!-- customer-block  --> */}
//                 <div class="customer-block col-lg-3 col-md-6 col-sm-12">
//                     <div class="inner-box">
//                         <div class="rating-area">
//                             <ul class="rating">
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                             </ul>
//                             <span><i class="fa-solid fa-circle-check"></i>Verified</span>
//                         </div>
//                         <h6 class="title">Effective Lead Generation</h6>
//                         <div class="text">Enggpro is a powerful B2B portal connecting buyers with top engineering
//                             product manufacturers, suppliers, and service providers worldwide.</div>
//                         <span>S Jhons - ENG Sol LLC</span>
//                     </div>
//                 </div>
//                 {/* <!-- customer-block  --> */}
//                 <div class="customer-block col-lg-3 col-md-6 col-sm-12">
//                     <div class="inner-box">
//                         <div class="rating-area">
//                             <ul class="rating">
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                                 <li><i class="fa fa-star"></i></li>
//                             </ul>
//                             <span><i class="fa-solid fa-circle-check"></i>Verified</span>
//                         </div>
//                         <h6 class="title">Effective Lead Generation</h6>
//                         <div class="text">Enggpro is a powerful B2B portal connecting buyers with top engineering
//                             product manufacturers, suppliers, and service providers worldwide.</div>
//                         <span>S Jhons - ENG Sol LLC</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//     // <!-- End boxcar-customers-section -->
//   );
// };

// export default CustomerReviews;
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./FeedBack.css"
// const reviews = [
//   { id: 1, rating: "★★★★★", title: "Effective Lead Generation", text: "Enggpro is a powerful B2B portal connecting buyers with top engineering...", author: "S Jhons - ENG Sol LLC" },
//   { id: 2, rating: "★★★★★", title: "Great Customer Support", text: "The support team was really helpful and guided us at every step...", author: "A Smith - Tech Solutions" },
//   { id: 3, rating: "★★★★★", title: "Seamless Experience", text: "Enggpro provided a seamless experience from start to finish...", author: "L Brown - Innovate Corp" },
//   { id: 4, rating: "★★★★★", title: "Excellent Platform", text: "A game-changer in the B2B industry with excellent vendor connections...", author: "M Lee - Global Enterprises" },
//   { id: 5, rating: "★★★★★", title: "Reliable Services", text: "I highly recommend Enggpro for its efficient services...", author: "K Patel - TechVision" }
// ];

// const CustomerReviews = () => {
//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">What Our Customers Say</h2>
      
//       <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner text-center">
//           {reviews.map((review, index) => (
//             <div key={review.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
//               <div className="testimonial-card mx-auto">
//                 <div className="stars text-success">{review.rating}</div>
//                 <p className="fw-bold">{review.title}</p>
//                 <p>{review.text}</p>
//                 <p className="fw-bold">{review.author}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Buttons */}
//         <button className="carousel-control-prev bg-dark" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
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
    <div className="container-fluid py-5 bg-light vh-25">
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

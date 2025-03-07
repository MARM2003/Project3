// import React, { useState } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import post from "../images/blog-1.jpg";

// const blogPosts = [
//   {
//     id: 1,
//     image: post,
//     category: "Engineering",
//     date: "January 12, 1983",
//     title: "This Long-Awaited Technology May Finally Change the World",
//   },
//   {
//     id: 2,
//     image: post,
//     category: "Electrical",
//     date: "Feburay 28, 2025",
//     title: "working",
//   },
//   {
//     id: 3,
//     image: post,
//     category: "Mechanical",
//     date: "January 20, 2025",
//     title: "hello how are you",
//   },
//   {
//     id: 4,
//     image:post,
//     category: "Engineering",
//     date: "January 20, 2025",
//     title: "This Long-Awaited Technology May Finally Change the World",
//   },
// ];

// const BlogCarousel = () => {
//   const postsPerRow = window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1; // Responsive posts per row
//   const [index, setIndex] = useState(0);

//   const handlePrev = () => setIndex(index - 1);
//   const handleNext = () => setIndex(index + 1);

//   return (
//     <Container className="mt-5">
//       <h2 className="mb-4">Latest Blog Posts</h2>

//       <Row className="justify-content-center">
//         {blogPosts.slice(index, index + postsPerRow).map((post) => (
//           <Col key={post.id} xs={12} sm={6} lg={4} className="mb-4">
//             <div className="card shadow-sm">
//               <img src={post.image} className="card-img-top" alt={post.title} />
//               <div className="card-body">
//                 <span className="badge bg-primary mb-2">News</span>
//                 <p className="text-muted small">
//                   {post.category} • {post.date}
//                 </p>
//                 <h5 className="card-title">{post.title}</h5>
//               </div>
//             </div>
//           </Col>
//         ))}
//       </Row>

//       {/* Navigation Arrows Below */}
//       <Row className="justify-content-center mt-3">
//         <Col xs="auto">
//           {index > 0 && (
//             <Button variant="dark" className="me-2" onClick={handlePrev}>
//               <FaArrowLeft />
//             </Button>
//           )}
//           {index + postsPerRow < blogPosts.length && (
//             <Button variant="dark" onClick={handleNext}>
//               <FaArrowRight />
//             </Button>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default BlogCarousel;
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import post from "../images/blog-1.jpg";

const blogPosts = [
  { id: 1, image: post, category: "Engineering", date: "January 12, 1983", title: "This Long-Awaited Technology May Finally Change the World" },
  { id: 2, image: post, category: "Electrical", date: "February 28, 2025", title: "Working" },
  { id: 3, image: post, category: "Mechanical", date: "January 20, 2025", title: "Hello, how are you?" },
  { id: 4, image: post, category: "Engineering", date: "January 20, 2025", title: "This Long-Awaited Technology May Finally Change the World" },
];

const BlogCarousel = () => {
  const [index, setIndex] = useState(0);
  const [postsPerRow, setPostsPerRow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setPostsPerRow(3);
      } else if (window.innerWidth >= 768) {
        setPostsPerRow(2);
      } else {
        setPostsPerRow(1);
      }
    };

    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => setIndex(index - 1);
  const handleNext = () => setIndex(index + 1);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Latest Blog Posts</h2>

      <div className="row justify-content-center">
        {blogPosts.slice(index, index + postsPerRow).map((post) => (
          <div key={post.id} className="col-12 col-sm-6 col-lg-4 mb-4">
            <div className="card shadow-sm">
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <span className="badge bg-primary mb-2">News</span>
                <p className="text-muted small">{post.category} • {post.date}</p>
                <h5 className="card-title">{post.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="d-flex justify-content-center mt-3">
        {index > 0 && (
          <button className="btn btn-dark me-2" onClick={handlePrev}>
            <FaArrowLeft />
          </button>
        )}
        {index + postsPerRow < blogPosts.length && (
          <button className="btn btn-dark" onClick={handleNext}>
            <FaArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogCarousel;

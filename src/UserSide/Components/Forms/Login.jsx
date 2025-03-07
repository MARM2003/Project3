// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Form, Button, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";

// export default function Login(){
//     const [showPassword, setShowPassword] = useState(false);
//     const navigate=useNavigate();

// const { register, formState: { errors }, handleSubmit, reset } = useForm();
//     const onSubmit=async (data)=>{
//         try {
//             console.log("Form Submitted:", data);
//             const response = await axios.post("http://localhost:5000/login", data, { withCredentials: true });
//             if(response.status===200){
//               reset();
//             toast.success("Logging IN!");
//             navigate("/userLogin");
//             }
//           } catch (error) {
//             if(error.response){
//               toast.error("Invalid Email or password");
//             }
//           }
//     }

//     const handleGoogleLogin = () => {
//         window.open("http://localhost:5000/googleLogin/auth/google", "_self");
//       };
//     return (
//         <>
//         <ToastContainer/>
            
//     <Form onSubmit={handleSubmit(onSubmit)}>
//       {/* Email Input */}
//       <Form.Group className="mb-3">
//         <Form.Label>Email</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter email"
//           {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
//         />
//       </Form.Group>

//       {errors.email?.type === "required" && <p className="text-danger mt-1">Email is required</p>}
//       {errors.email?.type === "pattern" && <p className="text-danger mt-1">Enter a valid email format</p>}

//       {/* Password Input with Show/Hide Feature */}
//       <Form.Group className="mb-3">
//         <Form.Label>Password</Form.Label>
//         <div className="input-group">
//           <Form.Control
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             {...register("password", { required: true, minLength: 8, maxLength: 15 })}
//           />
//           <Button
//             variant="outline-secondary"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? "Hide" : "Show"}
//           </Button>
//         </div>
//       </Form.Group>

//       {errors.password?.type === "required" && <p className="text-danger mt-1">Password is required</p>}
//       {errors.password?.type === "minLength" && <p className="text-danger mt-1">Password must be at least 8 characters</p>}
//       {errors.password?.type === "maxLength" && <p className="text-danger mt-1">Password must not exceed 15 characters</p>}

//       <Button variant="primary" className="w-100" type="submit">
//         Login
//       </Button>
//     </Form>

//     <div className="text-center my-3">OR</div>

//     <Row>
//       <Col>
//         <Button variant="outline-danger" className="w-100" onClick={handleGoogleLogin}>
//           <i className="fab fa-google"></i> Continue with Google
//         </Button>
//       </Col>
//     </Row>
  
//         </>
//     )
// }


import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Form Submitted:", data);
      const response = await axios.post("http://localhost:5000/login", data, { withCredentials: true });
      if (response.status === 200) {
        reset();
        toast.success("Logging IN!");
        navigate("/userLogin");
      }
    } catch (error) {
      if (error.response) {
        toast.error("Invalid Email or Password");
      }
    }
  };

  const handleGoogleLogin = () => {
    window.open("http://localhost:5000/googleLogin/auth/google", "_self");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <ToastContainer />
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded bg-white shadow-sm">
          {/* Email Input */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
            />
            {errors.email?.type === "required" && <p className="text-danger mt-1">Email is required</p>}
            {errors.email?.type === "pattern" && <p className="text-danger mt-1">Enter a valid email format</p>}
          </div>

          {/* Password Input with Show/Hide Feature */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Password"
                {...register("password", { required: true, minLength: 8, maxLength: 15 })}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password?.type === "required" && <p className="text-danger mt-1">Password is required</p>}
            {errors.password?.type === "minLength" && <p className="text-danger mt-1">Password must be at least 8 characters</p>}
            {errors.password?.type === "maxLength" && <p className="text-danger mt-1">Password must not exceed 15 characters</p>}
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <div className="text-center my-3">OR</div>

        <button className="btn btn-outline-danger w-100" onClick={handleGoogleLogin}>
          <i className="fab fa-google me-2"></i> Continue with Google
        </button>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Register = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();
    const location = useLocation();
    const [step, setStep] = useState(1); // Step 1: Enter email, Step 2: Verify OTP, Step 3: Enter details
    const [getRegType, setRegType] = useState();

    const [showPassword, setShowPassword] = useState(false);

    const [getemail, setEmail] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const googleEmail = params.get("email"); // Get email from URL

        if (googleEmail) {
            setValue("email", googleEmail); // Update the email field in react-hook-form
            setRegType("G");
            console.log("hello", getRegType)
        }
    }, [location, setValue, getRegType]); // Depend on location and setValue

    // 📌 Step 1: Request OTP from backend


    const sendOtp = async (data) => {
        const emailToSend = data?.email || getemail;
        setEmail(emailToSend);

        if (getRegType !== 'G') {
            setRegType("E");
        }

        console.log("Sending OTP to:", emailToSend);


        try {
            const response = await axios.post("http://localhost:5000/email/send", { getemail: emailToSend });
            if (response.status === 200) {
                setStep(2);
                toast.success("OTP sent successfully!");
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 403) {
                    navigate("/login");
                    toast.warn("Email already registered!");
                } else {
                    toast.error(error.response.data || "Error sending OTP. Try again.");
                }
            } else {
                toast.error("Network error. Please check your connection.");
            }
        }
    };

    // 📌 Step 2: Verify OTP with backend
    const verifyOtp = async (data) => {
        console.log("Verifying OTP for:", getemail, "Entered OTP:", data.one);

        try {
            const response = await axios.post("http://localhost:5000/check/verify", { getemail, one: data.one });
            if (response.status === 200) {
                setStep(3);
                toast.success("OTP verified successfully!");
            }
        } catch (error) {
            toast.error("Error verifying OTP.");
            reset();
        }
    };

    // 📌 Step 3: Submit Final Registration Data
    const onSubmit = async (data) => {
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const formData = {
            role: data.role,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            getRegType: getRegType,
            gender: data.gender,
            dob: data.dob,
            timeZone: userTimezone,
            countryCode: data.countryCode,
            mobile: data.mobile
        }
        try {
            const response = await axios.post("http://localhost:5000/register", formData);
            if (response.status === 201) {
                toast.success("register sent");
                reset();
                navigate("/");
            }
        } catch (error) {
            if (error.response.status === 500 && error.response.data === "Error inserting data.") {
                toast.error("error in registering,TRY AGAIN")
            }
            if (error.response.status === 500 && error.response.data === "Internal Server Error.") {
                toast.error("error in registering,TRY AGAIN");
            }
            if (error.response.status === 403) {
                toast.warn("Email already registered")
            }
        }
        console.log("Final Registration Data: ", formData);
        reset();
    };



    const handleGoogleRegister = () => {
        window.open("http://localhost:5000/googleRegister/auth/google", "_self");
    };




    return (
        <>
            <ToastContainer />
            <div className="container mt-4">


                {step === 1 && (
                    <>

                        <form onSubmit={handleSubmit(sendOtp)} className="container p-4 shadow rounded bg-white">
                            <div className="row justify-content-center">
                                <div className="col-md-6 col-sm-8 col-12">
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter email"
                                            {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                                        />
                                        {errors.email?.type === "required" && <p className="text-danger mt-1">Email is required</p>}
                                        {errors.email?.type === "pattern" && <p className="text-danger mt-1">Enter a valid email format</p>}
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100">Get OTP</button>

                                    <button type="button" className="btn btn-outline-danger w-100 mt-2" onClick={handleGoogleRegister}>
                                        <i className="fab fa-google"></i> Continue with Google
                                    </button>
                                </div>
                            </div>
                        </form>



                    </>
                )}

                {step === 2 && (
                    <>

                        <form onSubmit={handleSubmit(verifyOtp)} className="container p-4 shadow rounded bg-white">
                            <div className="row justify-content-center">
                                <div className="col-md-6 col-sm-8 col-12">
                                    <div className="mb-3">
                                        <label htmlFor="otp" className="form-label">Enter OTP</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="otp"
                                            placeholder="Enter OTP"
                                            {...register("one", { required: true })}
                                        />
                                        {errors.one?.type === "required" && <p className="text-danger mt-1">OTP is required</p>}
                                    </div>

                                    <button type="submit" className="btn btn-success w-100">Verify OTP</button>

                                    <button onClick={() => sendOtp({})} className="btn btn-warning w-100 mt-2">Resend OTP</button>
                                </div>
                            </div>
                        </form>


                    </>
                )}

                {step === 3 && (
                    <form onSubmit={handleSubmit(onSubmit)} className="p-4 shadow rounded bg-white w-100">
                        <div className="row mb-3">
                            {/* Role Dropdown */}
                            <div className="col-md-6">
                                <label className="form-label">Role</label>
                                <select className="form-select" {...register("role", { required: true })}>
                                    <option value="">Select Role</option>
                                    <option value="Buying">Buyer</option>
                                    <option value="Selling">Seller</option>
                                </select>
                                {errors.role?.type === "required" && <p className="text-danger mt-1">Role is required</p>}
                            </div>

                            {/* Gender Dropdown */}
                            <div className="col-md-6">
                                <label className="form-label">Gender</label>
                                <select className="form-select" {...register("gender", { required: true })}>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.gender?.type === "required" && <p className="text-danger mt-1">Gender is required</p>}
                            </div>
                        </div>

                        <div className="row mb-3">
                            {/* First Name */}
                            <div className="col-md-6">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" placeholder="Enter first name" {...register("firstName", { required: true, minLength: 2, maxLength: 50 })} />
                                {errors.firstName?.type === "required" && <p className="text-danger mt-1">First Name is required</p>}
                                {errors.firstName?.type === "minLength" && <p className="text-danger mt-1">First Name should be more than one character</p>}
                                {errors.firstName?.type === "maxLength" && <p className="text-danger mt-1">First Name should be within 50 characters</p>}
                            </div>

                            {/* Last Name */}
                            <div className="col-md-6">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" placeholder="Enter last name" {...register("lastName", { required: true, minLength: 2, maxLength: 50 })} />
                                {errors.lastName?.type === "required" && <p className="text-danger mt-1">Last Name is required</p>}
                                {errors.lastName?.type === "minLength" && <p className="text-danger mt-1">Last Name should be more than one character</p>}
                                {errors.lastName?.type === "maxLength" && <p className="text-danger mt-1">Last Name should be within 50 characters</p>}
                            </div>
                        </div>

                        <div className="row mb-3">
                            {/* Email */}
                            <div className="col-md-6">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" readOnly {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
                                {errors.email?.type === "required" && <p className="text-danger mt-1">Email is required</p>}
                                {errors.email?.type === "pattern" && <p className="text-danger mt-1">Enter valid email format</p>}
                            </div>

                            {/* Password */}
                            <div className="col-md-6">
                                <label className="form-label">Password</label>
                                <div className="input-group">
                                    <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Password" {...register("password", { required: true, minLength: 8, maxLength: 15 })} />
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                                {errors.password?.type === "required" && <p className="text-danger mt-1">Password is required</p>}
                                {errors.password?.type === "minLength" && <p className="text-danger mt-1">Password must be at least 8 characters</p>}
                                {errors.password?.type === "maxLength" && <p className="text-danger mt-1">Password must not exceed 15 characters</p>}
                            </div>
                        </div>

                        <div className="row mb-3">
                            {/* Date of Birth */}
                            <div className="col-md-6">
                                <label className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" {...register("dob", { required: true })} />
                                {errors.dob?.type === "required" && <p className="text-danger mt-1">Date of Birth is required</p>}
                            </div>
                        </div>

                        <div className="row mb-3">
                            {/* Country Code */}
                            <div className="col-md-6">
                                <label className="form-label">Country Code</label>
                                <select className="form-select" {...register("countryCode", { required: true })}>
                                    <option value="">Select Country Code</option>
                                    <option value="+1">+1 (USA)</option>
                                    <option value="+91">+91 (India)</option>
                                    <option value="+44">+44 (UK)</option>
                                    <option value="+61">+61 (Australia)</option>
                                </select>
                                {errors.countryCode?.type === "required" && <p className="text-danger mt-1">Country Code is required</p>}
                            </div>

                            {/* Mobile Number */}
                            <div className="col-md-6">
                                <label className="form-label">Mobile Number</label>
                                <input type="text" className="form-control" placeholder="Enter mobile number" {...register("mobile", { required: true })} />
                                {errors.mobile?.type === "required" && <p className="text-danger mt-1">Phone Number is required</p>}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-primary w-100 mt-3">Register</button>
                    </form>

                )}
            </div>
        </>

    );
};

export default Register;

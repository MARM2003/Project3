// import { Button } from "react-bootstrap";
// import { ToastContainer, toast } from 'react-toastify';

// export default function Logout (){

//     const handleLogout = async () => {
//         try {
//             const response = await fetch("http://localhost:5000/logout", {
//                 method: "POST",
//                 credentials: "include", 
//             });
    
//             const data = await response.json();
    
//             if (response.ok) {
//                 toast.success("Logout successful!");
//                 window.location.href = "/";  
//             } else {
//                 alert(data.error);
//             }
//         } catch (error) {
//             console.error("Logout failed:", error);
//             toast.error("An error occurred while logging out.");
//         }
//     };


//     return (
//         <>
//             <ToastContainer/>
//             <Button onClick={handleLogout}>Logout</Button>
//         </>
//     )
// }


import { ToastContainer, toast } from "react-toastify";

export default function Logout() {
    const handleLogout = async () => {
        try {
            const response = await fetch("http://localhost:5000/logout", {
                method: "POST",
                credentials: "include",
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Logout successful!");
                window.location.href = "/";
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error("Logout failed:", error);
            toast.error("An error occurred while logging out.");
        }
    };

    return (
        <>
            <ToastContainer />
            <button className="btn btn-danger" onClick={handleLogout}>
                Logout
            </button>
        </>
    );
}

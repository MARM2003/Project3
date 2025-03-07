import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await fetch("http://localhost:5000/authRoute", {
                    method: "GET",
                    credentials: "include", // Important to send session cookies
                });

                const data = await response.json();
                if (response.ok) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error("Error checking session:", error);
                setIsAuthenticated(false);
            }
        };

        checkSession();
    }, []);

    if (isAuthenticated === null) {
        return <div>Loading...</div>; // Show loading while checking session
    }

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default Auth;

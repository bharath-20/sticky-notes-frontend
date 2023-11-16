import { useEffect } from "react";
import { logoutUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await logoutUser();
        navigate("/login");
      } catch (error) {
        console.error("Logout failed:", error);
        navigate("/login");
      }
    };

    handleLogout();
  }, [navigate]);

  return null; 
};

export default Logout;

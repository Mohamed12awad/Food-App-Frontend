import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const userState = isAuthenticated();
  // console.log(userState);

  if (!userState) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;

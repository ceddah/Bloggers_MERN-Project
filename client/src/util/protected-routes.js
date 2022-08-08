import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, redirectPath, condition, children }) => {
  if (condition === "requireAuth" && !user && !user?._id) {
    return <Navigate to={redirectPath} />;
  } else if (condition === "forbidden" && user && user?._id) {
    return <Navigate to={redirectPath} />;
  } else if (condition === "requireAdmin" && user.role !== "admin") {
    return <Navigate to={redirectPath} />;
  }
  return children;
};

export default ProtectedRoute;

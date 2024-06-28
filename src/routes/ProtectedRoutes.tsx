/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function ProtectedRoutes({ Children }: any) {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = false;
  // eslint-disable-next-line prefer-const
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (isAuthenticated) {
      switch (role) {
        case "user":
          return navigate("/clinic-list");
        case "doctor":
          return navigate("/doctor");
        case "admin":
          return navigate("/admin");
      }
    } else {
      return navigate("/home");
    }
  }, [isAuthenticated, location.pathname, navigate, role]);

  return <Children />;
}

export default ProtectedRoutes;

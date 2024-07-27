/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function PublicRoute({ Children }: any) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated]=useState(true)
  useEffect(function () {
    if (isAuthenticated) {
      return navigate("/");
    }
  },[isAuthenticated,navigate]);
  return <Children />;
}
export { PublicRoute };

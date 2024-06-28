/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useNavigate } from "react-router";

function PublicRoute({ Children }: any) {
  const navigate = useNavigate();
  const isAuthenticated = false;
  useEffect(function () {
    if (isAuthenticated) {
      return navigate("/");
    }
  });
  return <Children />;
}
export { PublicRoute };

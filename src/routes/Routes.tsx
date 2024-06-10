import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProtectedRoutes from "./ProtectedRoutes";
import Admin from "../pages/admin/Admin";
import Login from "../core/components/auth/Login";
import Register from "../core/components/auth/Register";
import Business from "../pages/business/Business";
import User from "../pages/user/User";
import Home from "../pages/home/Home";

const Router = () => {
  const routes = createBrowserRouter([
    {
      path: "/home",
      element: <ProtectedRoutes Children={Home} />,
    },
    {
      path: "/",
      element: <ProtectedRoutes Children={App} />,
      children: [
        {
          path: "/clinic-list",
          element: <User />,
        },
      ],
    },
    {
      path: "/doctor",
      element: <ProtectedRoutes Children={Business} />,
    },
    {
      path: "/admin",
      element: <ProtectedRoutes Children={Admin} />,
    },
    {
      path: "/about-us",
      element: <div>About us</div>,
    },
    {
      path: "/contact-us",
      element: <div>Contact us</div>,
    },
    {
      path: "/login",
      element: <ProtectedRoutes Children={Login} />,
    },
    {
      path: "/signup",
      element: <ProtectedRoutes Children={Register} />,
    },
    {
      path: "*",
      element: <div>Not Found</div>,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Router;

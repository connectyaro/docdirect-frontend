import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import ProtectedRoutes from "./ProtectedRoutes";
import Admin from "../pages/admin/Admin";
import { Register } from "../core/components/auth/Register";
import Business from "../pages/business/Business";
import { Login } from "../core/components/auth/Login";
import { PublicRoute } from "./PublicRoute";
import Conatct from "../pages/user/contact/Contact";
import About from "../pages/user/about/About";
import PageNotFound from "../components/PageNotFound";
import Clinic from "../pages/user/clinic/Clinic";
import Home from "../pages/user/home/Home";

const Router = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute Children={App} />,
      children: [
        { index: true, path: "/", element: <Navigate to="/home" /> },
        { index: true, path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        {  path: "/clinic", element: <ProtectedRoutes Children={Clinic}/> },
        { path: "/contact", element: <Conatct /> },
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
      path: "/login",
      element: <PublicRoute Children={Login} />,
    },
    {
      path: "/signup",
      element: <PublicRoute Children={Register} />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Router;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";

const Router = () => {
  const isAuthenticated = false;
  // eslint-disable-next-line prefer-const
  let role = "user";
  const routes = createBrowserRouter([
    !isAuthenticated
      ? {
          path: "/",
          element: <div>Landing Page</div>,
        }
      : {
          path: "/",
          element: <App />,
          children: [
            role === "user"
              ? {
                  path: "/",
                  element: <div>User</div>,
                }
              : {},
            role === "doctor"
              ? {
                  path: "/",
                  element: <div>Doctor</div>,
                }
              : {},
            role === "admin"
              ? {
                  path: "/",
                  element: <div>Admin</div>,
                }
              : {},
          ],
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
      path: "*",
      element: <div>Not Found</div>,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Router;

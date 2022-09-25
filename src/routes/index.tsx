import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";
import { User } from "../pages/User";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/users",
    element: <User />,
  },
]);

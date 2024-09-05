import ErrorElement from "@/Layout/ErrorElement/ErrorElement";
import MainLayout from "@/Layout/MainLayout/MainLayout";
import Account from "@/Pages/HomePages/Account/Account";
import Home from "@/Pages/HomePages/Home/Home";
import Login from "@/Pages/Login/Login";
import Register from "@/Pages/Register/Register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ],
  },
  // {
  //   path: "/login",
  //   errorElement: <ErrorElement />,
  //   element: <Login />,
  // },
]);

export default router;

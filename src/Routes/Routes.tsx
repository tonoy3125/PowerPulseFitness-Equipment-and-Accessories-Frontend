import ErrorElement from "@/Layout/ErrorElement/ErrorElement";
import MainLayout from "@/Layout/MainLayout/MainLayout";
import ForgotPassword from "@/Pages/ForgotPassword/ForgotPassword";
import Account from "@/Pages/HomePages/Account/Account";
import Home from "@/Pages/HomePages/Home/Home";
import Login from "@/Pages/Login/Login";
import Products from "@/Pages/Products/Products";
import SingleProduct from "@/Pages/Products/SingleProduct";
import Register from "@/Pages/Register/Register";
import ResetPassword from "@/Pages/ResetPassword/ResetPassword";
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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
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
      {
        path: "/login/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/login/reset-password",
        element: <ResetPassword />,
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

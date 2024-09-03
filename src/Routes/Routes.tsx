import ErrorElement from "@/Layout/ErrorElement/ErrorElement";
import MainLayout from "@/Layout/MainLayout/MainLayout";
import Home from "@/Pages/HomePages/Home/Home";
import Login from "@/Pages/Login/Login";
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
    ],
  },
  // {
  //   path: "/login",
  //   errorElement: <ErrorElement />,
  //   element: <Login />,
  // },
]);

export default router;

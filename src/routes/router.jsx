import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AddFindRoommate from "../pages/AddFindRoommate";
import BrowserListing from "../pages/BrowserListing";
import Details from "../pages/Details";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Loader from "../pages/Loader";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import PrivateRoute from "../privateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/users"),
        hydrateFallbackElement: <Loader></Loader>,
        Component: Home,
      },
      {
        path: "/find-roommate",
        element: (
          <PrivateRoute>
            <AddFindRoommate />
          </PrivateRoute>
        ),
      },
      {
        path: "/users/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/users/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/browser-listing",
        Component: BrowserListing,
      },
      {
        path: "/my-listing",
        element: (
          <PrivateRoute>
            <BrowserListing />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);

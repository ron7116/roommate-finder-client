import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AboutUs from "../pages/AboutUs";
import AddFindRoommate from "../pages/AddFindRoommate";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import DashboardHome from "../pages/DashboardHome";
import Details from "../pages/Details";
import Error from "../pages/Error";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import Loader from "../pages/Loader";
import LogIn from "../pages/LogIn";
import MyListing from "../pages/MyListing";
import Services from "../pages/Services";
import SignUp from "../pages/SignUp";
import Update from "../pages/Update";
import PrivateRoute from "../privateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("https://roomate-finder-server.vercel.app/users"),
        hydrateFallbackElement: <Loader></Loader>,
        Component: Home,
      },
      {
        path: "/users/:id",
        loader: ({ params }) =>
          fetch(`https://roomate-finder-server.vercel.app/users/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: <Details></Details>,
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`https://roomate-finder-server.vercel.app/users/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
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
    path: "/dashboard",
    loader: () => fetch("https://roomate-finder-server.vercel.app/users"),
    hydrateFallbackElement: <Loader></Loader>,
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        loader: () => fetch("https://roomate-finder-server.vercel.app/users"),
        hydrateFallbackElement: <Loader></Loader>,
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "find-roommate",
        element: <AddFindRoommate />,
      },
      {
        path: "my-listing",
        loader: () => fetch("https://roomate-finder-server.vercel.app/users"),
        hydrateFallbackElement: <Loader></Loader>,
        element: <MyListing></MyListing>,
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ListingPage from "../pages/ListingPage";
import PageNotFound from "../pages/PageNotFound";
import { PathContants } from "../constants/path-constants";

const router = createBrowserRouter([
  {
    path: PathContants.HOME_PAGE,
    Component: HomePage,
  },
  {
    path: PathContants.LISTING_PAGE,
    Component: ListingPage,
  },
  {
    path: PathContants.PAGE_NOT_FOUND,
    Component: PageNotFound,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

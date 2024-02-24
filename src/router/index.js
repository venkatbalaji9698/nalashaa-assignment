import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import StoryPage from "../pages/StoryPage";
import PageNotFound from "../pages/PageNotFound";
import { PathContants } from "../constants/path-constants";

const router = createBrowserRouter([
  {
    path: PathContants.HOME_PAGE,
    Component: HomePage,
  },
  {
    path: PathContants.STORY_PAGE,
    Component: StoryPage,
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

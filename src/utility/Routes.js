import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Courses from "../components/Courses/Courses";
import Blogs from "../components/Blog/Blogs";
import Fqa from "../components/Fqa/Fqa";
import Login from "../components/Login/Login";
import SignUp from "../components/Sign-Up/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/courses", element: <Courses /> },
      { path: "/blog", element: <Blogs /> },
      { path: "/following-question-answer", element: <Fqa /> },
      { path: "/sign-in", element: <Login /> },
      { path: "/create-account", element: <SignUp /> },
    ],
  },
]);

export default router;

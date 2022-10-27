import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Courses from "../components/Courses/Courses";
import Blogs from "../components/Blog/Blogs";
import Fqa from "../components/Fqa/Fqa";
import Login from "../components/Login/Login";
import SignUp from "../components/Sign-Up/SignUp";
import Home from "../components/Home/Home";
import CouresDetails from '../components/CourseDetails/CouresDetails';
import CheackOut from "../components/CheckOut/CheackOut";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ErrorPage from "./ErrorPage";
const router = createBrowserRouter([
  {   
    path:'/',
    element: <Root />,
    errorElement: <ErrorPage />,    
    children: [
      { path: "/", element: <Home />, loader:async()=>fetch('https://skill-data.vercel.app/home')},
      { path: "/courses", element: <Courses />,loader:async()=>fetch('https://skill-data.vercel.app/course') },
      { path: "/course/:courseID", element: <CouresDetails />, loader:async({params})=>fetch(`https://skill-data.vercel.app/course/${params.courseID}`)},
      { path: "/blog", element: <Blogs /> },
      { path: "/frequently-question-answer", element: <Fqa /> },
      { path: "/sign-in", element: <Login /> },
      { path: "/create-account", element: <SignUp /> },
      { path: "/checkout/:courseID", element:<PrivateRoute><CheackOut /></PrivateRoute>,loader:async({params})=>fetch(`https://skill-data.vercel.app/course/${params.courseID}`)},
    ],
  },
]);

export default router;

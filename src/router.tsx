import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import Documents from "./design/documents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Documents />,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
    ],
  },
  {
    path: "/notloggedin",
    element: <h1>Cool information why you want this product. the final path will be /</h1>,
  }
]);

export default router;
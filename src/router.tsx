import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import Documents from "./design/documents";
import Advertise from "./advertise/advertise";

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
        path: "/document/:documentId",
        element: <h1>Invoice</h1>,
      },
    ],
  },
  {
    path: "/notloggedin",
    element: <Advertise />,
  }
]);

export default router;
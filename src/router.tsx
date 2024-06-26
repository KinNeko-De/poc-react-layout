import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import Documents from "./design/documents";
import Advertise from "./advertise/advertise";
import { TitleManager } from "./features/title/TitleManager";
import Document from "./design/document";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Documents />,
      },
      {
        path: "/document/:documentId",
        element: <Document revision={1} language={"kk"} description={"kk"} />,
      },
    ],
  },
  {
    path: "/notloggedin",
    element: <Advertise />,
  },
  {
    path: "/foiking-redux",
    element: <TitleManager />,
  }
]);

export default router;
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  contactCreateAction,
  contactDeleteAction,
  contactUpdateAction,
  updateFovourate,
} from "./action/ContactAction";
import Contact from "./Contact";
import EditContact from "./EditContact";
import ErrorPage from "./ErrorPage";
import Index from "./Index";
import "./index.css";
import { getContactloader, getContactsLoader } from "./loader/contactLoader";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: contactCreateAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "contacts/:contactId",
            loader: getContactloader,
            action: updateFovourate,
            element: <Contact />,
          },
          {
            path: "contacts/:contactId/edit",
            loader: getContactloader,
            action: contactUpdateAction,
            element: <EditContact />,
          },
          {
            path: "contacts/:contactId/destroy",
            errorElement: <div>Oops! There was an error.</div>,
            action: contactDeleteAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

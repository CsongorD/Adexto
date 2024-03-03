import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import HomePage from "./Pages/HomePage/HomePage";
import ModelsPage from "./Pages/ModelsPage/ModelsPage";
import TypesPage from "./Pages/TypesPage/TypesPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";

import RootLayout from "./layouts/RootLayout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/betonske-ograde", element: <ModelsPage /> },
      { path: "/cenovnik", element: <TypesPage /> },
      { path: "/galerija", element: <GalleryPage /> },
      { path: "/kontakt", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

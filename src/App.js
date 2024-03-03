import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import ModelsPage from "./pages/ModelsPage/ModelsPage";
import TypesPage from "./pages/TypesPage/TypesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";

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

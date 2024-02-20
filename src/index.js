import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import HomePage from "./Pages/HomePage/HomePage";
// import ModelsPage from "./Pages/ModelsPage/ModelsPage";
// import TypesPage from "./Pages/TypesPage/TypesPage";
// import ContactPage from "./Pages/ContactPage/ContactPage";
// import GalleryPage from "./Pages/GalleryPage/GalleryPage";
import Loading from "./Components/Loading/Loading";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const ModelsPage = lazy(() => import("./Pages/ModelsPage/ModelsPage"));
const TypesPage = lazy(() => import("./Pages/TypesPage/TypesPage"));
const ContactPage = lazy(() => import("./Pages/ContactPage/ContactPage"));
const GalleryPage = lazy(() => import("./Pages/GalleryPage/GalleryPage"));

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/betonske-ograde", element: <ModelsPage /> },
  { path: "/cenovnik", element: <TypesPage /> },
  { path: "/galerija", element: <GalleryPage /> },
  { path: "/kontakt", element: <ContactPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

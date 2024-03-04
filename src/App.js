import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

import RootLayout from "./layouts/RootLayout/RootLayout";
import Loading from "./components/Loading/Loading";

import HomePage from "./pages/HomePage/HomePage";
const ModelsPage = lazy(() => import("./pages/ModelsPage/ModelsPage"));
const TypesPage = lazy(() => import("./pages/TypesPage/TypesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage/GalleryPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/betonske-ograde",
        element: (
          <Suspense fallback={<Loading />}>
            <ModelsPage />
          </Suspense>
        ),
      },
      {
        path: "/cenovnik",
        element: (
          <Suspense fallback={<Loading />}>
            <TypesPage />
          </Suspense>
        ),
      },
      {
        path: "/galerija",
        element: (
          <Suspense fallback={<Loading />}>
            <GalleryPage />
          </Suspense>
        ),
      },
      {
        path: "/kontakt",
        element: (
          <Suspense fallback={<Loading />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loading />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;

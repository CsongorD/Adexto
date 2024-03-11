import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

import RootLayout from "./layouts/RootLayout/RootLayout";
import Loading from "./components/Loading/Loading";

import HomeLayout from "./layouts/HomeLayout";
const ModelsLayout = lazy(() => import("./layouts/ModelsLayout"));
const TypesLayout = lazy(() => import("./layouts/TypesLayout"));
const ContactLayout = lazy(() => import("./layouts/ContactLayout"));
const GalleryLayout = lazy(() => import("./layouts/GalleryLayout"));
const NotFoundLayout = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/modeli",
        element: (
          <Suspense fallback={<Loading />}>
            <ModelsLayout />
          </Suspense>
        ),
      },
      {
        path: "/cenovnik",
        element: (
          <Suspense fallback={<Loading />}>
            <TypesLayout />
          </Suspense>
        ),
      },
      {
        path: "/galerija",
        element: (
          <Suspense fallback={<Loading />}>
            <GalleryLayout />
          </Suspense>
        ),
      },
      {
        path: "/kontakt",
        element: (
          <Suspense fallback={<Loading />}>
            <ContactLayout />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loading />}>
            <NotFoundLayout />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;

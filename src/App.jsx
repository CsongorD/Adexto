import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout/RootLayout";

import HomeLayout from "./layouts/HomeLayout";
import ModelsLayout from "./layouts/ModelsLayout";
import TypesLayout from "./layouts/TypesLayout";
import ContactLayout from "./layouts/ContactLayout";
import GalleryLayout from "./layouts/GalleryLayout";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomeLayout />,
      },
      {
        path: "modeli",
        element: <ModelsLayout />,
      },
      {
        path: "cenovnik",
        element: <TypesLayout />,
      },
      {
        path: "galerija",
        element: <GalleryLayout />,
      },
      {
        path: "kontakt",
        element: <ContactLayout />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;

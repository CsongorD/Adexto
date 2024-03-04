import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout/RootLayout";

import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import ModelsPage from "./pages/ModelsPage";
import TypesPage from "./pages/TypesPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";

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

const App = () => <RouterProvider router={router} />;
export default App;

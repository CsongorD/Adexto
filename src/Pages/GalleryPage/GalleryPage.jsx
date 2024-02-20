import "./GalleryPage.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "../../Components/Header/Header";
import Gallery from "../../Components/Gallery/Gallery";
import Footer from "../../Components/Footer/Footer";

const GalleryPage = () => {
  const queryClient = new QueryClient();
  return (
    <div className="gallery-page">
      <Header />
      <QueryClientProvider client={queryClient}>
        <Gallery />
      </QueryClientProvider>
      <Footer />
    </div>
  );
};

export default GalleryPage;

import GalleryList from "../GalleryList/GalleryList";

const Gallery = () => {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Naša <span className="text-gradient">Galerija</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Pogledajte realizovane projekte i inspirišite se za svoj prostor
          </p>
        </div>
        <GalleryList />
      </div>
    </div>
  );
};

export default Gallery;
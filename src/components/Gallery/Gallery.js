import GalleryList from "../GalleryList/GalleryList";

const Gallery = () => {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="mb-8 text-center sm:mb-12 lg:mb-16">
          <h1 className="mb-4 text-2xl font-bold text-primary-800 sm:text-3xl lg:text-4xl">
            Naša <span className="text-gradient">Galerija</span>
          </h1>
          <p className="mx-auto max-w-3xl px-4 text-base text-primary-600 sm:text-lg lg:text-xl">
            Pogledajte realizovane projekte i inspirišite se za svoj prostor
          </p>
        </div>
        <GalleryList />
      </div>
    </div>
  );
};

export default Gallery;

import Image from "../Image/Image";

const GalleryImage = ({ image: { path, small }, index }) => {
  const priority = index < 6 ? true : false;

  return (
    <div className="group cursor-pointer">
      <div className="aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 hover:shadow-lg transition-all duration-500 hover:scale-[1.02]">
        <Image
          alt={`gallery-image-${index}`}
          src={path}
          small={small}
          priority={priority}
        />
      </div>
    </div>
  );
};

export default GalleryImage;
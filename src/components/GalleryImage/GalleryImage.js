import Image from "../Image/Image";

const GalleryImage = ({ image: { path, small }, index }) => {
  const priority = index < 6 ? true : false;

  return (
    <div className="card p-2 group hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="aspect-[16/10] rounded-lg overflow-hidden bg-gray-100">
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
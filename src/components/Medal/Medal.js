import Image from "../Image/Image";

const Medal = ({ medal: { path, small } }) => {
  return (
    <div className="h-24 w-24 cursor-pointer transition-transform duration-300 hover:scale-110">
      <div className="h-full w-full overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <Image src={path} small={small} alt="medal" priority={false} />
      </div>
    </div>
  );
};

export default Medal;

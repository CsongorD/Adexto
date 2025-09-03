import Image from "../Image/Image";

const Medal = ({ medal: { path, small } }) => {
  return (
    <div className="w-24 h-24 hover:scale-110 transition-transform duration-300 cursor-pointer">
      <div className="w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image src={path} small={small} alt="medal" priority={false} />
      </div>
    </div>
  );
};

export default Medal;
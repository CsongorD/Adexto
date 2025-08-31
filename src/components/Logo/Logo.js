"use client";
import useImages from "../../hooks/useImages";
import Image from "../Image/Image";
import ImageLoading from "../ImageLoading/ImageLoading";
import NavButton from "../NavButton/NavButton";

const Logo = () => {
  const [logo, error] = useImages("logo");

  if (error) throw error;

  return (
    <div className="flex items-center">
      <NavButton
        className="logo-no-focus flex items-center space-x-2 hover:opacity-90 transition-all duration-300"
        to="/"
        text={
          <>
            <div className="w-8 h-8 relative">
              {!logo ? (
                <ImageLoading />
              ) : (
                <Image
                  src={logo[0]?.path}
                  small={logo[0]?.small}
                  alt="adexto-logo"
                  priority={true}
                 className="filter brightness-0 invert"
                />
              )}
            </div>
            <h2 className="text-xl font-bold text-white tracking-wide">
              ADEXTO
            </h2>
          </>
        }
      />
    </div>
  );
};

export default Logo;
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
        className="logo-no-focus flex items-center space-x-3 transition-opacity duration-300 hover:opacity-80"
        to="/"
        text={
          <>
            <div className="relative h-8 w-8 sm:h-10 sm:w-10">
              {!logo ? (
                <ImageLoading />
              ) : (
                <Image
                  src={logo[0]?.path}
                  small={logo[0]?.small}
                  alt="adexto-logo"
                  priority={true}
                  className="brightness-0 invert filter"
                />
              )}
            </div>
            <h2 className="text-lg font-bold tracking-tight text-white sm:text-xl lg:text-2xl">
              ADEXTO
            </h2>
          </>
        }
      />
    </div>
  );
};

export default Logo;

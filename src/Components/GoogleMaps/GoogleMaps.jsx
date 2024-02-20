import { useEffect, useState } from "react";
import "./GoogleMaps.css";

const GoogleMaps = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    handleMapLoad();
  }, []);

  const [link, setLink] = useState("");
  function handleMapLoad() {
    setLink(
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1488.2855564202175!2d20.384698427983984!3d45.338159537911395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475add5431a87b1b%3A0x96e59aa3279277f3!2sadexto%20doo!5e1!3m2!1shu!2shu!4v1702730565578!5m2!1shu!2shu"
    );
    setIsMapLoaded(true);
  }

  return (
    <>
      {isMapLoaded ? (
        <div className="map-container">
          <iframe
            className="maps"
            title="Google Maps"
            src={link}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={handleMapLoad}
          ></iframe>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default GoogleMaps;

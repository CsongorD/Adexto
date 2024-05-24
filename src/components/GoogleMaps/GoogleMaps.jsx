import { useEffect, useState } from "react";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import "./GoogleMaps.css";

const GoogleMaps = () => {
  const [mapLink, setMapLink] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMapLink();
  }, []);

  const fetchMapLink = async () => {
    try {
      const res =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.9577581709364!2d20.383021975752488!3d45.33801934184959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475add5431a87b1b%3A0x96e59aa3279277f3!2sadexto%20doo!5e1!3m2!1shu!2srs!4v1716533845705!5m2!1shu!2srs";
      setMapLink(res);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching map:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="map-container">
      {isLoading ? (
        <LoadingIcon />
      ) : (
        <iframe
          className="map"
          title="Google Maps"
          src={mapLink}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          lang="sr"
          language="sr"
          region="RS"
        />
      )}
    </div>
  );
};

export default GoogleMaps;

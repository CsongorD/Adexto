import styles from "./GoogleMaps.module.css";

const GoogleMaps = () => {
  const src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.9871453408186!2d20.38301661189022!3d45.33801934172811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475add5431a87b1b%3A0x96e59aa3279277f3!2sadexto%20doo!5e1!3m2!1ssr!2srs!4v1742041195907!5m2!1ssr!2srs";
  return (
    <div className={styles["map-container"]}>
      <iframe
        title="Google Maps"
        className={styles.map}
        src={src}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-hidden="false"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;

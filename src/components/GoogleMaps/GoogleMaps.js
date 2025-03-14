import styles from "./GoogleMaps.module.css";

const GoogleMaps = () => {
  return (
    <div className={styles["map-container"]}>
      <iframe
        className={styles.map}
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.5346162234255!2d20.383021975752488!3d45.338019341849595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475add5431a87b1b%3A0x96e59aa3279277f3!2sadexto%20doo!5e0!3m2!1ssr!2srs!4v1716535461104!5m2!1ssr!2srs"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        lang="sr"
        region="RS"
      />
    </div>
  );
};

export default GoogleMaps;

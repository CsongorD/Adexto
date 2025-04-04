import styles from "./ContactCard.module.css";

const ContactCard = () => {
  return (
    <div className={styles["contact-card"]}>
      <div className={styles["contact-info"]}>
        <h2 className={styles["card-title"]}>ADEXTO DOO</h2>
        <address>
          <p>Servo Mihalja BB, 23206 Zrenjanin (Mužlja)</p>
          <p>
            Tel: <a href="tel:+381668822339">+381 66 8822 339</a>
          </p>
          <p>
            Email: <a href="mailto:info@adexto.com">info@adexto.com</a>
          </p>
          <p>Matični broj: 20289635</p>
          <p>PIB: 105002449</p>
        </address>
      </div>

      <div className={styles["open-hours"]}>
        <h2 className={styles["card-title"]}>RADNO VREME!</h2>

        <p>Ponedeljak - Petak: 07:00 - 15:00</p>
        <p>Subota, nedelja i praznici: po dogovoru.</p>
        <br></br>
        <p>Molimo Vas da zovete samo tokom našeg radnog vremena.</p>
      </div>

      <div className={styles["additional-info"]}>
        <h2 className={styles["card-title"]}>PRAVAC!</h2>
        <p>
          Krenite prema Mužlji iz Zrenjanina. Kod Gomexa skrenite desno u ulicu
          Servo Mihalja. Vozite 2.5 km dok ne vidite žuti objekat sa leve
          strane.
        </p>
      </div>
    </div>
  );
};

export default ContactCard;

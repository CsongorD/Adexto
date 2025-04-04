import FooterItem from "../FooterItem/FooterItem";
import LocationIcon from "../Icons/LocationIcon";
import MailIcon from "../Icons/MailIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import styles from "./Footer.module.css";

const footerData = [
  {
    icon: <LocationIcon className={styles["location-icon"]} />,
    title: "Lokacija",
    info: "Servo Mihalja BB, 23206 Zrenjanin (Mužlja)",
  },
  {
    icon: <PhoneIcon className={styles["phone-icon"]} />,
    title: "Telefon",
    info: "+381 66 8822 339",
  },
  {
    icon: <MailIcon className={styles["mail-icon"]} />,
    title: "Mail",
    info: "info@adexto.com",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles["footer-title"]}>ADEXTO D.O.O</p>
      <div className={styles["footer-container"]}>
        {footerData.map((item, index) => (
          <FooterItem
            key={index}
            icon={item.icon}
            title={item.title}
            info={item.info}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;

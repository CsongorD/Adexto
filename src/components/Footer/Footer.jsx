import "./Footer.css";
import FooterItem from "../FooterItem/FooterItem";
import PhoneIcon from "../Icons/PhoneIcon";
import MailIcon from "../Icons/MailIcon";
import LocationIcon from "../Icons/LocationIcon";

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer-title">ADEXTO D.O.O</h3>
      <div className="footer-container">
        <FooterItem
          icon={<LocationIcon />}
          title="Lokacija"
          info="Servo Mihalja BB, 23206 Zrenjanin (Mužlja)"
        />
        <FooterItem
          icon={<PhoneIcon />}
          title="Telefon"
          info="+381 66 8822 339"
        />
        <FooterItem icon={<MailIcon />} title="Mail" info="info@adexto.com" />
      </div>
    </footer>
  );
};
export default Footer;

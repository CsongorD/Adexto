import FooterItem from "../FooterItem/FooterItem";
import LocationIcon from "../Icons/LocationIcon";
import MailIcon from "../Icons/MailIcon";
import PhoneIcon from "../Icons/PhoneIcon";

const footerData = [
  {
    icon: <LocationIcon className="w-6 h-6 text-primary-400" />,
    title: "Lokacija",
    info: "Servo Mihalja BB, 23206 Zrenjanin (Mužlja)",
  },
  {
    icon: <PhoneIcon className="w-6 h-6 text-primary-400" />,
    title: "Telefon",
    info: "+381 66 8822 339",
  },
  {
    icon: <MailIcon className="w-6 h-6 text-primary-400" />,
    title: "Email",
    info: "info@adexto.com",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-3">
              ADEXTO D.O.O
            </h3>
            <p className="text-gray-400 text-sm">
              Vrhunski kvalitet betonskih ograda
            </p>
          </div>
          
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-3 gap-8">
              {footerData.map((item, index) => (
                <FooterItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  info={item.info}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Adexto D.O.O. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
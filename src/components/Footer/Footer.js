import FooterItem from "../FooterItem/FooterItem";
import LocationIcon from "../Icons/LocationIcon";
import MailIcon from "../Icons/MailIcon";
import PhoneIcon from "../Icons/PhoneIcon";

const footerData = [
  {
    icon: <LocationIcon className="h-6 w-6 text-primary-400" />,
    title: "Lokacija",
    info: "Company Location",
  },
  {
    icon: <PhoneIcon className="h-6 w-6 text-primary-400" />,
    title: "Telefon",
    info: "Company Phone Number",
  },
  {
    icon: <MailIcon className="h-6 w-6 text-primary-400" />,
    title: "Email",
    info: "company@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="gradient-bg border-t border-primary-800/20">
      <div className="container-custom section-padding">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="mb-2 text-2xl font-bold text-white">Company Name</h3>
            <p className="text-primary-300">
              Vrhunski kvalitet betonskih ograda
            </p>
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <div className="grid gap-6 sm:grid-cols-3">
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

        <div className="mt-12 border-t border-primary-700 pt-8 text-center">
          <p className="text-primary-300">
            ©2025 Company Name. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

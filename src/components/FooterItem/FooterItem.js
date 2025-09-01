const FooterItem = ({ icon, title, info }) => {
  return (
    <div className="group flex items-start space-x-3">
      <div className="mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-sm leading-relaxed text-gray-400">{info}</p>
      </div>
    </div>
  );
};

export default FooterItem;

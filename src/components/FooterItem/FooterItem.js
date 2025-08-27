const FooterItem = ({ icon, title, info }) => {
  return (
    <div className="flex items-start space-x-3 group">
      <div className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="text-white font-semibold">
          {title}
        </h4>
        <p className="text-gray-400 text-sm leading-relaxed">
          {info}
        </p>
      </div>
    </div>
  );
};

export default FooterItem;
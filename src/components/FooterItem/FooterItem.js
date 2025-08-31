const FooterItem = ({ icon, title, info }) => {
  return (
    <div className="space-y-3 group">
      <div className="flex items-center space-x-2 group-hover:text-primary-400 transition-colors duration-300">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <h4 className="text-white font-medium text-sm">
          {title}
        </h4>
      </div>
      <div className="pl-8">
        <p className="text-gray-400 text-sm leading-relaxed">
          {info}
        </p>
      </div>
    </div>
  );
};

export default FooterItem;
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
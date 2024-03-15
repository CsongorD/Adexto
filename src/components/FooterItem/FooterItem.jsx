import "./FooterItem.css";

const FooterItem = ({ icon, title, info }) => {
  return (
    <div className="info-container">
      <div className="icon-container">{icon}</div>
      <div className="info-text">
        <p className="footer-info-title">{title}</p>
        <p className="footer-info">{info}</p>
      </div>
    </div>
  );
};

export default FooterItem;

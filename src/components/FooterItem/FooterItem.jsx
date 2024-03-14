import "./FooterItem.css";

const FooterItem = ({ icon, title, info }) => {
  return (
    <div className="info-container">
      <div className="icon-container">{icon}</div>
      <div className="info-text">
        <h3 className="footer-info-title">{title}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default FooterItem;

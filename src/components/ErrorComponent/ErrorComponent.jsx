import "./ErrorComponent.css";
const ErrorComponent = ({ text }) => {
  return <div className="error">No {text} found.</div>;
};
export default ErrorComponent;

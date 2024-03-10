import "./ErrorComponent.css";

const ErrorComponent = ({ error }) => {
  return <div className="error-container">Error: {error}</div>;
};
export default ErrorComponent;

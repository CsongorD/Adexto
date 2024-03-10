import "./MedalList.css";
import Medal from "../Medal/Medal";

const MedalList = ({ medals }) => {
  return (
    <div className="medal-list">
      {medals?.map((medal, index) => (
        <Medal medal={medal} key={index} />
      ))}
    </div>
  );
};
export default MedalList;

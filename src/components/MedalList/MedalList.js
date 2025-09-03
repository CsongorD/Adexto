import Medal from "../Medal/Medal";

const MedalList = ({ medals = [] }) => {
  return (
    <div className="flex flex-col space-y-6">
      {medals.map((medal, index) => (
        <div
          key={index}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <Medal medal={medal} />
        </div>
      ))}
    </div>
  );
};

export default MedalList;

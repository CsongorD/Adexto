import "./ColumnList.css";
import useImages from "../../hooks/useImages";
import Column from "../Column/Column";
import ImageLoading from "../ImageLoading/ImageLoading";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const ColumnList = () => {
  const [columns, error] = useImages("column");

  if (error) {
    return <ErrorComponent error={error.message} />;
  }
  if (!columns) {
    return <ImageLoading />;
  }

  return (
    <div className="column-list">
      {columns?.map((column, index) => (
        <Column column={column} key={index} />
      ))}
    </div>
  );
};
export default ColumnList;

import useImages from "../../hooks/useImages";
import Column from "../Column/Column";
import ImageLoading from "../ImageLoading/ImageLoading";
import styles from "./ColumnList.module.css";

const ColumnList = () => {
  const [columns, error] = useImages("column");

  if (error) throw error;
  if (!columns) return <ImageLoading />;

  return (
    <div className={styles["column-list"]}>
      {columns?.map((column, index) => (
        <Column column={column} key={index} />
      ))}
    </div>
  );
};
export default ColumnList;

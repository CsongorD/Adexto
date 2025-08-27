import useImages from "../../hooks/useImages";
import Column from "../Column/Column";
import ImageLoading from "../ImageLoading/ImageLoading";

const ColumnList = () => {
  const [columns, error] = useImages("column");

  if (error) throw error;

  return (
    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {!columns ? (
        <div className="col-span-full flex justify-center py-12">
          <ImageLoading />
        </div>
      ) : (
        columns?.map((column, index) => (
          <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
            <Column column={column} />
          </div>
        ))
      )}
    </div>
  );
};

export default ColumnList;
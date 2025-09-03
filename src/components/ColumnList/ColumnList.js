import useImages from "../../hooks/useImages";
import Column from "../Column/Column";
import ImageLoading from "../ImageLoading/ImageLoading";

const ColumnList = () => {
  const [columns, error] = useImages("column");

  if (error) throw error;

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      {!columns ? (
        <div className="col-span-full flex justify-center py-8 sm:py-12">
          <ImageLoading />
        </div>
      ) : (
        columns?.map((column, index) => (
          <div
            key={index}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Column column={column} />
          </div>
        ))
      )}
    </div>
  );
};

export default ColumnList;

import useImages from "../../hooks/useImages";
import ImageLoading from "../ImageLoading/ImageLoading";
import Type from "../Type/Type";

const TypeList = () => {
  const [types, error] = useImages("type");

  if (error) throw error;

  return (
    <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {!types ? (
        <div className="col-span-full flex justify-center py-12">
          <ImageLoading />
        </div>
      ) : (
        types.map((type, index) => (
          <div key={type.id || index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
            <Type type={type} index={index} />
          </div>
        ))
      )}
    </div>
  );
};

export default TypeList;
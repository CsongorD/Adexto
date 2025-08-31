import { forwardRef } from "react";
import TypeList from "../TypeList/TypeList";

const TypeTable = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Betonske <span className="text-gradient">Ploče</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Širok izbor kvalitetnih betonskih ploča za sve vaše potrebe
          </p>
        </div>
        <TypeList />
      </div>
    </section>
  );
});

TypeTable.displayName = "TypeTable";
export default TypeTable;
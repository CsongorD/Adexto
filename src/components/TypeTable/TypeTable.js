import { forwardRef } from "react";
import TypeList from "../TypeList/TypeList";

const TypeTable = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-8 text-center sm:mb-12 lg:mb-16">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            Betonske <span className="text-gradient">Ploče</span>
          </h1>
          <p className="mx-auto max-w-3xl px-4 text-base text-gray-600 sm:text-lg lg:text-xl">
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

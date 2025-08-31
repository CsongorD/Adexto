import { forwardRef } from "react";
import ColumnList from "../ColumnList/ColumnList";

const ColumnTable = forwardRef((_props, ref) => {
  return (
    <section ref={ref} className="section-padding bg-grey-50">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Betonski <span className="text-gradient">Stubovi</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Čvrsti i pouzdani stubovi za vašu betonsku ogradu
          </p>
        </div>
        <ColumnList />
      </div>
    </section>
  );
});

ColumnTable.displayName = "ColumnTable";
export default ColumnTable;
"use client";

import { forwardRef } from "react";
import ColumnList from "../ColumnList/ColumnList";

const ColumnTable = forwardRef((_props, ref) => {
  return (
    <section ref={ref} className="section-padding bg-grey-50">
      <div className="container-custom">
        <div className="mb-8 text-center sm:mb-12 lg:mb-16">
          <h1 className="mb-4 text-2xl font-bold text-primary-800 sm:text-3xl lg:text-4xl">
            Betonski <span className="text-gradient">Stubovi</span>
          </h1>
          <p className="mx-auto max-w-3xl px-4 text-base text-primary-600 sm:text-lg lg:text-xl">
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

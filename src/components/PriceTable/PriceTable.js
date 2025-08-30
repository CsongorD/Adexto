"use client";

import React, { useRef } from "react";
import ColumnTable from "../ColumnTable/ColumnTable";
import ColumnIcon from "../Icons/ColumnIcon";
import InfoIcon from "../Icons/InfoIcon";
import PlateIcon from "../Icons/PlateIcon";
import PriceInfo from "../PriceInfo/PriceInfo";
import TypeTable from "../TypeTable/TypeTable";

export default function PriceTable() {
  const typeSectionRef = useRef();
  const columnSectionRef = useRef();
  const infoSectionRef = useRef();

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current?.offsetTop - 100,
      behavior: "smooth",
    });
  };

  const sections = [
    {
      icon: <PlateIcon className="w-6 h-6" />,
      text: "Ploče",
      ref: typeSectionRef,
    },
    {
      icon: <ColumnIcon className="w-6 h-6" />,
      text: "Stubovi",
      ref: columnSectionRef,
    },
    {
      icon: <InfoIcon className="w-6 h-6" />,
      text: "Info",
      ref: infoSectionRef,
    },
  ];

  return (
    <div className="relative">
      {/* Floating Navigation */}
      <div className="fixed left-2 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-md border border-gray-100 p-1 2xl:p-2">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(section.ref)}
              className="flex items-center space-x-2 w-full p-2 lg:p-1.5 xl:p-2 2xl:p-3 rounded-md hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 group"
            >
              <div className="text-gray-500 group-hover:text-primary-600 transition-colors duration-300 w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6">
                {section.icon}
              </div>
              <span className="text-xs xl:text-sm 2xl:text-base font-medium text-gray-600 group-hover:text-primary-600 transition-colors duration-300 whitespace-nowrap hidden xl:inline">
                {section.text}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="container-custom px-4">
          <div className="flex space-x-1 py-4">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(section.ref)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 flex-1 justify-center"
              >
                <div className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                  {section.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors duration-300">
                  {section.text}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <TypeTable ref={typeSectionRef} />
      <ColumnTable ref={columnSectionRef} />
      <PriceInfo ref={infoSectionRef} />
    </div>
  );
}
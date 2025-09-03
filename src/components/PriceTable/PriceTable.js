"use client";

import { useRef } from "react";
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
      icon: <PlateIcon className="h-6 w-6" />,
      text: "Ploče",
      ref: typeSectionRef,
    },
    {
      icon: <ColumnIcon className="h-6 w-6" />,
      text: "Stubovi",
      ref: columnSectionRef,
    },
    {
      icon: <InfoIcon className="h-6 w-6" />,
      text: "Info",
      ref: infoSectionRef,
    },
  ];

  return (
    <div className="relative">
      {/* Floating Navigation */}
      <div className="fixed left-1 top-1/2 z-40 hidden -translate-y-1/2 transform sm:left-2 lg:block">
        <div className="rounded-lg border border-gray-100 bg-white/95 p-1 shadow-md backdrop-blur-sm 2xl:p-2">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(section.ref)}
              className="group flex w-full items-center space-x-1 rounded-md p-1.5 transition-all duration-300 hover:bg-primary-50 hover:text-primary-600 sm:space-x-2 lg:p-1.5 xl:p-2 2xl:p-3"
            >
              <div className="h-3 w-3 text-gray-500 transition-colors duration-300 group-hover:text-primary-600 sm:h-4 sm:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6">
                {section.icon}
              </div>
              <span className="hidden whitespace-nowrap text-xs font-medium text-gray-600 transition-colors duration-300 group-hover:text-primary-600 lg:text-xs xl:inline xl:text-sm 2xl:text-base">
                {section.text}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sticky top-16 z-30 border-b border-gray-200 bg-white sm:top-20 lg:hidden">
        <div className="container-custom px-4">
          <div className="flex space-x-1 py-2 sm:py-4">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(section.ref)}
                className="flex flex-1 items-center justify-center space-x-1 rounded-lg px-2 py-1.5 transition-all duration-300 hover:bg-primary-50 hover:text-primary-600 sm:space-x-2 sm:px-4 sm:py-2"
              >
                <div className="h-4 w-4 text-gray-600 transition-colors duration-300 hover:text-primary-600 sm:h-5 sm:w-5">
                  {section.icon}
                </div>
                <span className="text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-primary-600 sm:text-sm">
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

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
        <div className="rounded-xl border border-gray-200 bg-white/95 p-2 shadow-lg backdrop-blur-sm">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(section.ref)}
              className="group flex w-full items-center justify-start space-x-2 rounded-lg p-2 transition-all duration-300 hover:bg-primary-50 hover:text-primary-600 hover:shadow-sm"
            >
              <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center text-gray-600 transition-colors duration-300 group-hover:text-primary-600">
                {section.icon}
              </div>
              <span className="hidden whitespace-nowrap text-xs font-medium text-gray-700 transition-colors duration-300 group-hover:text-primary-600 xl:inline">
                {section.text}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sticky top-16 z-30 border-b border-gray-200 bg-white sm:top-20 lg:hidden">
        <div className="container-custom">
          <div className="flex space-x-2 px-4 py-3 sm:space-x-4 sm:px-6 sm:py-4">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(section.ref)}
                className="flex flex-1 flex-col items-center justify-center space-y-1 rounded-lg px-2 py-1.5 transition-all duration-300 hover:bg-primary-50 hover:text-primary-600 hover:shadow-sm sm:space-y-1.5 sm:px-3 sm:py-2"
              >
                <div className="flex h-5 w-5 items-center justify-center text-gray-600 transition-colors duration-300 group-hover:text-primary-600 sm:h-6 sm:w-6">
                  {section.icon}
                </div>
                <span className="text-xs font-medium text-gray-700 transition-colors duration-300 group-hover:text-primary-600 sm:text-sm">
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
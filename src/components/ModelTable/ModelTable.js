"use client";

import { useState } from "react";
import useImages from "../../hooks/useImages";
import ImageLoading from "../ImageLoading/ImageLoading";
import ModelList from "../ModelList/ModelList";
import Pagination from "../Pagination/Pagination";

const MODELS_PER_PAGE = 1;

export default function ModelTable() {
  const [models, error] = useImages("model");
  const [currentPage, setCurrentPage] = useState(1);

  if (error) throw error;

  if (!models) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ImageLoading />
      </div>
    );
  }

  const totalModels = models?.length;
  const indexOfLastModel = currentPage * MODELS_PER_PAGE;
  const indexOfFirstModel = indexOfLastModel - MODELS_PER_PAGE;
  const currentModel = models?.slice(indexOfFirstModel, indexOfLastModel)[0];

  const handlePagination = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalModels) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Naši <span className="text-gradient">Modeli</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Pregledajte našu kolekciju betonskih ograda i pronađite savršen dizajn za vaš prostor
          </p>
        </div>
        
        <Pagination
          modelsPerPage={MODELS_PER_PAGE}
          totalModels={totalModels}
          paginate={handlePagination}
          currentPage={currentPage}
        />
        
        <ModelList
          model={currentModel}
          paginate={handlePagination}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
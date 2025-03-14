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
      <div style={{ width: "100%", height: "100vh" }}>
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
    <div className="models-page page-margin-top">
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
  );
}

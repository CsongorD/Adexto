"use client";

import { useState } from "react";
import useImages from "../../hooks/useImages";
import ImageLoading from "../ImageLoading/ImageLoading";
import ModelList from "../ModelList/ModelList";
import Pagination from "../Pagination/Pagination";

import styles from "./ModelTable.module.css"; // Assuming you have a CSS file for styling

const MODELS_PER_PAGE = 1;

export default function ModelTable() {
  const [models, error] = useImages("model");
  const [currentPage, setCurrentPage] = useState(1);

  if (error) throw error;

  if (!models) {
    return (
      <div className={styles["loading-container"]}>
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
    <div className={styles["model-table"] + " page-margin-top"}>
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

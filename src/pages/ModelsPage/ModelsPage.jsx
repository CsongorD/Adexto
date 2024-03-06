import "./ModelsPage.css";
import { useState } from "react";
import models from "../../data/model_db.json";

import Pagination from "../../components/Pagination/Pagination";
import ModelList from "../../components/ModelList/ModelList";
import { Helmet } from "react-helmet-async";

const ModelsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 1;
  const totalPosts = models.length;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPost = models.slice(indexOfFirstPost, indexOfLastPost)[0];

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= models.length) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <Helmet>
        <title>Modeli</title>
        <meta
          name="description"
          content="Vidite nase modeli.................................."
        />
        <link rel="canonical" href="/modeli" />
      </Helmet>
      <div className="models-page">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
          paginate={paginate}
          currentPage={currentPage}
        />
        <ModelList
          model={currentPost}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default ModelsPage;

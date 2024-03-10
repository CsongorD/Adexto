import "./ModelsPage.css";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useImages from "../../hooks/useImages";
import Pagination from "../../components/Pagination/Pagination";
import ModelList from "../../components/ModelList/ModelList";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import ImageLoading from "../../components/ImageLoading/ImageLoading";

const MODELS_PER_PAGE = 1;

const ModelsPage = () => {
  const [models, error] = useImages("model");
  const [currentPage, setCurrentPage] = useState(1);

  if (error) {
    return <ErrorComponent error={error.message} />;
  }
  if (!models) {
    return <ImageLoading />;
  }

  const totalPosts = models.length;
  const indexOfLastPost = currentPage * MODELS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - MODELS_PER_PAGE;
  const currentPost = models.slice(indexOfFirstPost, indexOfLastPost)[0];

  const handlePagination = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPosts) {
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
        <link rel="canonical" href="https://adexto.web.app/modeli" />
      </Helmet>
      <div className="models-page page-margin-top">
        <Pagination
          postsPerPage={MODELS_PER_PAGE}
          totalPosts={totalPosts}
          paginate={handlePagination}
          currentPage={currentPage}
        />
        <ModelList
          model={currentPost}
          paginate={handlePagination}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default ModelsPage;

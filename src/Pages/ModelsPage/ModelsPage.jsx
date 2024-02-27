import { useState } from "react";
import "./ModelsPage.css";

import Header from "../../Components/Header/Header";
import Pagination from "../../Components/Pagination/Pagination";
import ModelList from "../../Components/ModelList/ModelList";
import Footer from "../../Components/Footer/Footer";

const models = require("../../assets/db/model_db.json");

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
    <div className="models-page">
      <Header />
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
      <Footer />
    </div>
  );
};

export default ModelsPage;

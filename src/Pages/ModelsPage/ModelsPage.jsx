import { useState } from "react";
import "./ModelsPage.css";

import Header from "../../Components/Header/Header";
import Pagination from "../../Components/Pagination/Pagination";
import ModelList from "../../Components/ModelList/ModelList";
import Footer from "../../Components/Footer/Footer";

const models = require("../../assets/db/model_db.json");

const ModelsPage = () => {
  const [posts /*, setPosts*/] = useState(models);
  const [loading /*, setLoading*/] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage /*, setPostsPerPage*/] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= posts.length) {
      setCurrentPage(pageNumber);
    }
    // else {
    //   setCurrentPage(1);
    // }
  };

  // console.log("Current PAGE: " + currentPage);

  return (
    <div className="models-page">
      <Header />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <ModelList
        models={currentPosts}
        loading={loading}
        paginate={paginate}
        currentPage={currentPage}
      />
      <Footer />
    </div>
  );
};

export default ModelsPage;

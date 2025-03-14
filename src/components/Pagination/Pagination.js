import NextIcon from "../Icons/NextIcon";
import PrevIcon from "../Icons/PrevIcon";
import styles from "./Pagination.module.css";

const Pagination = ({ modelsPerPage, totalModels, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalModels / modelsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  function showNextModel() {
    if (!isLastPage) paginate(currentPage + 1);
  }
  function showPrevModel() {
    if (!isFirstPage) paginate(currentPage - 1);
  }

  function getRange(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  function getPaginationRange(totalPages, page, siblings = 1) {
    const totalPageNumbers = 5 + siblings * 2;

    if (totalPageNumbers >= totalPages) {
      return getRange(1, totalPages);
    }

    const leftSibling = Math.max(page - siblings, 1);
    const rightSibling = Math.min(page + siblings, totalPages);

    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < totalPages - 1;

    if (!showLeftDots && showRightDots) {
      return [...getRange(1, 3 + siblings * 2), "...", totalPages];
    } else if (showLeftDots && !showRightDots) {
      return [
        1,
        "...",
        ...getRange(totalPages - (3 + siblings * 2), totalPages),
      ];
    } else {
      return [
        1,
        "...",
        ...getRange(leftSibling, rightSibling),
        "...",
        totalPages,
      ];
    }
  }

  const paginationNumbers = getPaginationRange(totalPages, currentPage, 1);

  return (
    <div className={styles.pagination}>
      <ul>
        <li
          className={
            styles.btn +
            " " +
            styles.prev +
            ` ${isFirstPage ? styles.disabled : ""}`
          }
          onClick={showPrevModel}
        >
          <PrevIcon className={styles["arrow-icon"]} />
        </li>

        {paginationNumbers.map((number, index) => {
          const isActive = number === currentPage;
          const isDots = number === "...";
          return (
            <li
              key={isDots ? `dots-${index}` : number}
              className={`${isDots ? styles.dots : styles.numb} ${
                isActive ? styles.active : ""
              }`}
              onClick={() => !isDots && paginate(number)}
            >
              {number}
            </li>
          );
        })}

        <li
          className={
            styles.btn +
            " " +
            styles.next +
            ` ${isLastPage ? styles.disabled : ""}`
          }
          onClick={showNextModel}
        >
          <NextIcon className={styles["arrow-icon"]} />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

import "./Pagination.css";
import NextIcon from "../Icons/NextIcon";
import PrevIcon from "../Icons/PrevIcon";

const Pagination = ({ modelsPerPage, totalModels, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalModels / modelsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const firstNumber = pageNumbers[0];
  const lastNumber = pageNumbers[pageNumbers.length - 1];
  let isFirstPage = currentPage === firstNumber;
  let isLastPage = currentPage === lastNumber;

  function showNextModel() {
    if (!isLastPage) {
      paginate(currentPage + 1);
    }
  }
  function showPrevModel() {
    if (!isFirstPage) {
      paginate(currentPage - 1);
    }
  }

  function getRange(start, end) {
    return Array.from({ length: end - start }, (_, i) => start + i);
  }

  function getPaginationRange(totalPage, page, siblings) {
    let totalPageNumberInArray = 5 + siblings;
    if (totalPageNumberInArray >= totalPage) {
      return getRange(1, totalPage + 1);
    }
    let leftSiblingsIndex = Math.max(page - siblings, 1);
    let rightSiblingsIndex = Math.min(page + siblings, totalPage);

    let showLeftDots = leftSiblingsIndex > 2;
    let showRightDots = rightSiblingsIndex < totalPage - 2;

    if (!showLeftDots && showRightDots) {
      let leftItemsCount = 3 + 2 * siblings;
      let leftRange = getRange(1, leftItemsCount + 1);
      return [...leftRange, "...", totalPage];
    } else if (!showRightDots && showLeftDots) {
      let rightItemsCount = 3 + 2 * siblings;
      let rightRange = getRange(totalPage - rightItemsCount + 1, totalPage + 1);
      return [1, "...", ...rightRange];
    } else {
      let middleRange = getRange(leftSiblingsIndex, rightSiblingsIndex + 1);
      return [1, "...", ...middleRange, "...", totalPage];
    }
  }
  let paginationNumbers = getPaginationRange(
    pageNumbers.length,
    currentPage,
    modelsPerPage,
    1
  );

  return (
    <div className="pagination">
      <ul>
        <li
          className={`btn prev${isFirstPage ? " disabled" : ""}`}
          onClick={showPrevModel}
        >
          <PrevIcon />
        </li>
        {paginationNumbers.map((number, index) => {
          const isActive = number === currentPage;
          const isDots = number === "...";
          return (
            <li
              key={isDots ? `dots-${index}` : number}
              className={isDots ? "dots" : `numb${isActive ? " active" : ""}`}
              onClick={() => !isDots && paginate(number)}
            >
              {number}
            </li>
          );
        })}
        <li
          className={`btn next${isLastPage ? " disabled" : ""}`}
          onClick={showNextModel}
        >
          <NextIcon />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

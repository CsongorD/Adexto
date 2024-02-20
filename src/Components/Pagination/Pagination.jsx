import React from "react";
import "./Pagination.css";
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const firstNumber = pageNumbers[0];
  const lastNumber = pageNumbers[pageNumbers.length - 1];

  function showNextModel() {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1);
    }
  }
  function showPrevModel() {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  }

  let numbers = getPaginationRange(
    pageNumbers.length,
    currentPage,
    postsPerPage,
    1
  );

  function getPaginationRange(totalPage, page, limit, siblings) {
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
  function getRange(start, end) {
    let result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }
  return (
    <div className="pagination">
      <ul>
        {currentPage === firstNumber ? (
          <li className="btn prev disabled">
            <box-icon
              id="btn-arrow"
              name="chevron-left"
              type="solid"
            ></box-icon>
          </li>
        ) : (
          <li className="btn prev" onClick={showPrevModel}>
            <box-icon
              id="btn-arrow"
              name="chevron-left"
              type="solid"
            ></box-icon>
          </li>
        )}
        {/* <li className="numb active">{firstNumber}</li>
        <li className="dots">...</li> */}
        {numbers.map((num, i) => {
          if (num === currentPage) {
            return (
              <li
                key={num}
                className="numb active"
                onClick={() => paginate(num)}
              >
                {num}
              </li>
            );
          } else if (num === "...") {
            return (
              <li key={"dots " + i} className="dots">
                {num}
              </li>
            );
          } else {
            return (
              <li key={num} className="numb" onClick={() => paginate(num)}>
                {num}
              </li>
            );
          }
        })}

        {/* <li className="dots">...</li>
        <li className="numb">{lastNumber}</li> */}
        {currentPage === lastNumber ? (
          <li className="btn next disabled">
            <box-icon
              id="btn-arrow"
              name="chevron-right"
              type="solid"
            ></box-icon>
          </li>
        ) : (
          <li className="btn next" onClick={showNextModel}>
            <box-icon
              id="btn-arrow"
              name="chevron-right"
              type="solid"
            ></box-icon>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;

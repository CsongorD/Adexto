import NextIcon from "../Icons/NextIcon";
import PrevIcon from "../Icons/PrevIcon";

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
    <div className="flex justify-center py-4 sm:py-6 lg:py-8">
      <div className="flex items-center space-x-1 sm:space-x-2 bg-white rounded-xl sm:rounded-2xl shadow-lg p-1 sm:p-2 border border-gray-200">
        <button
          onClick={showPrevModel}
          disabled={isFirstPage}
          className={`p-3 rounded-xl transition-all duration-300 ${
            isFirstPage
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
          }`}
        >
          <PrevIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {paginationNumbers.map((number, index) => {
          const isActive = number === currentPage;
          const isDots = number === "...";
          
          return (
            <button
              key={isDots ? `dots-${index}` : number}
              onClick={() => !isDots && paginate(number)}
              disabled={isDots}
              className={`min-w-[32px] sm:min-w-[40px] h-8 sm:h-10 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                isDots
                  ? "text-gray-400 cursor-default"
                  : isActive
                  ? "bg-primary-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
              }`}
            >
              {number}
            </button>
          );
        })}

        <button
          onClick={showNextModel}
          disabled={isLastPage}
          className={`p-3 rounded-xl transition-all duration-300 ${
            isLastPage
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
          }`}
        >
          <NextIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
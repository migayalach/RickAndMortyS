const Pagination = ({
  dataLength,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(dataLength / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <span
          key={i}
          onClick={() => handlePageClick(i)}
          style={{
            cursor: "pointer",
            fontWeight: currentPage === i ? "bold" : "normal",
          }}
        >
          {i}
        </span>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <h1>Pagination</h1>
      {currentPage > 1 && (
        <span onClick={handlePrevClick} style={{ cursor: "pointer" }}>
          {"<Prev>"}
        </span>
      )}
      <div>{renderPageNumbers()}</div>
      {currentPage < totalPages && (
        <span onClick={handleNextClick} style={{ cursor: "pointer" }}>
          {"Next"}
        </span>
      )}
    </div>
  );
};

export default Pagination;
